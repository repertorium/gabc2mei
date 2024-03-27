/**
 * Transducer created on purpose for the Repertorium project. It's separated from any mOOsicae
 * We use an ANTLR visitor instead an ANTLR listener because we can control the visiting order
 * @author David Rizo
 * @author Carlos Peñarubia
 * @author Juan Carlos Martínez-Sevilla
 */
import {CharStream, CharStreams, CommonTokenStream, ErrorNode, ParseTreeVisitor,} from "antlr4";
import gabc_grammar, {
    AttachmentContext,
    Bar_finallisContext,
    Bar_maiorContext,
    Bar_maximaContext,
    Bar_smallContext,
    BarContext,
    BodyContext,
    ClefContext, DotContext, Episema_verticalContext, Episema_horizontalContext,
    Musical_symbolContext,
    NoteContext, ShapeContext, SpaceContext,
    StartContext,
    Virga_rightContext,
    SyllableContext, System_breakContext,
    Linea_punctumContext, Linea_punctum_cavumContext,
    AccentusContext, Reversed_accentusContext,
    CirculusContext, Semi_circulusContext, Reversed_semi_circulusContext,
    Punctum_cavumContext
} from "../generated/antlr/gabc_grammar";
import {v4 as uuidv4} from "uuid";
import gabc_lexer from "../generated/antlr/gabc_lexer";
import gabc_grammarVisitor from "../generated/antlr/gabc_grammarVisitor";

import builder, {XMLElement} from 'xmlbuilder';
import {EClefShapes, IId, mOOsicaeFactory} from "../index";
import {gabcPitchToPositionInStaff} from "./gabc_utils";
import {IDImpl} from "../impl/moosicae.impl";

const SCHEMA_VERSION_INSTRUCTION = 'href="https://music-encoding.org/schema/dev/mei-all.rng" type="application/xml" schematypens="http://relaxng.org/ns/structure/1.0"';
const SCHEMATRON_INSTRUCTION = 'href="https://music-encoding.org/schema/dev/mei-all.rng" type="application/xml" schematypens="http://purl.oclc.org/dsdl/schematron"';

function newID(): IId {
    return new IDImpl(true, uuidv4());
}

/**
 * TODO This class encapsulates the interaction with mOOsicae that will be decoupled for Repertorium
 */
export class GABC2MEIUtils {
    static gabcPitchToMEI(gabcPitch: string, lastClefShape: string, lastClefLine: number): { pname: string, oct: number } {
        let clefShape: EClefShapes;
        if (lastClefShape == 'F') {
            clefShape = EClefShapes.F;
        } else if (lastClefShape == 'C') {
            clefShape = EClefShapes.C;
        } else {
            throw new Error('Invalid clef shape '+ lastClefShape);
        }
        const clef = mOOsicaeFactory.createClef(newID(), clefShape, lastClefLine);

        const positionInStaff = gabcPitchToPositionInStaff(gabcPitch);
        const pitch = mOOsicaeFactory.createPitchFromPositionInStaff(clef, positionInStaff); //TODO Alteration
        let pname: string = pitch.diatonicPitch.name.toLowerCase();
        let oct: number = pitch.octave;
        return {pname, oct};
    }
}


class GABC2MEITransducerVisitor extends ParseTreeVisitor<void> implements gabc_grammarVisitor<void> {
    private transduction: XMLElement;
    private layer: XMLElement;
    private lastClefShape: string | undefined;
    private lastClefLine: number | undefined;
    private lastNeume: XMLElement | undefined;
    private lastNeumePitches: string[];
    private state : string | undefined;
    private previousNeumePitch : string;
    private syllable : XMLElement | undefined;

    constructor() {
        super();
        this.transduction = builder.create('mei', { encoding: 'UTF-8'});
        this.transduction.instructionBefore('xml-model', SCHEMA_VERSION_INSTRUCTION);
        this.transduction.instructionBefore('xml-model', SCHEMATRON_INSTRUCTION);
        this.transduction.att("xmlns", "http://www.music-encoding.org/ns/mei");
        this.transduction.att("meiversion", "5.0.0-dev");
        this.createEmptyHead();
        this.layer = this.createSingleStaffMusic(4);
        this.lastNeumePitches = [];
        this.state = "Inicio";
        this.previousNeumePitch="void";
    }
    visitErrorNode(node: ErrorNode): void {
        //console.log('Visit error node: ' + node.getText());
    }

    private grammarError(message: string) {
        throw new Error('Grammar error: ' + message); //TODO - poder saltar cosas - anotarlas para que el usuario las deba revisarlas - deberíamos añadir más información
    }

    finishNeume() {
        //TODO Peña: Aquí hay que hacer la comprobación de tipo de neuma en función de lastNeumePitches
        if (this.lastNeume && this.lastNeumePitches.length > 0) {
            if (this.lastNeumePitches.length == 2) {
                if (this.lastNeumePitches[0].charCodeAt(0) < this.lastNeumePitches[1].charCodeAt(0)) {
                    this.lastNeume.att({'type': 'podatus'});
                } else if (this.lastNeumePitches[0].charCodeAt(0) > this.lastNeumePitches[1].charCodeAt(0)) {
                    this.lastNeume.att({'type': 'clivis'});
                }
            }
        }

        this.lastNeume = undefined;
        this.lastNeumePitches = [];
    }

    changeStateInicio(gabcPitch: string){
        this.state="1";
        if (!this.lastClefShape || !this.lastClefLine) {
            throw new Error('No clef found before the note');
        }
        const {pname, oct} = GABC2MEIUtils.gabcPitchToMEI(gabcPitch, this.lastClefShape, this.lastClefLine);
        const neume: XMLElement = this.getLastNeume();
        neume.ele('nc', {'pname': pname, 'oct': oct});
    }
    changeState1(gabcPitch: string){
        // Falta nota rombo
        if (!this.lastClefShape || !this.lastClefLine) {
            throw new Error('No clef found before the note');
        }

        if (gabcPitch.charCodeAt(0)-this.previousNeumePitch.charCodeAt(0) == 5){
            const {pname, oct} = GABC2MEIUtils.gabcPitchToMEI(gabcPitch, this.lastClefShape, this.lastClefLine);
            const neume: XMLElement = this.getLastNeume();
            neume.ele('nc', {'pname': pname, 'oct': oct});
            this.state="podatus";
            neume.att({'type': 'podatus'});
            this.state="Inicio";
            this.lastNeume = undefined;
        } else if (gabcPitch.charCodeAt(0)-this.previousNeumePitch.charCodeAt(0) > 0 && gabcPitch.charCodeAt(0)-this.previousNeumePitch.charCodeAt(0) <= 4){
            const {pname, oct} = GABC2MEIUtils.gabcPitchToMEI(gabcPitch, this.lastClefShape, this.lastClefLine);
            const neume: XMLElement = this.getLastNeume();
            neume.ele('nc', {'pname': pname, 'oct': oct});
            this.state="2";
        } else if (gabcPitch.charCodeAt(0)-this.previousNeumePitch.charCodeAt(0) < 0 && gabcPitch.charCodeAt(0)-this.previousNeumePitch.charCodeAt(0) >= -4){
            const {pname, oct} = GABC2MEIUtils.gabcPitchToMEI(gabcPitch, this.lastClefShape, this.lastClefLine);
            const neume: XMLElement = this.getLastNeume();
            neume.ele('nc', {'pname': pname, 'oct': oct});
            this.state="5";
        } else if (gabcPitch.charCodeAt(0)-this.previousNeumePitch.charCodeAt(0) == -5){
            const {pname, oct} = GABC2MEIUtils.gabcPitchToMEI(gabcPitch, this.lastClefShape, this.lastClefLine);
            const neume: XMLElement = this.getLastNeume();
            neume.ele('nc', {'pname': pname, 'oct': oct});
            this.state="clivis";
            neume.att({'type': 'clivis'});
            this.state="Inicio";
            this.lastNeume = undefined;
        } else {
            this.state="punctum";
            let neume: XMLElement = this.getLastNeume();
            neume.att({'type': 'punctum'});
            this.lastNeume = undefined;
            neume = this.getLastNeume();
            const {pname, oct} = GABC2MEIUtils.gabcPitchToMEI(gabcPitch, this.lastClefShape, this.lastClefLine);
            neume.ele('nc', {'pname': pname, 'oct': oct});
            this.state="1";
        }
    }
    changeState2(gabcPitch: string){
        if (!this.lastClefShape || !this.lastClefLine) {
            throw new Error('No clef found before the note');
        }
        if (gabcPitch.charCodeAt(0)-this.previousNeumePitch.charCodeAt(0) > 0){
            const {pname, oct} = GABC2MEIUtils.gabcPitchToMEI(gabcPitch, this.lastClefShape, this.lastClefLine);
            const neume: XMLElement = this.getLastNeume();
            neume.ele('nc', {'pname': pname, 'oct': oct});
            this.state="scandicus";
            neume.att({'type': 'scandicus'});
            this.state="Inicio";
            this.lastNeume = undefined;
        } else if (gabcPitch.charCodeAt(0)-this.previousNeumePitch.charCodeAt(0) < 0 && gabcPitch.charCodeAt(0)-this.previousNeumePitch.charCodeAt(0) >= -4){
            const {pname, oct} = GABC2MEIUtils.gabcPitchToMEI(gabcPitch, this.lastClefShape, this.lastClefLine);
            const neume: XMLElement = this.getLastNeume();
            neume.ele('nc', {'pname': pname, 'oct': oct});
            this.state="4";
        } else {
            this.state="podatus";
            let neume: XMLElement = this.getLastNeume();
            neume.att({'type': 'podatus'});
            this.lastNeume = undefined;
            neume = this.getLastNeume();
            const {pname, oct} = GABC2MEIUtils.gabcPitchToMEI(gabcPitch, this.lastClefShape, this.lastClefLine);
            neume.ele('nc', {'pname': pname, 'oct': oct});
            this.state="1";
        }
    }
    changeState4(gabcPitch: string){
        if (!this.lastClefShape || !this.lastClefLine) {
            throw new Error('No clef found before the note');
        }
        if (gabcPitch.charCodeAt(0)-this.previousNeumePitch.charCodeAt(0) > 0 && gabcPitch.charCodeAt(0)-this.previousNeumePitch.charCodeAt(0) <= 4){
            const {pname, oct} = GABC2MEIUtils.gabcPitchToMEI(gabcPitch, this.lastClefShape, this.lastClefLine);
            const neume: XMLElement = this.getLastNeume();
            neume.ele('nc', {'pname': pname, 'oct': oct});
            this.state="torculus resupinus";
            neume.att({'type': 'torculus resupinus'});
            this.state="Inicio";
            this.lastNeume = undefined;
        }else {
            this.state="torculus";
            let neume: XMLElement = this.getLastNeume();
            neume.att({'type': 'torculus'});
            this.lastNeume = undefined;
            neume = this.getLastNeume();
            const {pname, oct} = GABC2MEIUtils.gabcPitchToMEI(gabcPitch, this.lastClefShape, this.lastClefLine);
            neume.ele('nc', {'pname': pname, 'oct': oct});
            this.state="1";
        }
    }

    changeState5(gabcPitch: string){
        if (!this.lastClefShape || !this.lastClefLine) {
            throw new Error('No clef found before the note');
        }
        if (gabcPitch.charCodeAt(0)-this.previousNeumePitch.charCodeAt(0) > 0 && gabcPitch.charCodeAt(0)-this.previousNeumePitch.charCodeAt(0) <= 4){
            const {pname, oct} = GABC2MEIUtils.gabcPitchToMEI(gabcPitch, this.lastClefShape, this.lastClefLine);
            const neume: XMLElement = this.getLastNeume();
            neume.ele('nc', {'pname': pname, 'oct': oct});
            this.state="6";
        }else {
            this.state="clivis";
            let neume: XMLElement = this.getLastNeume();
            neume.att({'type': 'clivis'});
            this.lastNeume = undefined;
            neume = this.getLastNeume();
            const {pname, oct} = GABC2MEIUtils.gabcPitchToMEI(gabcPitch, this.lastClefShape, this.lastClefLine);
            neume.ele('nc', {'pname': pname, 'oct': oct});
            this.state="1";
        }
    }

    changeState6(gabcPitch: string){
        if (!this.lastClefShape || !this.lastClefLine) {
            throw new Error('No clef found before the note');
        }
        if (gabcPitch.charCodeAt(0)-this.previousNeumePitch.charCodeAt(0) < 0 && gabcPitch.charCodeAt(0)-this.previousNeumePitch.charCodeAt(0) >= -4){
            const {pname, oct} = GABC2MEIUtils.gabcPitchToMEI(gabcPitch, this.lastClefShape, this.lastClefLine);
            const neume: XMLElement = this.getLastNeume();
            neume.ele('nc', {'pname': pname, 'oct': oct});
            this.state="porrectus flexus";
            neume.att({'type': 'porrectus flexus'});
            this.state="Inicio";
            this.lastNeume = undefined;
        }else {
            this.state="porrectus";
            let neume: XMLElement = this.getLastNeume();
            neume.att({'type': 'porrectus'});
            this.lastNeume = undefined;
            neume = this.getLastNeume();
            const {pname, oct} = GABC2MEIUtils.gabcPitchToMEI(gabcPitch, this.lastClefShape, this.lastClefLine);
            neume.ele('nc', {'pname': pname, 'oct': oct});
            this.state="1";
        }
    }

    changeState(gabcPitch: string){
        //console.log("HOLAAAAAAAA ", this.state);
        switch (this.state){
            case "Inicio": {
                this.changeStateInicio(gabcPitch);
                break;
            }
            case "1": {
                this.changeState1(gabcPitch);
                break;
            }
            case "2": {
                this.changeState2(gabcPitch);
                break;
            }
            case "4": {
                this.changeState4(gabcPitch);
                break;
            }
            case "5": {
                this.changeState5(gabcPitch);
                break;
            }
            case "6": {
                this.changeState6(gabcPitch);
                break;
            }
            default:{

            }
        }
        this.previousNeumePitch = gabcPitch;
    }

    endNeume(){
        switch (this.state){
            case "1": {
                const neume: XMLElement = this.getLastNeume();
                neume.att({'type': 'punctum'});
                break;
            }
            case "2": {
                const neume: XMLElement = this.getLastNeume();
                neume.att({'type': 'podatus'});
                break;
            }
            case "4": {
                const neume: XMLElement = this.getLastNeume();
                neume.att({'type': 'torculus'});
                break;
            }
            case "5": {
                const neume: XMLElement = this.getLastNeume();
                neume.att({'type': 'clivis'});
                break;
            }
            case "6": {
                const neume: XMLElement = this.getLastNeume();
                neume.att({'type': 'porrectus'});
                break;
            }
            default:{ }
        }
        this.state="Inicio";
        this.lastNeume = undefined;
    }

    createEmptyHead() {
        const meiHead = this.transduction.ele("meiHead");
        const fileDesc = meiHead.ele('fileDesc');
        fileDesc.ele("titleStmt").ele("title");
        fileDesc.ele("pubStmt");
    }

    getMEI() {
        const MEI = this.transduction.end({ pretty: true })
        return MEI;
    }

    private createSingleStaffMusic(staffLines: number) {
        const mdiv = this.transduction.ele("music").ele("body").ele("mdiv");
        mdiv.att("type", "solesmes");
        const score = mdiv.ele("score");
        score.ele("scoreDef").ele("staffGrp").ele("staffDef", {"n" : "1", "notationtype": "neume", "lines": staffLines});
        return score.ele("section").ele("staff", {'n': '1'}).ele("layer", {'n': '1'});
    }

    /**
     * Visit a parse tree produced by `gabc_grammar.start`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStart(ctx: StartContext): void {
        //console.log('Visit start: ' + ctx.getText());
        this.visitBody(ctx.body());
    }

    visitBody(ctx: BodyContext): void {
        //console.log('Visit body: ' + ctx.getText());
        this.visitChildren(ctx);
    }

    visitClef(ctx: ClefContext): void {
        //console.log('Visit clef: ' + ctx.getText());
        const meiClef = this.layer.ele('clef');

        this.lastClefShape = ctx.clef_symbol().getText().toUpperCase();
        this.lastClefLine = parseInt(ctx.clef_number().getText());
        meiClef.att('shape', this.lastClefShape);
        //TODO Falta flat opcional
        meiClef.att('line', this.lastClefLine);
    }

    visitSyllable(ctx: SyllableContext): void {
        //console.log('Visit syllable: ' + ctx.getText());
        if (ctx.SYLLABLE()!==null){
            this.syllable = this.layer.ele('syllable');
            this.syllable.ele('syl', {'text': ctx.SYLLABLE().getText()})
        }
        this.visitChildren(ctx);
        //this.finishNeume();
        this.endNeume();
        this.syllable=undefined;
    }

    visitMusical_symbol(ctx: Musical_symbolContext): void {
        //console.log('Visit musical symbol: ' + ctx.getText());
        this.visitChildren(ctx);
    }

    visitSpace(ctx: SpaceContext): void {
        //console.log('Visit space: ' + ctx.getText());
        this.finishNeume();
    }

    visitNote(ctx: NoteContext): void {
        //console.log('Visit note: ' + ctx.getText());
        let gabcPitch = ctx.pitch().getText();
        if (!this.lastClefShape || !this.lastClefLine) {
            throw new Error('No clef found before the note');
        }

        let lowerCase = true;
        const gabcPitchLowerCase = gabcPitch.toLowerCase();
        if (gabcPitchLowerCase != gabcPitch) {
            lowerCase = false; //TODO es punctum inclinatum, a diamond-shaped note, which are less frequently used. (https://gregorio-project.github.io/gabc/index.html#heights)
            gabcPitch =  gabcPitchLowerCase;
        }

        //this.lastNeumePitches.push(gabcPitch);
        this.changeState(gabcPitch);

        //TODO Comprobar octava
        //const {pname, oct} = GABC2MEIUtils.gabcPitchToMEI(gabcPitch, this.lastClefShape, this.lastClefLine);
        //const neume: XMLElement = this.getLastNeume();
        //neume.ele('nc', {'pname': pname, 'oct': oct});

        this.visitChildren(ctx);
    }

    getLastNeume(): XMLElement {
        if (this.syllable===undefined){
            if (!this.lastNeume) {
                this.lastNeume = this.layer.ele('neume');
            }
            return this.lastNeume;
        }else{
            if (!this.lastNeume) {
                this.lastNeume = this.syllable.ele('neume');
            }
            return this.lastNeume;
        }
    }

    visitBar(ctx: BarContext): void {
        //console.log('Visit bar: ' + ctx.getText());
        this.visitChildren(ctx);
    }

    generateDivision(form: string): void {
        this.layer.ele('divLine', {'form': form});
    }

    visitBar_maxima(ctx: Bar_maximaContext): void {
        //console.log('Visit bar maxima: ' + ctx.getText());
        this.generateDivision('maxima');
    }

    visitBar_maior(ctx: Bar_maiorContext): void {
        //console.log('Visit bar maior: ' + ctx.getText());
        this.generateDivision('maior');
    }

    visitBar_finallis(ctx: Bar_finallisContext): void {
        //console.log('Visit bar finallis: ' + ctx.getText());
        this.generateDivision('finalis');
    }

    visitBar_small(ctx: Bar_smallContext): void {
        //console.log('Visit bar maxima: ' + ctx.getText());
        this.generateDivision('small');
    }

    visitDot(ctx: DotContext): void {
        //console.log('Visit dot: ' + ctx.getText());
        this.layer.ele('dot', {'form': 'aug'}); //TODO Otros tipos?
    }

    visitSystem_break(ctx: System_breakContext): void {
        //console.log('Visit system break: ' + ctx.getText());
        this.layer.ele('sb');
    }

    visitAttachment(ctx: AttachmentContext): void {
        //console.log('Visit attachment: ' + ctx.getText());
        this.visitChildren(ctx);
    }

    visitShape(ctx: ShapeContext): void {
        this.visitChildren(ctx);
    }

    visitVirga_right(ctx: Virga_rightContext): void {
        const neume: XMLElement = this.getLastNeume();
        neume.ele('virga');
    }

    visitEpisema_horizontal(ctx: Episema_horizontalContext): void {
        //console.log('Visit episema: ' + ctx.getText());
        const neume: XMLElement = this.getLastNeume();
        neume.ele('episema', {'form': 'h'});
    }

    visitLinea_punctum(ctx: Linea_punctumContext): void {
        //console.log('Visit episema: ' + ctx.getText());
        const neume: XMLElement = this.getLastNeume();
        neume.ele('linea', {'form': 'punctum'});
    }

    visitLinea_punctum_cavum(ctx: Linea_punctum_cavumContext): void {
        //console.log('Visit episema: ' + ctx.getText());
        const neume: XMLElement = this.getLastNeume();
        neume.ele('linea', {'form': 'cavum'});
    }

    visitAccentus(ctx: AccentusContext): void {
        //console.log('Visit episema: ' + ctx.getText());
        const neume: XMLElement = this.getLastNeume();
        neume.ele('accent', {'form': 'straight'});
    }

    visitReversed_accentus(ctx: Reversed_accentusContext): void {
        //console.log('Visit episema: ' + ctx.getText());
        const neume: XMLElement = this.getLastNeume();
        neume.ele('accent', {'form': 'reversed'});
    }

    visitCirculus(ctx: CirculusContext): void {
        //console.log('Visit episema: ' + ctx.getText());
        const neume: XMLElement = this.getLastNeume();
        neume.ele('circulus');
    }

    visitSemi_circulus(ctx: Semi_circulusContext): void {
        //console.log('Visit episema: ' + ctx.getText());
        const neume: XMLElement = this.getLastNeume();
        neume.ele('semi_circulus', {'form': 'straight'});
    }

    visitReversed_semi_circulus(ctx: Reversed_semi_circulusContext): void {
        //console.log('Visit episema: ' + ctx.getText());
        const neume: XMLElement = this.getLastNeume();
        neume.ele('semi_circulus', {'form': 'reversed'});
    }

    visitPunctum_cavum(ctx: Punctum_cavumContext): void {
        //console.log('Visit episema: ' + ctx.getText());
        const neume: XMLElement = this.getLastNeume();
        neume.ele('cavum');
    }

    visitEpisema_vertical(ctx: Episema_verticalContext): void {
        //console.log('Visit episema: ' + ctx.getText());
        const neume: XMLElement = this.getLastNeume();
        neume.ele('episema', {'form': 'v'});
    }
}


export class GABC2MEITransducerFromANTLR {
    private visitor: GABC2MEITransducerVisitor;
    private parser: gabc_grammar;

    constructor(input: string) {
        const charStream = CharStreams.fromString(input);
        const lexer = this.createLexer(charStream);
        const tokenStream = new CommonTokenStream(lexer);
        this.parser = this.createParser(tokenStream);
        this.visitor = this.createVisitor();
        this.visitor.visitStart(this.parser.start());
    }

    get transduction(): string {
        return this.visitor.getMEI();
    }

    protected createLexer(charStream: CharStream): gabc_lexer {
        return new gabc_lexer(charStream);
    }

    protected createParser(tokenStream: CommonTokenStream): gabc_grammar {
        return new gabc_grammar(tokenStream);
    }

    protected createVisitor(): GABC2MEITransducerVisitor {
        return new GABC2MEITransducerVisitor();
    }
}



export class GABC2MEITransducer {
    transduce(input: string): string {
        const amt = new GABC2MEITransducerFromANTLR(input);
        return amt.transduction;
    }
}
