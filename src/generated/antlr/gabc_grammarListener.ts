// Generated from ./antlr/gabc/gabc_grammar.g4 by ANTLR 4.13.0

import {ParseTreeListener} from "antlr4";


import { StartContext } from "./gabc_grammar";
import { HeaderContext } from "./gabc_grammar";
import { Header_typesContext } from "./gabc_grammar";
import { BodyContext } from "./gabc_grammar";
import { SyllableContext } from "./gabc_grammar";
import { Musical_symbolContext } from "./gabc_grammar";
import { System_breakContext } from "./gabc_grammar";
import { NoteContext } from "./gabc_grammar";
import { ClefContext } from "./gabc_grammar";
import { DotContext } from "./gabc_grammar";
import { BarContext } from "./gabc_grammar";
import { Bar_smallContext } from "./gabc_grammar";
import { Bar_maximaContext } from "./gabc_grammar";
import { Bar_finallisContext } from "./gabc_grammar";
import { Bar_maiorContext } from "./gabc_grammar";
import { ShapeContext } from "./gabc_grammar";
import { Virga_rightContext } from "./gabc_grammar";
import { Virga_leftContext } from "./gabc_grammar";
import { FlatContext } from "./gabc_grammar";
import { NaturalContext } from "./gabc_grammar";
import { TristrophaContext } from "./gabc_grammar";
import { AttachmentContext } from "./gabc_grammar";
import { Punctum_cavumContext } from "./gabc_grammar";
import { Linea_punctumContext } from "./gabc_grammar";
import { Linea_punctum_cavumContext } from "./gabc_grammar";
import { AccentusContext } from "./gabc_grammar";
import { Reversed_accentusContext } from "./gabc_grammar";
import { CirculusContext } from "./gabc_grammar";
import { Semi_circulusContext } from "./gabc_grammar";
import { Reversed_semi_circulusContext } from "./gabc_grammar";
import { Episema_verticalContext } from "./gabc_grammar";
import { Episema_horizontalContext } from "./gabc_grammar";
import { Position_horizontal_episemaContext } from "./gabc_grammar";
import { PitchContext } from "./gabc_grammar";
import { InclinatumContext } from "./gabc_grammar";
import { Clef_symbolContext } from "./gabc_grammar";
import { Clef_numberContext } from "./gabc_grammar";
import { Bar_numberContext } from "./gabc_grammar";
import { SpaceContext } from "./gabc_grammar";
import { No_spaceContext } from "./gabc_grammar";
import { No_space_coccectingContext } from "./gabc_grammar";
import { Neumatic_cutContext } from "./gabc_grammar";
import { Space_factorContext } from "./gabc_grammar";
import { Factor_numberContext } from "./gabc_grammar";
import { CustosContext } from "./gabc_grammar";
import { BraceContext } from "./gabc_grammar";
import { BracketsContext } from "./gabc_grammar";
import { Brace_positionContext } from "./gabc_grammar";
import { Brace_shapeContext } from "./gabc_grammar";
import { Brace_attachmentContext } from "./gabc_grammar";
import { Number_decimalContext } from "./gabc_grammar";
import { NumberContext } from "./gabc_grammar";
import { Lyric_symbolsContext } from "./gabc_grammar";
import { LyricContext } from "./gabc_grammar";
import { Open_text_modifiersContext } from "./gabc_grammar";
import { Close_text_modifiersContext } from "./gabc_grammar";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `gabc_grammar`.
 */
export default class gabc_grammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `gabc_grammar.start`.
	 * @param ctx the parse tree
	 */
	enterStart?: (ctx: StartContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.start`.
	 * @param ctx the parse tree
	 */
	exitStart?: (ctx: StartContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.header`.
	 * @param ctx the parse tree
	 */
	enterHeader?: (ctx: HeaderContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.header`.
	 * @param ctx the parse tree
	 */
	exitHeader?: (ctx: HeaderContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.header_types`.
	 * @param ctx the parse tree
	 */
	enterHeader_types?: (ctx: Header_typesContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.header_types`.
	 * @param ctx the parse tree
	 */
	exitHeader_types?: (ctx: Header_typesContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.body`.
	 * @param ctx the parse tree
	 */
	enterBody?: (ctx: BodyContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.body`.
	 * @param ctx the parse tree
	 */
	exitBody?: (ctx: BodyContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.syllable`.
	 * @param ctx the parse tree
	 */
	enterSyllable?: (ctx: SyllableContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.syllable`.
	 * @param ctx the parse tree
	 */
	exitSyllable?: (ctx: SyllableContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.musical_symbol`.
	 * @param ctx the parse tree
	 */
	enterMusical_symbol?: (ctx: Musical_symbolContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.musical_symbol`.
	 * @param ctx the parse tree
	 */
	exitMusical_symbol?: (ctx: Musical_symbolContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.system_break`.
	 * @param ctx the parse tree
	 */
	enterSystem_break?: (ctx: System_breakContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.system_break`.
	 * @param ctx the parse tree
	 */
	exitSystem_break?: (ctx: System_breakContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.note`.
	 * @param ctx the parse tree
	 */
	enterNote?: (ctx: NoteContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.note`.
	 * @param ctx the parse tree
	 */
	exitNote?: (ctx: NoteContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.clef`.
	 * @param ctx the parse tree
	 */
	enterClef?: (ctx: ClefContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.clef`.
	 * @param ctx the parse tree
	 */
	exitClef?: (ctx: ClefContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.dot`.
	 * @param ctx the parse tree
	 */
	enterDot?: (ctx: DotContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.dot`.
	 * @param ctx the parse tree
	 */
	exitDot?: (ctx: DotContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.bar`.
	 * @param ctx the parse tree
	 */
	enterBar?: (ctx: BarContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.bar`.
	 * @param ctx the parse tree
	 */
	exitBar?: (ctx: BarContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.bar_small`.
	 * @param ctx the parse tree
	 */
	enterBar_small?: (ctx: Bar_smallContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.bar_small`.
	 * @param ctx the parse tree
	 */
	exitBar_small?: (ctx: Bar_smallContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.bar_maxima`.
	 * @param ctx the parse tree
	 */
	enterBar_maxima?: (ctx: Bar_maximaContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.bar_maxima`.
	 * @param ctx the parse tree
	 */
	exitBar_maxima?: (ctx: Bar_maximaContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.bar_finallis`.
	 * @param ctx the parse tree
	 */
	enterBar_finallis?: (ctx: Bar_finallisContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.bar_finallis`.
	 * @param ctx the parse tree
	 */
	exitBar_finallis?: (ctx: Bar_finallisContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.bar_maior`.
	 * @param ctx the parse tree
	 */
	enterBar_maior?: (ctx: Bar_maiorContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.bar_maior`.
	 * @param ctx the parse tree
	 */
	exitBar_maior?: (ctx: Bar_maiorContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.shape`.
	 * @param ctx the parse tree
	 */
	enterShape?: (ctx: ShapeContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.shape`.
	 * @param ctx the parse tree
	 */
	exitShape?: (ctx: ShapeContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.virga_right`.
	 * @param ctx the parse tree
	 */
	enterVirga_right?: (ctx: Virga_rightContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.virga_right`.
	 * @param ctx the parse tree
	 */
	exitVirga_right?: (ctx: Virga_rightContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.virga_left`.
	 * @param ctx the parse tree
	 */
	enterVirga_left?: (ctx: Virga_leftContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.virga_left`.
	 * @param ctx the parse tree
	 */
	exitVirga_left?: (ctx: Virga_leftContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.flat`.
	 * @param ctx the parse tree
	 */
	enterFlat?: (ctx: FlatContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.flat`.
	 * @param ctx the parse tree
	 */
	exitFlat?: (ctx: FlatContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.natural`.
	 * @param ctx the parse tree
	 */
	enterNatural?: (ctx: NaturalContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.natural`.
	 * @param ctx the parse tree
	 */
	exitNatural?: (ctx: NaturalContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.tristropha`.
	 * @param ctx the parse tree
	 */
	enterTristropha?: (ctx: TristrophaContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.tristropha`.
	 * @param ctx the parse tree
	 */
	exitTristropha?: (ctx: TristrophaContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.attachment`.
	 * @param ctx the parse tree
	 */
	enterAttachment?: (ctx: AttachmentContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.attachment`.
	 * @param ctx the parse tree
	 */
	exitAttachment?: (ctx: AttachmentContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.punctum_cavum`.
	 * @param ctx the parse tree
	 */
	enterPunctum_cavum?: (ctx: Punctum_cavumContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.punctum_cavum`.
	 * @param ctx the parse tree
	 */
	exitPunctum_cavum?: (ctx: Punctum_cavumContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.linea_punctum`.
	 * @param ctx the parse tree
	 */
	enterLinea_punctum?: (ctx: Linea_punctumContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.linea_punctum`.
	 * @param ctx the parse tree
	 */
	exitLinea_punctum?: (ctx: Linea_punctumContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.linea_punctum_cavum`.
	 * @param ctx the parse tree
	 */
	enterLinea_punctum_cavum?: (ctx: Linea_punctum_cavumContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.linea_punctum_cavum`.
	 * @param ctx the parse tree
	 */
	exitLinea_punctum_cavum?: (ctx: Linea_punctum_cavumContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.accentus`.
	 * @param ctx the parse tree
	 */
	enterAccentus?: (ctx: AccentusContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.accentus`.
	 * @param ctx the parse tree
	 */
	exitAccentus?: (ctx: AccentusContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.reversed_accentus`.
	 * @param ctx the parse tree
	 */
	enterReversed_accentus?: (ctx: Reversed_accentusContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.reversed_accentus`.
	 * @param ctx the parse tree
	 */
	exitReversed_accentus?: (ctx: Reversed_accentusContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.circulus`.
	 * @param ctx the parse tree
	 */
	enterCirculus?: (ctx: CirculusContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.circulus`.
	 * @param ctx the parse tree
	 */
	exitCirculus?: (ctx: CirculusContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.semi_circulus`.
	 * @param ctx the parse tree
	 */
	enterSemi_circulus?: (ctx: Semi_circulusContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.semi_circulus`.
	 * @param ctx the parse tree
	 */
	exitSemi_circulus?: (ctx: Semi_circulusContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.reversed_semi_circulus`.
	 * @param ctx the parse tree
	 */
	enterReversed_semi_circulus?: (ctx: Reversed_semi_circulusContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.reversed_semi_circulus`.
	 * @param ctx the parse tree
	 */
	exitReversed_semi_circulus?: (ctx: Reversed_semi_circulusContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.episema_vertical`.
	 * @param ctx the parse tree
	 */
	enterEpisema_vertical?: (ctx: Episema_verticalContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.episema_vertical`.
	 * @param ctx the parse tree
	 */
	exitEpisema_vertical?: (ctx: Episema_verticalContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.episema_horizontal`.
	 * @param ctx the parse tree
	 */
	enterEpisema_horizontal?: (ctx: Episema_horizontalContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.episema_horizontal`.
	 * @param ctx the parse tree
	 */
	exitEpisema_horizontal?: (ctx: Episema_horizontalContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.position_horizontal_episema`.
	 * @param ctx the parse tree
	 */
	enterPosition_horizontal_episema?: (ctx: Position_horizontal_episemaContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.position_horizontal_episema`.
	 * @param ctx the parse tree
	 */
	exitPosition_horizontal_episema?: (ctx: Position_horizontal_episemaContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.pitch`.
	 * @param ctx the parse tree
	 */
	enterPitch?: (ctx: PitchContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.pitch`.
	 * @param ctx the parse tree
	 */
	exitPitch?: (ctx: PitchContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.inclinatum`.
	 * @param ctx the parse tree
	 */
	enterInclinatum?: (ctx: InclinatumContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.inclinatum`.
	 * @param ctx the parse tree
	 */
	exitInclinatum?: (ctx: InclinatumContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.clef_symbol`.
	 * @param ctx the parse tree
	 */
	enterClef_symbol?: (ctx: Clef_symbolContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.clef_symbol`.
	 * @param ctx the parse tree
	 */
	exitClef_symbol?: (ctx: Clef_symbolContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.clef_number`.
	 * @param ctx the parse tree
	 */
	enterClef_number?: (ctx: Clef_numberContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.clef_number`.
	 * @param ctx the parse tree
	 */
	exitClef_number?: (ctx: Clef_numberContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.bar_number`.
	 * @param ctx the parse tree
	 */
	enterBar_number?: (ctx: Bar_numberContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.bar_number`.
	 * @param ctx the parse tree
	 */
	exitBar_number?: (ctx: Bar_numberContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.space`.
	 * @param ctx the parse tree
	 */
	enterSpace?: (ctx: SpaceContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.space`.
	 * @param ctx the parse tree
	 */
	exitSpace?: (ctx: SpaceContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.no_space`.
	 * @param ctx the parse tree
	 */
	enterNo_space?: (ctx: No_spaceContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.no_space`.
	 * @param ctx the parse tree
	 */
	exitNo_space?: (ctx: No_spaceContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.no_space_coccecting`.
	 * @param ctx the parse tree
	 */
	enterNo_space_coccecting?: (ctx: No_space_coccectingContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.no_space_coccecting`.
	 * @param ctx the parse tree
	 */
	exitNo_space_coccecting?: (ctx: No_space_coccectingContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.neumatic_cut`.
	 * @param ctx the parse tree
	 */
	enterNeumatic_cut?: (ctx: Neumatic_cutContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.neumatic_cut`.
	 * @param ctx the parse tree
	 */
	exitNeumatic_cut?: (ctx: Neumatic_cutContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.space_factor`.
	 * @param ctx the parse tree
	 */
	enterSpace_factor?: (ctx: Space_factorContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.space_factor`.
	 * @param ctx the parse tree
	 */
	exitSpace_factor?: (ctx: Space_factorContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.factor_number`.
	 * @param ctx the parse tree
	 */
	enterFactor_number?: (ctx: Factor_numberContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.factor_number`.
	 * @param ctx the parse tree
	 */
	exitFactor_number?: (ctx: Factor_numberContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.custos`.
	 * @param ctx the parse tree
	 */
	enterCustos?: (ctx: CustosContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.custos`.
	 * @param ctx the parse tree
	 */
	exitCustos?: (ctx: CustosContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.brace`.
	 * @param ctx the parse tree
	 */
	enterBrace?: (ctx: BraceContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.brace`.
	 * @param ctx the parse tree
	 */
	exitBrace?: (ctx: BraceContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.brackets`.
	 * @param ctx the parse tree
	 */
	enterBrackets?: (ctx: BracketsContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.brackets`.
	 * @param ctx the parse tree
	 */
	exitBrackets?: (ctx: BracketsContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.brace_position`.
	 * @param ctx the parse tree
	 */
	enterBrace_position?: (ctx: Brace_positionContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.brace_position`.
	 * @param ctx the parse tree
	 */
	exitBrace_position?: (ctx: Brace_positionContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.brace_shape`.
	 * @param ctx the parse tree
	 */
	enterBrace_shape?: (ctx: Brace_shapeContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.brace_shape`.
	 * @param ctx the parse tree
	 */
	exitBrace_shape?: (ctx: Brace_shapeContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.brace_attachment`.
	 * @param ctx the parse tree
	 */
	enterBrace_attachment?: (ctx: Brace_attachmentContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.brace_attachment`.
	 * @param ctx the parse tree
	 */
	exitBrace_attachment?: (ctx: Brace_attachmentContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.number_decimal`.
	 * @param ctx the parse tree
	 */
	enterNumber_decimal?: (ctx: Number_decimalContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.number_decimal`.
	 * @param ctx the parse tree
	 */
	exitNumber_decimal?: (ctx: Number_decimalContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.lyric_symbols`.
	 * @param ctx the parse tree
	 */
	enterLyric_symbols?: (ctx: Lyric_symbolsContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.lyric_symbols`.
	 * @param ctx the parse tree
	 */
	exitLyric_symbols?: (ctx: Lyric_symbolsContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.lyric`.
	 * @param ctx the parse tree
	 */
	enterLyric?: (ctx: LyricContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.lyric`.
	 * @param ctx the parse tree
	 */
	exitLyric?: (ctx: LyricContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.open_text_modifiers`.
	 * @param ctx the parse tree
	 */
	enterOpen_text_modifiers?: (ctx: Open_text_modifiersContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.open_text_modifiers`.
	 * @param ctx the parse tree
	 */
	exitOpen_text_modifiers?: (ctx: Open_text_modifiersContext) => void;
	/**
	 * Enter a parse tree produced by `gabc_grammar.close_text_modifiers`.
	 * @param ctx the parse tree
	 */
	enterClose_text_modifiers?: (ctx: Close_text_modifiersContext) => void;
	/**
	 * Exit a parse tree produced by `gabc_grammar.close_text_modifiers`.
	 * @param ctx the parse tree
	 */
	exitClose_text_modifiers?: (ctx: Close_text_modifiersContext) => void;
}

