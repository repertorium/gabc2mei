// Generated from ./antlr/gabc/gabc_grammar.g4 by ANTLR 4.13.0

import {ParseTreeVisitor} from 'antlr4';


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `gabc_grammar`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class gabc_grammarVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `gabc_grammar.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.header`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHeader?: (ctx: HeaderContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.header_types`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHeader_types?: (ctx: Header_typesContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBody?: (ctx: BodyContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.syllable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSyllable?: (ctx: SyllableContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.musical_symbol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMusical_symbol?: (ctx: Musical_symbolContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.system_break`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSystem_break?: (ctx: System_breakContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.note`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNote?: (ctx: NoteContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.clef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClef?: (ctx: ClefContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.dot`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDot?: (ctx: DotContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.bar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBar?: (ctx: BarContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.bar_small`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBar_small?: (ctx: Bar_smallContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.bar_maxima`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBar_maxima?: (ctx: Bar_maximaContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.bar_finallis`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBar_finallis?: (ctx: Bar_finallisContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.bar_maior`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBar_maior?: (ctx: Bar_maiorContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.shape`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShape?: (ctx: ShapeContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.virga_right`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVirga_right?: (ctx: Virga_rightContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.virga_left`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVirga_left?: (ctx: Virga_leftContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.flat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlat?: (ctx: FlatContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.natural`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNatural?: (ctx: NaturalContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.tristropha`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTristropha?: (ctx: TristrophaContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.attachment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttachment?: (ctx: AttachmentContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.punctum_cavum`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPunctum_cavum?: (ctx: Punctum_cavumContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.linea_punctum`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLinea_punctum?: (ctx: Linea_punctumContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.linea_punctum_cavum`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLinea_punctum_cavum?: (ctx: Linea_punctum_cavumContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.accentus`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAccentus?: (ctx: AccentusContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.reversed_accentus`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReversed_accentus?: (ctx: Reversed_accentusContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.circulus`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCirculus?: (ctx: CirculusContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.semi_circulus`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSemi_circulus?: (ctx: Semi_circulusContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.reversed_semi_circulus`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReversed_semi_circulus?: (ctx: Reversed_semi_circulusContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.episema_vertical`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEpisema_vertical?: (ctx: Episema_verticalContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.episema_horizontal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEpisema_horizontal?: (ctx: Episema_horizontalContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.position_horizontal_episema`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPosition_horizontal_episema?: (ctx: Position_horizontal_episemaContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.pitch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPitch?: (ctx: PitchContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.inclinatum`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInclinatum?: (ctx: InclinatumContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.clef_symbol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClef_symbol?: (ctx: Clef_symbolContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.clef_number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClef_number?: (ctx: Clef_numberContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.bar_number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBar_number?: (ctx: Bar_numberContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.space`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpace?: (ctx: SpaceContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.no_space`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNo_space?: (ctx: No_spaceContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.no_space_coccecting`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNo_space_coccecting?: (ctx: No_space_coccectingContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.neumatic_cut`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNeumatic_cut?: (ctx: Neumatic_cutContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.space_factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpace_factor?: (ctx: Space_factorContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.factor_number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFactor_number?: (ctx: Factor_numberContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.custos`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCustos?: (ctx: CustosContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.brace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBrace?: (ctx: BraceContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.brackets`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBrackets?: (ctx: BracketsContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.brace_position`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBrace_position?: (ctx: Brace_positionContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.brace_shape`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBrace_shape?: (ctx: Brace_shapeContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.brace_attachment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBrace_attachment?: (ctx: Brace_attachmentContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.number_decimal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber_decimal?: (ctx: Number_decimalContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.lyric_symbols`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLyric_symbols?: (ctx: Lyric_symbolsContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.lyric`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLyric?: (ctx: LyricContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.open_text_modifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpen_text_modifiers?: (ctx: Open_text_modifiersContext) => Result;
	/**
	 * Visit a parse tree produced by `gabc_grammar.close_text_modifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClose_text_modifiers?: (ctx: Close_text_modifiersContext) => Result;
}

