// Generated from ./antlr/gabc/gabc_grammar.g4 by ANTLR 4.13.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import gabc_grammarListener from "./gabc_grammarListener.js";
import gabc_grammarVisitor from "./gabc_grammarVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class gabc_grammar extends Parser {
	public static readonly NAME = 1;
	public static readonly GABC_COPYRIGHT = 2;
	public static readonly SCORE_COPYRIGHT = 3;
	public static readonly OFFICE_PART = 4;
	public static readonly OCCASION = 5;
	public static readonly METER = 6;
	public static readonly COMMENTARY = 7;
	public static readonly ARRANGER = 8;
	public static readonly AUTHOR = 9;
	public static readonly DATE = 10;
	public static readonly MANUSCRIPT = 11;
	public static readonly MANUSCRIPT_REFERENCE = 12;
	public static readonly MANUSCRIPT_STORAGE_PLACE = 13;
	public static readonly BOOK = 14;
	public static readonly LANGUAGE = 15;
	public static readonly TRANSCRIBER = 16;
	public static readonly TRANSCRIPTION_DATE = 17;
	public static readonly MODE = 18;
	public static readonly USER_NOTES = 19;
	public static readonly ANNOTATION = 20;
	public static readonly SEMICOLON = 21;
	public static readonly SEPARATOR = 22;
	public static readonly WORD = 23;
	public static readonly WS = 24;
	public static readonly OPEN_LYRIC = 25;
	public static readonly OPEN_BOLD = 26;
	public static readonly CLOSE_BOLD = 27;
	public static readonly OPEN_ITALIC = 28;
	public static readonly CLOSE_ITALIC = 29;
	public static readonly OPEN_COLOR = 30;
	public static readonly CLOSE_COLOR = 31;
	public static readonly OPEN_UNDERLINE = 32;
	public static readonly CLOSE_UNDERLINE = 33;
	public static readonly OPEN_SMALL_CAPS = 34;
	public static readonly CLOSE_SMALL_CAPS = 35;
	public static readonly PARENTHESIS_OPEN = 36;
	public static readonly SYLLABLE = 37;
	public static readonly WS3 = 38;
	public static readonly ATTACHMENT_r0 = 39;
	public static readonly ATTACHMENT_r1 = 40;
	public static readonly ATTACHMENT_r2 = 41;
	public static readonly ATTACHMENT_r3 = 42;
	public static readonly ATTACHMENT_r4 = 43;
	public static readonly ATTACHMENT_r5 = 44;
	public static readonly CHAR_a = 45;
	public static readonly CHAR_b = 46;
	public static readonly CHAR_c = 47;
	public static readonly CHAR_d = 48;
	public static readonly CHAR_e = 49;
	public static readonly CHAR_f = 50;
	public static readonly CHAR_g = 51;
	public static readonly CHAR_h = 52;
	public static readonly CHAR_i = 53;
	public static readonly CHAR_j = 54;
	public static readonly CHAR_k = 55;
	public static readonly CHAR_l = 56;
	public static readonly CHAR_m = 57;
	public static readonly UPPERCASE_SHAPE = 58;
	public static readonly CHAR_v = 59;
	public static readonly CHAR_V = 60;
	public static readonly CHAR_s = 61;
	public static readonly CHAR_w = 62;
	public static readonly CHAR_W = 63;
	public static readonly CHAR_O = 64;
	public static readonly CHAR_Z = 65;
	public static readonly CHAR_MINOR = 66;
	public static readonly CHAR_MAJOR = 67;
	public static readonly CHAR_VIRGLILLA = 68;
	public static readonly CHAR_PLUS = 69;
	public static readonly CHAR_x = 70;
	public static readonly CHAR_y = 71;
	public static readonly CHAR_HASH = 72;
	public static readonly DOT = 73;
	public static readonly APOSTROPHE = 74;
	public static readonly UNDERSCORE = 75;
	public static readonly CHAR_R = 76;
	public static readonly CHAR_r = 77;
	public static readonly COMMA = 78;
	public static readonly COLON = 79;
	public static readonly SEMICOLON_MUSIC = 80;
	public static readonly NUMBER_0 = 81;
	public static readonly NUMBER_1 = 82;
	public static readonly NUMBER_2 = 83;
	public static readonly NUMBER_3 = 84;
	public static readonly NUMBER_4 = 85;
	public static readonly NUMBER_5 = 86;
	public static readonly NUMBER_6 = 87;
	public static readonly NUMBER_7 = 88;
	public static readonly NUMBER_8 = 89;
	public static readonly NUMBER_9 = 90;
	public static readonly INTERROGATION = 91;
	public static readonly SLASH = 92;
	public static readonly EXCLAMATION = 93;
	public static readonly SQUARE_BRACKET_OPEN = 94;
	public static readonly SQUARE_BRACKET_CLOSE = 95;
	public static readonly BRACKET_OPEN = 96;
	public static readonly BRACKET_CLOSE = 97;
	public static readonly MINUS = 98;
	public static readonly AT = 99;
	public static readonly CHAR_o = 100;
	public static readonly CHAR_u = 101;
	public static readonly CHAR_z = 102;
	public static readonly WS4 = 103;
	public static readonly PIPE = 104;
	public static readonly PARENTHESIS_CLOSE = 105;
	public static readonly TEXT_ABOVE = 106;
	public static readonly V_LYRIC = 107;
	public static readonly R_LYRIC = 108;
	public static readonly A_LYRIC = 109;
	public static readonly OE_LYRIC = 110;
	public static readonly AE_LYRIC = 111;
	public static readonly CLOSE_LYRIC = 112;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_start = 0;
	public static readonly RULE_header = 1;
	public static readonly RULE_header_types = 2;
	public static readonly RULE_body = 3;
	public static readonly RULE_syllable = 4;
	public static readonly RULE_musical_symbol = 5;
	public static readonly RULE_system_break = 6;
	public static readonly RULE_note = 7;
	public static readonly RULE_clef = 8;
	public static readonly RULE_dot = 9;
	public static readonly RULE_bar = 10;
	public static readonly RULE_bar_small = 11;
	public static readonly RULE_bar_maxima = 12;
	public static readonly RULE_bar_finallis = 13;
	public static readonly RULE_bar_maior = 14;
	public static readonly RULE_shape = 15;
	public static readonly RULE_virga_right = 16;
	public static readonly RULE_virga_left = 17;
	public static readonly RULE_flat = 18;
	public static readonly RULE_natural = 19;
	public static readonly RULE_tristropha = 20;
	public static readonly RULE_attachment = 21;
	public static readonly RULE_punctum_cavum = 22;
	public static readonly RULE_linea_punctum = 23;
	public static readonly RULE_linea_punctum_cavum = 24;
	public static readonly RULE_accentus = 25;
	public static readonly RULE_reversed_accentus = 26;
	public static readonly RULE_circulus = 27;
	public static readonly RULE_semi_circulus = 28;
	public static readonly RULE_reversed_semi_circulus = 29;
	public static readonly RULE_episema_vertical = 30;
	public static readonly RULE_episema_horizontal = 31;
	public static readonly RULE_position_horizontal_episema = 32;
	public static readonly RULE_pitch = 33;
	public static readonly RULE_inclinatum = 34;
	public static readonly RULE_clef_symbol = 35;
	public static readonly RULE_clef_number = 36;
	public static readonly RULE_bar_number = 37;
	public static readonly RULE_space = 38;
	public static readonly RULE_no_space = 39;
	public static readonly RULE_no_space_coccecting = 40;
	public static readonly RULE_neumatic_cut = 41;
	public static readonly RULE_space_factor = 42;
	public static readonly RULE_factor_number = 43;
	public static readonly RULE_custos = 44;
	public static readonly RULE_brace = 45;
	public static readonly RULE_brackets = 46;
	public static readonly RULE_brace_position = 47;
	public static readonly RULE_brace_shape = 48;
	public static readonly RULE_brace_attachment = 49;
	public static readonly RULE_number_decimal = 50;
	public static readonly RULE_number = 51;
	public static readonly RULE_lyric_symbols = 52;
	public static readonly RULE_lyric = 53;
	public static readonly RULE_open_text_modifiers = 54;
	public static readonly RULE_close_text_modifiers = 55;
	public static readonly literalNames: (string | null)[] = [ null, "'name:'", 
                                                            "'gabc-copyright:'", 
                                                            "'score-copyright:'", 
                                                            "'office-part:'", 
                                                            "'occasion:'", 
                                                            "'meter:'", 
                                                            "'commentary:'", 
                                                            "'arranger:'", 
                                                            "'author:'", 
                                                            "'date:'", "'manuscript:'", 
                                                            "'manuscript-reference:'", 
                                                            "'manuscript-storage-place:'", 
                                                            "'book:'", "'language:'", 
                                                            "'transcriber:'", 
                                                            "'transcription-date:'", 
                                                            "'mode:'", "'user-notes:'", 
                                                            "'annotation:'", 
                                                            null, "'%%'", 
                                                            null, null, 
                                                            "'<sp>'", "'<b>'", 
                                                            "'</b>'", "'<i>'", 
                                                            "'</i>'", "'<c>'", 
                                                            "'</c>'", "'<u>'", 
                                                            "'</u>'", "'<sc>'", 
                                                            "'</sc>'", "'('", 
                                                            null, null, 
                                                            "'r0'", "'r1'", 
                                                            "'r2'", "'r3'", 
                                                            "'r4'", "'r5'", 
                                                            "'a'", "'b'", 
                                                            "'c'", "'d'", 
                                                            "'e'", "'f'", 
                                                            "'g'", "'h'", 
                                                            "'i'", "'j'", 
                                                            "'k'", "'l'", 
                                                            "'m'", null, 
                                                            "'v'", "'V'", 
                                                            "'s'", "'w'", 
                                                            "'W'", "'O'", 
                                                            "'Z'", "'<'", 
                                                            "'>'", "'~'", 
                                                            "'+'", "'x'", 
                                                            "'y'", "'#'", 
                                                            "'.'", "'''", 
                                                            "'_'", "'R'", 
                                                            "'r'", "','", 
                                                            "':'", null, 
                                                            "'0'", "'1'", 
                                                            "'2'", "'3'", 
                                                            "'4'", "'5'", 
                                                            "'6'", "'7'", 
                                                            "'8'", "'9'", 
                                                            "'?'", "'/'", 
                                                            "'!'", "'['", 
                                                            "']'", "'{'", 
                                                            "'}'", "'-'", 
                                                            "'@'", "'o'", 
                                                            "'u'", "'z'", 
                                                            null, "'|'", 
                                                            "')'", null, 
                                                            "'V/'", "'R/'", 
                                                            "'A/'", "''oe'", 
                                                            "''ae'", "'</sp>'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "NAME", 
                                                             "GABC_COPYRIGHT", 
                                                             "SCORE_COPYRIGHT", 
                                                             "OFFICE_PART", 
                                                             "OCCASION", 
                                                             "METER", "COMMENTARY", 
                                                             "ARRANGER", 
                                                             "AUTHOR", "DATE", 
                                                             "MANUSCRIPT", 
                                                             "MANUSCRIPT_REFERENCE", 
                                                             "MANUSCRIPT_STORAGE_PLACE", 
                                                             "BOOK", "LANGUAGE", 
                                                             "TRANSCRIBER", 
                                                             "TRANSCRIPTION_DATE", 
                                                             "MODE", "USER_NOTES", 
                                                             "ANNOTATION", 
                                                             "SEMICOLON", 
                                                             "SEPARATOR", 
                                                             "WORD", "WS", 
                                                             "OPEN_LYRIC", 
                                                             "OPEN_BOLD", 
                                                             "CLOSE_BOLD", 
                                                             "OPEN_ITALIC", 
                                                             "CLOSE_ITALIC", 
                                                             "OPEN_COLOR", 
                                                             "CLOSE_COLOR", 
                                                             "OPEN_UNDERLINE", 
                                                             "CLOSE_UNDERLINE", 
                                                             "OPEN_SMALL_CAPS", 
                                                             "CLOSE_SMALL_CAPS", 
                                                             "PARENTHESIS_OPEN", 
                                                             "SYLLABLE", 
                                                             "WS3", "ATTACHMENT_r0", 
                                                             "ATTACHMENT_r1", 
                                                             "ATTACHMENT_r2", 
                                                             "ATTACHMENT_r3", 
                                                             "ATTACHMENT_r4", 
                                                             "ATTACHMENT_r5", 
                                                             "CHAR_a", "CHAR_b", 
                                                             "CHAR_c", "CHAR_d", 
                                                             "CHAR_e", "CHAR_f", 
                                                             "CHAR_g", "CHAR_h", 
                                                             "CHAR_i", "CHAR_j", 
                                                             "CHAR_k", "CHAR_l", 
                                                             "CHAR_m", "UPPERCASE_SHAPE", 
                                                             "CHAR_v", "CHAR_V", 
                                                             "CHAR_s", "CHAR_w", 
                                                             "CHAR_W", "CHAR_O", 
                                                             "CHAR_Z", "CHAR_MINOR", 
                                                             "CHAR_MAJOR", 
                                                             "CHAR_VIRGLILLA", 
                                                             "CHAR_PLUS", 
                                                             "CHAR_x", "CHAR_y", 
                                                             "CHAR_HASH", 
                                                             "DOT", "APOSTROPHE", 
                                                             "UNDERSCORE", 
                                                             "CHAR_R", "CHAR_r", 
                                                             "COMMA", "COLON", 
                                                             "SEMICOLON_MUSIC", 
                                                             "NUMBER_0", 
                                                             "NUMBER_1", 
                                                             "NUMBER_2", 
                                                             "NUMBER_3", 
                                                             "NUMBER_4", 
                                                             "NUMBER_5", 
                                                             "NUMBER_6", 
                                                             "NUMBER_7", 
                                                             "NUMBER_8", 
                                                             "NUMBER_9", 
                                                             "INTERROGATION", 
                                                             "SLASH", "EXCLAMATION", 
                                                             "SQUARE_BRACKET_OPEN", 
                                                             "SQUARE_BRACKET_CLOSE", 
                                                             "BRACKET_OPEN", 
                                                             "BRACKET_CLOSE", 
                                                             "MINUS", "AT", 
                                                             "CHAR_o", "CHAR_u", 
                                                             "CHAR_z", "WS4", 
                                                             "PIPE", "PARENTHESIS_CLOSE", 
                                                             "TEXT_ABOVE", 
                                                             "V_LYRIC", 
                                                             "R_LYRIC", 
                                                             "A_LYRIC", 
                                                             "OE_LYRIC", 
                                                             "AE_LYRIC", 
                                                             "CLOSE_LYRIC" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "header", "header_types", "body", "syllable", "musical_symbol", 
		"system_break", "note", "clef", "dot", "bar", "bar_small", "bar_maxima", 
		"bar_finallis", "bar_maior", "shape", "virga_right", "virga_left", "flat", 
		"natural", "tristropha", "attachment", "punctum_cavum", "linea_punctum", 
		"linea_punctum_cavum", "accentus", "reversed_accentus", "circulus", "semi_circulus", 
		"reversed_semi_circulus", "episema_vertical", "episema_horizontal", "position_horizontal_episema", 
		"pitch", "inclinatum", "clef_symbol", "clef_number", "bar_number", "space", 
		"no_space", "no_space_coccecting", "neumatic_cut", "space_factor", "factor_number", 
		"custos", "brace", "brackets", "brace_position", "brace_shape", "brace_attachment", 
		"number_decimal", "number", "lyric_symbols", "lyric", "open_text_modifiers", 
		"close_text_modifiers",
	];
	public get grammarFileName(): string { return "gabc_grammar.g4"; }
	public get literalNames(): (string | null)[] { return gabc_grammar.literalNames; }
	public get symbolicNames(): (string | null)[] { return gabc_grammar.symbolicNames; }
	public get ruleNames(): string[] { return gabc_grammar.ruleNames; }
	public get serializedATN(): number[] { return gabc_grammar._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, gabc_grammar._ATN, gabc_grammar.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let localctx: StartContext = new StartContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, gabc_grammar.RULE_start);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 112;
			this.header();
			this.state = 113;
			this.match(gabc_grammar.SEPARATOR);
			this.state = 114;
			this.body();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public header(): HeaderContext {
		let localctx: HeaderContext = new HeaderContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, gabc_grammar.RULE_header);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 116;
			this.match(gabc_grammar.NAME);
			this.state = 118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 117;
				this.match(gabc_grammar.WORD);
				}
				}
				this.state = 120;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===23);
			this.state = 122;
			this.match(gabc_grammar.SEMICOLON);
			this.state = 133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2097148) !== 0)) {
				{
				{
				this.state = 123;
				this.header_types();
				this.state = 125;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 124;
					this.match(gabc_grammar.WORD);
					}
					}
					this.state = 127;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===23);
				this.state = 129;
				this.match(gabc_grammar.SEMICOLON);
				}
				}
				this.state = 135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public header_types(): Header_typesContext {
		let localctx: Header_typesContext = new Header_typesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, gabc_grammar.RULE_header_types);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 136;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 2097148) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public body(): BodyContext {
		let localctx: BodyContext = new BodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, gabc_grammar.RULE_body);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 138;
				this.syllable();
				}
				}
				this.state = 141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & 8191) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public syllable(): SyllableContext {
		let localctx: SyllableContext = new SyllableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, gabc_grammar.RULE_syllable);
		let _la: number;
		try {
			this.state = 191;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 144;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 143;
					this.lyric_symbols();
					}
				}

				this.state = 147;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & 341) !== 0)) {
					{
					this.state = 146;
					this.open_text_modifiers();
					}
				}

				this.state = 150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===37) {
					{
					this.state = 149;
					this.match(gabc_grammar.SYLLABLE);
					}
				}

				this.state = 153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & 341) !== 0)) {
					{
					this.state = 152;
					this.close_text_modifiers();
					}
				}

				this.state = 155;
				this.match(gabc_grammar.PARENTHESIS_OPEN);
				this.state = 159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 806371327) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & 18923527) !== 0)) {
					{
					{
					this.state = 156;
					this.musical_symbol();
					}
					}
					this.state = 161;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 164;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===104) {
					{
					this.state = 162;
					this.match(gabc_grammar.PIPE);
					this.state = 163;
					this.match(gabc_grammar.TEXT_ABOVE);
					}
				}

				this.state = 166;
				this.match(gabc_grammar.PARENTHESIS_CLOSE);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 168;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 167;
					this.lyric_symbols();
					}
				}

				this.state = 171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & 341) !== 0)) {
					{
					this.state = 170;
					this.open_text_modifiers();
					}
				}

				this.state = 173;
				this.match(gabc_grammar.SYLLABLE);
				this.state = 175;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 174;
					this.close_text_modifiers();
					}
					break;
				}
				this.state = 189;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 177;
					this.match(gabc_grammar.PARENTHESIS_OPEN);
					this.state = 181;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 806371327) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & 18923527) !== 0)) {
						{
						{
						this.state = 178;
						this.musical_symbol();
						}
						}
						this.state = 183;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 186;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===104) {
						{
						this.state = 184;
						this.match(gabc_grammar.PIPE);
						this.state = 185;
						this.match(gabc_grammar.TEXT_ABOVE);
						}
					}

					this.state = 188;
					this.match(gabc_grammar.PARENTHESIS_CLOSE);
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public musical_symbol(): Musical_symbolContext {
		let localctx: Musical_symbolContext = new Musical_symbolContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, gabc_grammar.RULE_musical_symbol);
		try {
			this.state = 200;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 193;
				this.clef();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 194;
				this.note();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 195;
				this.bar();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 196;
				this.space();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 197;
				this.custos();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 198;
				this.dot();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 199;
				this.system_break();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public system_break(): System_breakContext {
		let localctx: System_breakContext = new System_breakContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, gabc_grammar.RULE_system_break);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 202;
			this.match(gabc_grammar.CHAR_Z);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public note(): NoteContext {
		let localctx: NoteContext = new NoteContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, gabc_grammar.RULE_note);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 204;
			this.pitch();
			this.state = 208;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & 16319) !== 0) || _la===100) {
				{
				{
				this.state = 205;
				this.shape();
				}
				}
				this.state = 210;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 214;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 211;
					this.attachment();
					}
					}
				}
				this.state = 216;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 19, this._ctx);
			}
			this.state = 218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===94) {
				{
				this.state = 217;
				this.brace();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public clef(): ClefContext {
		let localctx: ClefContext = new ClefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, gabc_grammar.RULE_clef);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 220;
			this.clef_symbol();
			this.state = 222;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===46) {
				{
				this.state = 221;
				this.match(gabc_grammar.CHAR_b);
				}
			}

			this.state = 224;
			this.clef_number();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dot(): DotContext {
		let localctx: DotContext = new DotContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, gabc_grammar.RULE_dot);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 226;
			this.match(gabc_grammar.DOT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public bar(): BarContext {
		let localctx: BarContext = new BarContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, gabc_grammar.RULE_bar);
		let _la: number;
		try {
			this.state = 240;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 228;
				this.bar_small();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 229;
				this.match(gabc_grammar.APOSTROPHE);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 230;
				this.bar_finallis();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 231;
				this.bar_maxima();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 232;
				this.bar_maior();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 233;
				this.match(gabc_grammar.COLON);
				this.state = 235;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===91) {
					{
					this.state = 234;
					this.match(gabc_grammar.INTERROGATION);
					}
				}

				this.state = 238;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 23, this._ctx) ) {
				case 1:
					{
					this.state = 237;
					this.match(gabc_grammar.APOSTROPHE);
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public bar_small(): Bar_smallContext {
		let localctx: Bar_smallContext = new Bar_smallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, gabc_grammar.RULE_bar_small);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 242;
			this.match(gabc_grammar.COMMA);
			this.state = 244;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===75) {
				{
				this.state = 243;
				this.match(gabc_grammar.UNDERSCORE);
				}
			}

			this.state = 247;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===81) {
				{
				this.state = 246;
				this.match(gabc_grammar.NUMBER_0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public bar_maxima(): Bar_maximaContext {
		let localctx: Bar_maximaContext = new Bar_maximaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, gabc_grammar.RULE_bar_maxima);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 249;
			this.match(gabc_grammar.COLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public bar_finallis(): Bar_finallisContext {
		let localctx: Bar_finallisContext = new Bar_finallisContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, gabc_grammar.RULE_bar_finallis);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 251;
			this.match(gabc_grammar.COLON);
			this.state = 252;
			this.match(gabc_grammar.COLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public bar_maior(): Bar_maiorContext {
		let localctx: Bar_maiorContext = new Bar_maiorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, gabc_grammar.RULE_bar_maior);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 254;
			this.match(gabc_grammar.SEMICOLON_MUSIC);
			this.state = 256;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & 63) !== 0)) {
				{
				this.state = 255;
				this.bar_number();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public shape(): ShapeContext {
		let localctx: ShapeContext = new ShapeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, gabc_grammar.RULE_shape);
		try {
			this.state = 272;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 59:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 258;
				this.virga_right();
				}
				break;
			case 60:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 259;
				this.virga_left();
				}
				break;
			case 61:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 260;
				this.tristropha();
				}
				break;
			case 62:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 261;
				this.match(gabc_grammar.CHAR_w);
				}
				break;
			case 63:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 262;
				this.match(gabc_grammar.CHAR_W);
				}
				break;
			case 100:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 263;
				this.match(gabc_grammar.CHAR_o);
				}
				break;
			case 64:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 264;
				this.match(gabc_grammar.CHAR_O);
				}
				break;
			case 66:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 265;
				this.match(gabc_grammar.CHAR_MINOR);
				}
				break;
			case 67:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 266;
				this.match(gabc_grammar.CHAR_MAJOR);
				}
				break;
			case 68:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 267;
				this.match(gabc_grammar.CHAR_VIRGLILLA);
				}
				break;
			case 69:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 268;
				this.match(gabc_grammar.CHAR_PLUS);
				}
				break;
			case 70:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 269;
				this.flat();
				}
				break;
			case 71:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 270;
				this.natural();
				}
				break;
			case 72:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 271;
				this.match(gabc_grammar.CHAR_HASH);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public virga_right(): Virga_rightContext {
		let localctx: Virga_rightContext = new Virga_rightContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, gabc_grammar.RULE_virga_right);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 274;
			this.match(gabc_grammar.CHAR_v);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public virga_left(): Virga_leftContext {
		let localctx: Virga_leftContext = new Virga_leftContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, gabc_grammar.RULE_virga_left);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 276;
			this.match(gabc_grammar.CHAR_V);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public flat(): FlatContext {
		let localctx: FlatContext = new FlatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, gabc_grammar.RULE_flat);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 278;
			this.match(gabc_grammar.CHAR_x);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public natural(): NaturalContext {
		let localctx: NaturalContext = new NaturalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, gabc_grammar.RULE_natural);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 280;
			this.match(gabc_grammar.CHAR_y);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tristropha(): TristrophaContext {
		let localctx: TristrophaContext = new TristrophaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, gabc_grammar.RULE_tristropha);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 282;
			this.match(gabc_grammar.CHAR_s);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attachment(): AttachmentContext {
		let localctx: AttachmentContext = new AttachmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, gabc_grammar.RULE_attachment);
		try {
			this.state = 294;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 74:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 284;
				this.episema_vertical();
				}
				break;
			case 75:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 285;
				this.episema_horizontal();
				}
				break;
			case 76:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 286;
				this.linea_punctum();
				}
				break;
			case 39:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 287;
				this.linea_punctum_cavum();
				}
				break;
			case 40:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 288;
				this.accentus();
				}
				break;
			case 41:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 289;
				this.reversed_accentus();
				}
				break;
			case 42:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 290;
				this.circulus();
				}
				break;
			case 43:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 291;
				this.semi_circulus();
				}
				break;
			case 44:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 292;
				this.reversed_semi_circulus();
				}
				break;
			case 77:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 293;
				this.punctum_cavum();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public punctum_cavum(): Punctum_cavumContext {
		let localctx: Punctum_cavumContext = new Punctum_cavumContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, gabc_grammar.RULE_punctum_cavum);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 296;
			this.match(gabc_grammar.CHAR_r);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public linea_punctum(): Linea_punctumContext {
		let localctx: Linea_punctumContext = new Linea_punctumContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, gabc_grammar.RULE_linea_punctum);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 298;
			this.match(gabc_grammar.CHAR_R);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public linea_punctum_cavum(): Linea_punctum_cavumContext {
		let localctx: Linea_punctum_cavumContext = new Linea_punctum_cavumContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, gabc_grammar.RULE_linea_punctum_cavum);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 300;
			this.match(gabc_grammar.ATTACHMENT_r0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public accentus(): AccentusContext {
		let localctx: AccentusContext = new AccentusContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, gabc_grammar.RULE_accentus);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 302;
			this.match(gabc_grammar.ATTACHMENT_r1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public reversed_accentus(): Reversed_accentusContext {
		let localctx: Reversed_accentusContext = new Reversed_accentusContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, gabc_grammar.RULE_reversed_accentus);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 304;
			this.match(gabc_grammar.ATTACHMENT_r2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public circulus(): CirculusContext {
		let localctx: CirculusContext = new CirculusContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, gabc_grammar.RULE_circulus);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 306;
			this.match(gabc_grammar.ATTACHMENT_r3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public semi_circulus(): Semi_circulusContext {
		let localctx: Semi_circulusContext = new Semi_circulusContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, gabc_grammar.RULE_semi_circulus);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 308;
			this.match(gabc_grammar.ATTACHMENT_r4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public reversed_semi_circulus(): Reversed_semi_circulusContext {
		let localctx: Reversed_semi_circulusContext = new Reversed_semi_circulusContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, gabc_grammar.RULE_reversed_semi_circulus);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 310;
			this.match(gabc_grammar.ATTACHMENT_r5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public episema_vertical(): Episema_verticalContext {
		let localctx: Episema_verticalContext = new Episema_verticalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, gabc_grammar.RULE_episema_vertical);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 312;
			this.match(gabc_grammar.APOSTROPHE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public episema_horizontal(): Episema_horizontalContext {
		let localctx: Episema_horizontalContext = new Episema_horizontalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, gabc_grammar.RULE_episema_horizontal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 314;
			this.match(gabc_grammar.UNDERSCORE);
			this.state = 316;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 63) !== 0)) {
				{
				this.state = 315;
				this.position_horizontal_episema();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public position_horizontal_episema(): Position_horizontal_episemaContext {
		let localctx: Position_horizontal_episemaContext = new Position_horizontal_episemaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, gabc_grammar.RULE_position_horizontal_episema);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 318;
			_la = this._input.LA(1);
			if(!(((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 63) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pitch(): PitchContext {
		let localctx: PitchContext = new PitchContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, gabc_grammar.RULE_pitch);
		try {
			this.state = 334;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 45:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 320;
				this.match(gabc_grammar.CHAR_a);
				}
				break;
			case 46:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 321;
				this.match(gabc_grammar.CHAR_b);
				}
				break;
			case 47:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 322;
				this.match(gabc_grammar.CHAR_c);
				}
				break;
			case 48:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 323;
				this.match(gabc_grammar.CHAR_d);
				}
				break;
			case 49:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 324;
				this.match(gabc_grammar.CHAR_e);
				}
				break;
			case 50:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 325;
				this.match(gabc_grammar.CHAR_f);
				}
				break;
			case 51:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 326;
				this.match(gabc_grammar.CHAR_g);
				}
				break;
			case 52:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 327;
				this.match(gabc_grammar.CHAR_h);
				}
				break;
			case 53:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 328;
				this.match(gabc_grammar.CHAR_i);
				}
				break;
			case 54:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 329;
				this.match(gabc_grammar.CHAR_j);
				}
				break;
			case 55:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 330;
				this.match(gabc_grammar.CHAR_k);
				}
				break;
			case 56:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 331;
				this.match(gabc_grammar.CHAR_l);
				}
				break;
			case 57:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 332;
				this.match(gabc_grammar.CHAR_m);
				}
				break;
			case 58:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 333;
				this.inclinatum();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public inclinatum(): InclinatumContext {
		let localctx: InclinatumContext = new InclinatumContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, gabc_grammar.RULE_inclinatum);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 336;
			this.match(gabc_grammar.UPPERCASE_SHAPE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public clef_symbol(): Clef_symbolContext {
		let localctx: Clef_symbolContext = new Clef_symbolContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, gabc_grammar.RULE_clef_symbol);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 338;
			_la = this._input.LA(1);
			if(!(_la===47 || _la===50)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public clef_number(): Clef_numberContext {
		let localctx: Clef_numberContext = new Clef_numberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, gabc_grammar.RULE_clef_number);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 340;
			_la = this._input.LA(1);
			if(!(((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & 31) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public bar_number(): Bar_numberContext {
		let localctx: Bar_numberContext = new Bar_numberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, gabc_grammar.RULE_bar_number);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 342;
			_la = this._input.LA(1);
			if(!(((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & 63) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public space(): SpaceContext {
		let localctx: SpaceContext = new SpaceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, gabc_grammar.RULE_space);
		try {
			this.state = 347;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 93:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 344;
				this.no_space();
				}
				break;
			case 99:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 345;
				this.no_space_coccecting();
				}
				break;
			case 92:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 346;
				this.neumatic_cut();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public no_space(): No_spaceContext {
		let localctx: No_spaceContext = new No_spaceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, gabc_grammar.RULE_no_space);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 349;
			this.match(gabc_grammar.EXCLAMATION);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public no_space_coccecting(): No_space_coccectingContext {
		let localctx: No_space_coccectingContext = new No_space_coccectingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, gabc_grammar.RULE_no_space_coccecting);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 351;
			this.match(gabc_grammar.AT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public neumatic_cut(): Neumatic_cutContext {
		let localctx: Neumatic_cutContext = new Neumatic_cutContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, gabc_grammar.RULE_neumatic_cut);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 353;
			this.match(gabc_grammar.SLASH);
			this.state = 358;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 354;
				this.match(gabc_grammar.SLASH);
				}
				break;
			case 2:
				{
				this.state = 356;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===81 || _la===94) {
					{
					this.state = 355;
					this.space_factor();
					}
				}

				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public space_factor(): Space_factorContext {
		let localctx: Space_factorContext = new Space_factorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, gabc_grammar.RULE_space_factor);
		let _la: number;
		try {
			this.state = 368;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 81:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 360;
				this.match(gabc_grammar.NUMBER_0);
				}
				break;
			case 94:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 361;
				this.match(gabc_grammar.SQUARE_BRACKET_OPEN);
				this.state = 363;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===98) {
					{
					this.state = 362;
					this.match(gabc_grammar.MINUS);
					}
				}

				this.state = 365;
				this.factor_number();
				this.state = 366;
				this.match(gabc_grammar.SQUARE_BRACKET_CLOSE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public factor_number(): Factor_numberContext {
		let localctx: Factor_numberContext = new Factor_numberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, gabc_grammar.RULE_factor_number);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 370;
			_la = this._input.LA(1);
			if(!(((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & 63) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public custos(): CustosContext {
		let localctx: CustosContext = new CustosContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, gabc_grammar.RULE_custos);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 372;
			this.match(gabc_grammar.CHAR_z);
			this.state = 374;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===81) {
				{
				this.state = 373;
				this.match(gabc_grammar.NUMBER_0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public brace(): BraceContext {
		let localctx: BraceContext = new BraceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, gabc_grammar.RULE_brace);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 376;
			this.match(gabc_grammar.SQUARE_BRACKET_OPEN);
			this.state = 377;
			this.brace_position();
			this.state = 378;
			this.brace_shape();
			this.state = 379;
			this.match(gabc_grammar.COLON);
			this.state = 380;
			this.brace_attachment();
			this.state = 386;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===21) {
				{
				this.state = 381;
				this.match(gabc_grammar.SEMICOLON);
				this.state = 382;
				this.number_decimal();
				this.state = 383;
				this.match(gabc_grammar.CHAR_m);
				this.state = 384;
				this.match(gabc_grammar.CHAR_m);
				}
			}

			this.state = 389;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===96 || _la===97) {
				{
				this.state = 388;
				this.brackets();
				}
			}

			this.state = 391;
			this.match(gabc_grammar.SQUARE_BRACKET_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public brackets(): BracketsContext {
		let localctx: BracketsContext = new BracketsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, gabc_grammar.RULE_brackets);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 393;
			_la = this._input.LA(1);
			if(!(_la===96 || _la===97)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public brace_position(): Brace_positionContext {
		let localctx: Brace_positionContext = new Brace_positionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, gabc_grammar.RULE_brace_position);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 395;
			_la = this._input.LA(1);
			if(!(_la===100 || _la===101)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public brace_shape(): Brace_shapeContext {
		let localctx: Brace_shapeContext = new Brace_shapeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, gabc_grammar.RULE_brace_shape);
		let _la: number;
		try {
			this.state = 403;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 47:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 397;
				this.match(gabc_grammar.CHAR_c);
				this.state = 398;
				this.match(gabc_grammar.CHAR_b);
				this.state = 400;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===45) {
					{
					this.state = 399;
					this.match(gabc_grammar.CHAR_a);
					}
				}

				}
				break;
			case 46:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 402;
				this.match(gabc_grammar.CHAR_b);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public brace_attachment(): Brace_attachmentContext {
		let localctx: Brace_attachmentContext = new Brace_attachmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, gabc_grammar.RULE_brace_attachment);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 405;
			_la = this._input.LA(1);
			if(!(_la===81 || _la===82)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public number_decimal(): Number_decimalContext {
		let localctx: Number_decimalContext = new Number_decimalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, gabc_grammar.RULE_number_decimal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 408;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 407;
				this.number_();
				}
				}
				this.state = 410;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 1023) !== 0));
			this.state = 418;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===73) {
				{
				this.state = 412;
				this.match(gabc_grammar.DOT);
				this.state = 414;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 413;
					this.number_();
					}
					}
					this.state = 416;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 1023) !== 0));
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public number_(): NumberContext {
		let localctx: NumberContext = new NumberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, gabc_grammar.RULE_number);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 420;
			_la = this._input.LA(1);
			if(!(((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 1023) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lyric_symbols(): Lyric_symbolsContext {
		let localctx: Lyric_symbolsContext = new Lyric_symbolsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, gabc_grammar.RULE_lyric_symbols);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 422;
			this.match(gabc_grammar.OPEN_LYRIC);
			this.state = 423;
			this.lyric();
			this.state = 424;
			this.match(gabc_grammar.CLOSE_LYRIC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lyric(): LyricContext {
		let localctx: LyricContext = new LyricContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, gabc_grammar.RULE_lyric);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 426;
			_la = this._input.LA(1);
			if(!(((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & 31) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public open_text_modifiers(): Open_text_modifiersContext {
		let localctx: Open_text_modifiersContext = new Open_text_modifiersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, gabc_grammar.RULE_open_text_modifiers);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 428;
			_la = this._input.LA(1);
			if(!(((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & 341) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public close_text_modifiers(): Close_text_modifiersContext {
		let localctx: Close_text_modifiersContext = new Close_text_modifiersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, gabc_grammar.RULE_close_text_modifiers);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 430;
			_la = this._input.LA(1);
			if(!(((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & 341) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,112,433,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,1,0,1,0,1,0,1,0,1,1,1,1,4,1,119,8,1,11,1,12,1,
	120,1,1,1,1,1,1,4,1,126,8,1,11,1,12,1,127,1,1,1,1,5,1,132,8,1,10,1,12,1,
	135,9,1,1,2,1,2,1,3,4,3,140,8,3,11,3,12,3,141,1,4,3,4,145,8,4,1,4,3,4,148,
	8,4,1,4,3,4,151,8,4,1,4,3,4,154,8,4,1,4,1,4,5,4,158,8,4,10,4,12,4,161,9,
	4,1,4,1,4,3,4,165,8,4,1,4,1,4,3,4,169,8,4,1,4,3,4,172,8,4,1,4,1,4,3,4,176,
	8,4,1,4,1,4,5,4,180,8,4,10,4,12,4,183,9,4,1,4,1,4,3,4,187,8,4,1,4,3,4,190,
	8,4,3,4,192,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,201,8,5,1,6,1,6,1,7,1,7,
	5,7,207,8,7,10,7,12,7,210,9,7,1,7,5,7,213,8,7,10,7,12,7,216,9,7,1,7,3,7,
	219,8,7,1,8,1,8,3,8,223,8,8,1,8,1,8,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,
	10,1,10,3,10,236,8,10,1,10,3,10,239,8,10,3,10,241,8,10,1,11,1,11,3,11,245,
	8,11,1,11,3,11,248,8,11,1,12,1,12,1,13,1,13,1,13,1,14,1,14,3,14,257,8,14,
	1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,3,
	15,273,8,15,1,16,1,16,1,17,1,17,1,18,1,18,1,19,1,19,1,20,1,20,1,21,1,21,
	1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,3,21,295,8,21,1,22,1,22,1,23,1,
	23,1,24,1,24,1,25,1,25,1,26,1,26,1,27,1,27,1,28,1,28,1,29,1,29,1,30,1,30,
	1,31,1,31,3,31,317,8,31,1,32,1,32,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,
	33,1,33,1,33,1,33,1,33,1,33,1,33,3,33,335,8,33,1,34,1,34,1,35,1,35,1,36,
	1,36,1,37,1,37,1,38,1,38,1,38,3,38,348,8,38,1,39,1,39,1,40,1,40,1,41,1,
	41,1,41,3,41,357,8,41,3,41,359,8,41,1,42,1,42,1,42,3,42,364,8,42,1,42,1,
	42,1,42,3,42,369,8,42,1,43,1,43,1,44,1,44,3,44,375,8,44,1,45,1,45,1,45,
	1,45,1,45,1,45,1,45,1,45,1,45,1,45,3,45,387,8,45,1,45,3,45,390,8,45,1,45,
	1,45,1,46,1,46,1,47,1,47,1,48,1,48,1,48,3,48,401,8,48,1,48,3,48,404,8,48,
	1,49,1,49,1,50,4,50,409,8,50,11,50,12,50,410,1,50,1,50,4,50,415,8,50,11,
	50,12,50,416,3,50,419,8,50,1,51,1,51,1,52,1,52,1,52,1,52,1,53,1,53,1,54,
	1,54,1,55,1,55,1,55,0,0,56,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,
	34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,
	82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,0,12,1,0,2,20,1,0,81,
	86,2,0,47,47,50,50,1,0,82,86,1,0,82,87,1,0,96,97,1,0,100,101,1,0,81,82,
	1,0,81,90,1,0,107,111,5,0,26,26,28,28,30,30,32,32,34,34,5,0,27,27,29,29,
	31,31,33,33,35,35,463,0,112,1,0,0,0,2,116,1,0,0,0,4,136,1,0,0,0,6,139,1,
	0,0,0,8,191,1,0,0,0,10,200,1,0,0,0,12,202,1,0,0,0,14,204,1,0,0,0,16,220,
	1,0,0,0,18,226,1,0,0,0,20,240,1,0,0,0,22,242,1,0,0,0,24,249,1,0,0,0,26,
	251,1,0,0,0,28,254,1,0,0,0,30,272,1,0,0,0,32,274,1,0,0,0,34,276,1,0,0,0,
	36,278,1,0,0,0,38,280,1,0,0,0,40,282,1,0,0,0,42,294,1,0,0,0,44,296,1,0,
	0,0,46,298,1,0,0,0,48,300,1,0,0,0,50,302,1,0,0,0,52,304,1,0,0,0,54,306,
	1,0,0,0,56,308,1,0,0,0,58,310,1,0,0,0,60,312,1,0,0,0,62,314,1,0,0,0,64,
	318,1,0,0,0,66,334,1,0,0,0,68,336,1,0,0,0,70,338,1,0,0,0,72,340,1,0,0,0,
	74,342,1,0,0,0,76,347,1,0,0,0,78,349,1,0,0,0,80,351,1,0,0,0,82,353,1,0,
	0,0,84,368,1,0,0,0,86,370,1,0,0,0,88,372,1,0,0,0,90,376,1,0,0,0,92,393,
	1,0,0,0,94,395,1,0,0,0,96,403,1,0,0,0,98,405,1,0,0,0,100,408,1,0,0,0,102,
	420,1,0,0,0,104,422,1,0,0,0,106,426,1,0,0,0,108,428,1,0,0,0,110,430,1,0,
	0,0,112,113,3,2,1,0,113,114,5,22,0,0,114,115,3,6,3,0,115,1,1,0,0,0,116,
	118,5,1,0,0,117,119,5,23,0,0,118,117,1,0,0,0,119,120,1,0,0,0,120,118,1,
	0,0,0,120,121,1,0,0,0,121,122,1,0,0,0,122,133,5,21,0,0,123,125,3,4,2,0,
	124,126,5,23,0,0,125,124,1,0,0,0,126,127,1,0,0,0,127,125,1,0,0,0,127,128,
	1,0,0,0,128,129,1,0,0,0,129,130,5,21,0,0,130,132,1,0,0,0,131,123,1,0,0,
	0,132,135,1,0,0,0,133,131,1,0,0,0,133,134,1,0,0,0,134,3,1,0,0,0,135,133,
	1,0,0,0,136,137,7,0,0,0,137,5,1,0,0,0,138,140,3,8,4,0,139,138,1,0,0,0,140,
	141,1,0,0,0,141,139,1,0,0,0,141,142,1,0,0,0,142,7,1,0,0,0,143,145,3,104,
	52,0,144,143,1,0,0,0,144,145,1,0,0,0,145,147,1,0,0,0,146,148,3,108,54,0,
	147,146,1,0,0,0,147,148,1,0,0,0,148,150,1,0,0,0,149,151,5,37,0,0,150,149,
	1,0,0,0,150,151,1,0,0,0,151,153,1,0,0,0,152,154,3,110,55,0,153,152,1,0,
	0,0,153,154,1,0,0,0,154,155,1,0,0,0,155,159,5,36,0,0,156,158,3,10,5,0,157,
	156,1,0,0,0,158,161,1,0,0,0,159,157,1,0,0,0,159,160,1,0,0,0,160,164,1,0,
	0,0,161,159,1,0,0,0,162,163,5,104,0,0,163,165,5,106,0,0,164,162,1,0,0,0,
	164,165,1,0,0,0,165,166,1,0,0,0,166,192,5,105,0,0,167,169,3,104,52,0,168,
	167,1,0,0,0,168,169,1,0,0,0,169,171,1,0,0,0,170,172,3,108,54,0,171,170,
	1,0,0,0,171,172,1,0,0,0,172,173,1,0,0,0,173,175,5,37,0,0,174,176,3,110,
	55,0,175,174,1,0,0,0,175,176,1,0,0,0,176,189,1,0,0,0,177,181,5,36,0,0,178,
	180,3,10,5,0,179,178,1,0,0,0,180,183,1,0,0,0,181,179,1,0,0,0,181,182,1,
	0,0,0,182,186,1,0,0,0,183,181,1,0,0,0,184,185,5,104,0,0,185,187,5,106,0,
	0,186,184,1,0,0,0,186,187,1,0,0,0,187,188,1,0,0,0,188,190,5,105,0,0,189,
	177,1,0,0,0,189,190,1,0,0,0,190,192,1,0,0,0,191,144,1,0,0,0,191,168,1,0,
	0,0,192,9,1,0,0,0,193,201,3,16,8,0,194,201,3,14,7,0,195,201,3,20,10,0,196,
	201,3,76,38,0,197,201,3,88,44,0,198,201,3,18,9,0,199,201,3,12,6,0,200,193,
	1,0,0,0,200,194,1,0,0,0,200,195,1,0,0,0,200,196,1,0,0,0,200,197,1,0,0,0,
	200,198,1,0,0,0,200,199,1,0,0,0,201,11,1,0,0,0,202,203,5,65,0,0,203,13,
	1,0,0,0,204,208,3,66,33,0,205,207,3,30,15,0,206,205,1,0,0,0,207,210,1,0,
	0,0,208,206,1,0,0,0,208,209,1,0,0,0,209,214,1,0,0,0,210,208,1,0,0,0,211,
	213,3,42,21,0,212,211,1,0,0,0,213,216,1,0,0,0,214,212,1,0,0,0,214,215,1,
	0,0,0,215,218,1,0,0,0,216,214,1,0,0,0,217,219,3,90,45,0,218,217,1,0,0,0,
	218,219,1,0,0,0,219,15,1,0,0,0,220,222,3,70,35,0,221,223,5,46,0,0,222,221,
	1,0,0,0,222,223,1,0,0,0,223,224,1,0,0,0,224,225,3,72,36,0,225,17,1,0,0,
	0,226,227,5,73,0,0,227,19,1,0,0,0,228,241,3,22,11,0,229,241,5,74,0,0,230,
	241,3,26,13,0,231,241,3,24,12,0,232,241,3,28,14,0,233,235,5,79,0,0,234,
	236,5,91,0,0,235,234,1,0,0,0,235,236,1,0,0,0,236,238,1,0,0,0,237,239,5,
	74,0,0,238,237,1,0,0,0,238,239,1,0,0,0,239,241,1,0,0,0,240,228,1,0,0,0,
	240,229,1,0,0,0,240,230,1,0,0,0,240,231,1,0,0,0,240,232,1,0,0,0,240,233,
	1,0,0,0,241,21,1,0,0,0,242,244,5,78,0,0,243,245,5,75,0,0,244,243,1,0,0,
	0,244,245,1,0,0,0,245,247,1,0,0,0,246,248,5,81,0,0,247,246,1,0,0,0,247,
	248,1,0,0,0,248,23,1,0,0,0,249,250,5,79,0,0,250,25,1,0,0,0,251,252,5,79,
	0,0,252,253,5,79,0,0,253,27,1,0,0,0,254,256,5,80,0,0,255,257,3,74,37,0,
	256,255,1,0,0,0,256,257,1,0,0,0,257,29,1,0,0,0,258,273,3,32,16,0,259,273,
	3,34,17,0,260,273,3,40,20,0,261,273,5,62,0,0,262,273,5,63,0,0,263,273,5,
	100,0,0,264,273,5,64,0,0,265,273,5,66,0,0,266,273,5,67,0,0,267,273,5,68,
	0,0,268,273,5,69,0,0,269,273,3,36,18,0,270,273,3,38,19,0,271,273,5,72,0,
	0,272,258,1,0,0,0,272,259,1,0,0,0,272,260,1,0,0,0,272,261,1,0,0,0,272,262,
	1,0,0,0,272,263,1,0,0,0,272,264,1,0,0,0,272,265,1,0,0,0,272,266,1,0,0,0,
	272,267,1,0,0,0,272,268,1,0,0,0,272,269,1,0,0,0,272,270,1,0,0,0,272,271,
	1,0,0,0,273,31,1,0,0,0,274,275,5,59,0,0,275,33,1,0,0,0,276,277,5,60,0,0,
	277,35,1,0,0,0,278,279,5,70,0,0,279,37,1,0,0,0,280,281,5,71,0,0,281,39,
	1,0,0,0,282,283,5,61,0,0,283,41,1,0,0,0,284,295,3,60,30,0,285,295,3,62,
	31,0,286,295,3,46,23,0,287,295,3,48,24,0,288,295,3,50,25,0,289,295,3,52,
	26,0,290,295,3,54,27,0,291,295,3,56,28,0,292,295,3,58,29,0,293,295,3,44,
	22,0,294,284,1,0,0,0,294,285,1,0,0,0,294,286,1,0,0,0,294,287,1,0,0,0,294,
	288,1,0,0,0,294,289,1,0,0,0,294,290,1,0,0,0,294,291,1,0,0,0,294,292,1,0,
	0,0,294,293,1,0,0,0,295,43,1,0,0,0,296,297,5,77,0,0,297,45,1,0,0,0,298,
	299,5,76,0,0,299,47,1,0,0,0,300,301,5,39,0,0,301,49,1,0,0,0,302,303,5,40,
	0,0,303,51,1,0,0,0,304,305,5,41,0,0,305,53,1,0,0,0,306,307,5,42,0,0,307,
	55,1,0,0,0,308,309,5,43,0,0,309,57,1,0,0,0,310,311,5,44,0,0,311,59,1,0,
	0,0,312,313,5,74,0,0,313,61,1,0,0,0,314,316,5,75,0,0,315,317,3,64,32,0,
	316,315,1,0,0,0,316,317,1,0,0,0,317,63,1,0,0,0,318,319,7,1,0,0,319,65,1,
	0,0,0,320,335,5,45,0,0,321,335,5,46,0,0,322,335,5,47,0,0,323,335,5,48,0,
	0,324,335,5,49,0,0,325,335,5,50,0,0,326,335,5,51,0,0,327,335,5,52,0,0,328,
	335,5,53,0,0,329,335,5,54,0,0,330,335,5,55,0,0,331,335,5,56,0,0,332,335,
	5,57,0,0,333,335,3,68,34,0,334,320,1,0,0,0,334,321,1,0,0,0,334,322,1,0,
	0,0,334,323,1,0,0,0,334,324,1,0,0,0,334,325,1,0,0,0,334,326,1,0,0,0,334,
	327,1,0,0,0,334,328,1,0,0,0,334,329,1,0,0,0,334,330,1,0,0,0,334,331,1,0,
	0,0,334,332,1,0,0,0,334,333,1,0,0,0,335,67,1,0,0,0,336,337,5,58,0,0,337,
	69,1,0,0,0,338,339,7,2,0,0,339,71,1,0,0,0,340,341,7,3,0,0,341,73,1,0,0,
	0,342,343,7,4,0,0,343,75,1,0,0,0,344,348,3,78,39,0,345,348,3,80,40,0,346,
	348,3,82,41,0,347,344,1,0,0,0,347,345,1,0,0,0,347,346,1,0,0,0,348,77,1,
	0,0,0,349,350,5,93,0,0,350,79,1,0,0,0,351,352,5,99,0,0,352,81,1,0,0,0,353,
	358,5,92,0,0,354,359,5,92,0,0,355,357,3,84,42,0,356,355,1,0,0,0,356,357,
	1,0,0,0,357,359,1,0,0,0,358,354,1,0,0,0,358,356,1,0,0,0,359,83,1,0,0,0,
	360,369,5,81,0,0,361,363,5,94,0,0,362,364,5,98,0,0,363,362,1,0,0,0,363,
	364,1,0,0,0,364,365,1,0,0,0,365,366,3,86,43,0,366,367,5,95,0,0,367,369,
	1,0,0,0,368,360,1,0,0,0,368,361,1,0,0,0,369,85,1,0,0,0,370,371,7,4,0,0,
	371,87,1,0,0,0,372,374,5,102,0,0,373,375,5,81,0,0,374,373,1,0,0,0,374,375,
	1,0,0,0,375,89,1,0,0,0,376,377,5,94,0,0,377,378,3,94,47,0,378,379,3,96,
	48,0,379,380,5,79,0,0,380,386,3,98,49,0,381,382,5,21,0,0,382,383,3,100,
	50,0,383,384,5,57,0,0,384,385,5,57,0,0,385,387,1,0,0,0,386,381,1,0,0,0,
	386,387,1,0,0,0,387,389,1,0,0,0,388,390,3,92,46,0,389,388,1,0,0,0,389,390,
	1,0,0,0,390,391,1,0,0,0,391,392,5,95,0,0,392,91,1,0,0,0,393,394,7,5,0,0,
	394,93,1,0,0,0,395,396,7,6,0,0,396,95,1,0,0,0,397,398,5,47,0,0,398,400,
	5,46,0,0,399,401,5,45,0,0,400,399,1,0,0,0,400,401,1,0,0,0,401,404,1,0,0,
	0,402,404,5,46,0,0,403,397,1,0,0,0,403,402,1,0,0,0,404,97,1,0,0,0,405,406,
	7,7,0,0,406,99,1,0,0,0,407,409,3,102,51,0,408,407,1,0,0,0,409,410,1,0,0,
	0,410,408,1,0,0,0,410,411,1,0,0,0,411,418,1,0,0,0,412,414,5,73,0,0,413,
	415,3,102,51,0,414,413,1,0,0,0,415,416,1,0,0,0,416,414,1,0,0,0,416,417,
	1,0,0,0,417,419,1,0,0,0,418,412,1,0,0,0,418,419,1,0,0,0,419,101,1,0,0,0,
	420,421,7,8,0,0,421,103,1,0,0,0,422,423,5,25,0,0,423,424,3,106,53,0,424,
	425,5,112,0,0,425,105,1,0,0,0,426,427,7,9,0,0,427,107,1,0,0,0,428,429,7,
	10,0,0,429,109,1,0,0,0,430,431,7,11,0,0,431,111,1,0,0,0,45,120,127,133,
	141,144,147,150,153,159,164,168,171,175,181,186,189,191,200,208,214,218,
	222,235,238,240,244,247,256,272,294,316,334,347,356,358,363,368,374,386,
	389,400,403,410,416,418];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!gabc_grammar.__ATN) {
			gabc_grammar.__ATN = new ATNDeserializer().deserialize(gabc_grammar._serializedATN);
		}

		return gabc_grammar.__ATN;
	}


	static DecisionsToDFA = gabc_grammar._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class StartContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public header(): HeaderContext {
		return this.getTypedRuleContext(HeaderContext, 0) as HeaderContext;
	}
	public SEPARATOR(): TerminalNode {
		return this.getToken(gabc_grammar.SEPARATOR, 0);
	}
	public body(): BodyContext {
		return this.getTypedRuleContext(BodyContext, 0) as BodyContext;
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_start;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterStart) {
	 		listener.enterStart(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitStart) {
	 		listener.exitStart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitStart) {
			return visitor.visitStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HeaderContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NAME(): TerminalNode {
		return this.getToken(gabc_grammar.NAME, 0);
	}
	public SEMICOLON_list(): TerminalNode[] {
	    	return this.getTokens(gabc_grammar.SEMICOLON);
	}
	public SEMICOLON(i: number): TerminalNode {
		return this.getToken(gabc_grammar.SEMICOLON, i);
	}
	public WORD_list(): TerminalNode[] {
	    	return this.getTokens(gabc_grammar.WORD);
	}
	public WORD(i: number): TerminalNode {
		return this.getToken(gabc_grammar.WORD, i);
	}
	public header_types_list(): Header_typesContext[] {
		return this.getTypedRuleContexts(Header_typesContext) as Header_typesContext[];
	}
	public header_types(i: number): Header_typesContext {
		return this.getTypedRuleContext(Header_typesContext, i) as Header_typesContext;
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_header;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterHeader) {
	 		listener.enterHeader(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitHeader) {
	 		listener.exitHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitHeader) {
			return visitor.visitHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Header_typesContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public GABC_COPYRIGHT(): TerminalNode {
		return this.getToken(gabc_grammar.GABC_COPYRIGHT, 0);
	}
	public SCORE_COPYRIGHT(): TerminalNode {
		return this.getToken(gabc_grammar.SCORE_COPYRIGHT, 0);
	}
	public OFFICE_PART(): TerminalNode {
		return this.getToken(gabc_grammar.OFFICE_PART, 0);
	}
	public OCCASION(): TerminalNode {
		return this.getToken(gabc_grammar.OCCASION, 0);
	}
	public METER(): TerminalNode {
		return this.getToken(gabc_grammar.METER, 0);
	}
	public COMMENTARY(): TerminalNode {
		return this.getToken(gabc_grammar.COMMENTARY, 0);
	}
	public ARRANGER(): TerminalNode {
		return this.getToken(gabc_grammar.ARRANGER, 0);
	}
	public AUTHOR(): TerminalNode {
		return this.getToken(gabc_grammar.AUTHOR, 0);
	}
	public DATE(): TerminalNode {
		return this.getToken(gabc_grammar.DATE, 0);
	}
	public MANUSCRIPT(): TerminalNode {
		return this.getToken(gabc_grammar.MANUSCRIPT, 0);
	}
	public MANUSCRIPT_REFERENCE(): TerminalNode {
		return this.getToken(gabc_grammar.MANUSCRIPT_REFERENCE, 0);
	}
	public MANUSCRIPT_STORAGE_PLACE(): TerminalNode {
		return this.getToken(gabc_grammar.MANUSCRIPT_STORAGE_PLACE, 0);
	}
	public BOOK(): TerminalNode {
		return this.getToken(gabc_grammar.BOOK, 0);
	}
	public LANGUAGE(): TerminalNode {
		return this.getToken(gabc_grammar.LANGUAGE, 0);
	}
	public TRANSCRIBER(): TerminalNode {
		return this.getToken(gabc_grammar.TRANSCRIBER, 0);
	}
	public TRANSCRIPTION_DATE(): TerminalNode {
		return this.getToken(gabc_grammar.TRANSCRIPTION_DATE, 0);
	}
	public MODE(): TerminalNode {
		return this.getToken(gabc_grammar.MODE, 0);
	}
	public USER_NOTES(): TerminalNode {
		return this.getToken(gabc_grammar.USER_NOTES, 0);
	}
	public ANNOTATION(): TerminalNode {
		return this.getToken(gabc_grammar.ANNOTATION, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_header_types;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterHeader_types) {
	 		listener.enterHeader_types(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitHeader_types) {
	 		listener.exitHeader_types(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitHeader_types) {
			return visitor.visitHeader_types(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BodyContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public syllable_list(): SyllableContext[] {
		return this.getTypedRuleContexts(SyllableContext) as SyllableContext[];
	}
	public syllable(i: number): SyllableContext {
		return this.getTypedRuleContext(SyllableContext, i) as SyllableContext;
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_body;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterBody) {
	 		listener.enterBody(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitBody) {
	 		listener.exitBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitBody) {
			return visitor.visitBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SyllableContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PARENTHESIS_OPEN(): TerminalNode {
		return this.getToken(gabc_grammar.PARENTHESIS_OPEN, 0);
	}
	public PARENTHESIS_CLOSE(): TerminalNode {
		return this.getToken(gabc_grammar.PARENTHESIS_CLOSE, 0);
	}
	public lyric_symbols(): Lyric_symbolsContext {
		return this.getTypedRuleContext(Lyric_symbolsContext, 0) as Lyric_symbolsContext;
	}
	public open_text_modifiers(): Open_text_modifiersContext {
		return this.getTypedRuleContext(Open_text_modifiersContext, 0) as Open_text_modifiersContext;
	}
	public SYLLABLE(): TerminalNode {
		return this.getToken(gabc_grammar.SYLLABLE, 0);
	}
	public close_text_modifiers(): Close_text_modifiersContext {
		return this.getTypedRuleContext(Close_text_modifiersContext, 0) as Close_text_modifiersContext;
	}
	public musical_symbol_list(): Musical_symbolContext[] {
		return this.getTypedRuleContexts(Musical_symbolContext) as Musical_symbolContext[];
	}
	public musical_symbol(i: number): Musical_symbolContext {
		return this.getTypedRuleContext(Musical_symbolContext, i) as Musical_symbolContext;
	}
	public PIPE(): TerminalNode {
		return this.getToken(gabc_grammar.PIPE, 0);
	}
	public TEXT_ABOVE(): TerminalNode {
		return this.getToken(gabc_grammar.TEXT_ABOVE, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_syllable;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterSyllable) {
	 		listener.enterSyllable(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitSyllable) {
	 		listener.exitSyllable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitSyllable) {
			return visitor.visitSyllable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Musical_symbolContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public clef(): ClefContext {
		return this.getTypedRuleContext(ClefContext, 0) as ClefContext;
	}
	public note(): NoteContext {
		return this.getTypedRuleContext(NoteContext, 0) as NoteContext;
	}
	public bar(): BarContext {
		return this.getTypedRuleContext(BarContext, 0) as BarContext;
	}
	public space(): SpaceContext {
		return this.getTypedRuleContext(SpaceContext, 0) as SpaceContext;
	}
	public custos(): CustosContext {
		return this.getTypedRuleContext(CustosContext, 0) as CustosContext;
	}
	public dot(): DotContext {
		return this.getTypedRuleContext(DotContext, 0) as DotContext;
	}
	public system_break(): System_breakContext {
		return this.getTypedRuleContext(System_breakContext, 0) as System_breakContext;
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_musical_symbol;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterMusical_symbol) {
	 		listener.enterMusical_symbol(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitMusical_symbol) {
	 		listener.exitMusical_symbol(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitMusical_symbol) {
			return visitor.visitMusical_symbol(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class System_breakContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHAR_Z(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_Z, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_system_break;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterSystem_break) {
	 		listener.enterSystem_break(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitSystem_break) {
	 		listener.exitSystem_break(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitSystem_break) {
			return visitor.visitSystem_break(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NoteContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public pitch(): PitchContext {
		return this.getTypedRuleContext(PitchContext, 0) as PitchContext;
	}
	public shape_list(): ShapeContext[] {
		return this.getTypedRuleContexts(ShapeContext) as ShapeContext[];
	}
	public shape(i: number): ShapeContext {
		return this.getTypedRuleContext(ShapeContext, i) as ShapeContext;
	}
	public attachment_list(): AttachmentContext[] {
		return this.getTypedRuleContexts(AttachmentContext) as AttachmentContext[];
	}
	public attachment(i: number): AttachmentContext {
		return this.getTypedRuleContext(AttachmentContext, i) as AttachmentContext;
	}
	public brace(): BraceContext {
		return this.getTypedRuleContext(BraceContext, 0) as BraceContext;
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_note;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterNote) {
	 		listener.enterNote(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitNote) {
	 		listener.exitNote(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitNote) {
			return visitor.visitNote(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClefContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public clef_symbol(): Clef_symbolContext {
		return this.getTypedRuleContext(Clef_symbolContext, 0) as Clef_symbolContext;
	}
	public clef_number(): Clef_numberContext {
		return this.getTypedRuleContext(Clef_numberContext, 0) as Clef_numberContext;
	}
	public CHAR_b(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_b, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_clef;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterClef) {
	 		listener.enterClef(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitClef) {
	 		listener.exitClef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitClef) {
			return visitor.visitClef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DotContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOT(): TerminalNode {
		return this.getToken(gabc_grammar.DOT, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_dot;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterDot) {
	 		listener.enterDot(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitDot) {
	 		listener.exitDot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitDot) {
			return visitor.visitDot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BarContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public bar_small(): Bar_smallContext {
		return this.getTypedRuleContext(Bar_smallContext, 0) as Bar_smallContext;
	}
	public APOSTROPHE(): TerminalNode {
		return this.getToken(gabc_grammar.APOSTROPHE, 0);
	}
	public bar_finallis(): Bar_finallisContext {
		return this.getTypedRuleContext(Bar_finallisContext, 0) as Bar_finallisContext;
	}
	public bar_maxima(): Bar_maximaContext {
		return this.getTypedRuleContext(Bar_maximaContext, 0) as Bar_maximaContext;
	}
	public bar_maior(): Bar_maiorContext {
		return this.getTypedRuleContext(Bar_maiorContext, 0) as Bar_maiorContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(gabc_grammar.COLON, 0);
	}
	public INTERROGATION(): TerminalNode {
		return this.getToken(gabc_grammar.INTERROGATION, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_bar;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterBar) {
	 		listener.enterBar(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitBar) {
	 		listener.exitBar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitBar) {
			return visitor.visitBar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bar_smallContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMMA(): TerminalNode {
		return this.getToken(gabc_grammar.COMMA, 0);
	}
	public UNDERSCORE(): TerminalNode {
		return this.getToken(gabc_grammar.UNDERSCORE, 0);
	}
	public NUMBER_0(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_0, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_bar_small;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterBar_small) {
	 		listener.enterBar_small(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitBar_small) {
	 		listener.exitBar_small(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitBar_small) {
			return visitor.visitBar_small(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bar_maximaContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COLON(): TerminalNode {
		return this.getToken(gabc_grammar.COLON, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_bar_maxima;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterBar_maxima) {
	 		listener.enterBar_maxima(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitBar_maxima) {
	 		listener.exitBar_maxima(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitBar_maxima) {
			return visitor.visitBar_maxima(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bar_finallisContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COLON_list(): TerminalNode[] {
	    	return this.getTokens(gabc_grammar.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(gabc_grammar.COLON, i);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_bar_finallis;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterBar_finallis) {
	 		listener.enterBar_finallis(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitBar_finallis) {
	 		listener.exitBar_finallis(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitBar_finallis) {
			return visitor.visitBar_finallis(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bar_maiorContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEMICOLON_MUSIC(): TerminalNode {
		return this.getToken(gabc_grammar.SEMICOLON_MUSIC, 0);
	}
	public bar_number(): Bar_numberContext {
		return this.getTypedRuleContext(Bar_numberContext, 0) as Bar_numberContext;
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_bar_maior;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterBar_maior) {
	 		listener.enterBar_maior(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitBar_maior) {
	 		listener.exitBar_maior(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitBar_maior) {
			return visitor.visitBar_maior(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShapeContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public virga_right(): Virga_rightContext {
		return this.getTypedRuleContext(Virga_rightContext, 0) as Virga_rightContext;
	}
	public virga_left(): Virga_leftContext {
		return this.getTypedRuleContext(Virga_leftContext, 0) as Virga_leftContext;
	}
	public tristropha(): TristrophaContext {
		return this.getTypedRuleContext(TristrophaContext, 0) as TristrophaContext;
	}
	public CHAR_w(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_w, 0);
	}
	public CHAR_W(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_W, 0);
	}
	public CHAR_o(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_o, 0);
	}
	public CHAR_O(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_O, 0);
	}
	public CHAR_MINOR(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_MINOR, 0);
	}
	public CHAR_MAJOR(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_MAJOR, 0);
	}
	public CHAR_VIRGLILLA(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_VIRGLILLA, 0);
	}
	public CHAR_PLUS(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_PLUS, 0);
	}
	public flat(): FlatContext {
		return this.getTypedRuleContext(FlatContext, 0) as FlatContext;
	}
	public natural(): NaturalContext {
		return this.getTypedRuleContext(NaturalContext, 0) as NaturalContext;
	}
	public CHAR_HASH(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_HASH, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_shape;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterShape) {
	 		listener.enterShape(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitShape) {
	 		listener.exitShape(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitShape) {
			return visitor.visitShape(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Virga_rightContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHAR_v(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_v, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_virga_right;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterVirga_right) {
	 		listener.enterVirga_right(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitVirga_right) {
	 		listener.exitVirga_right(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitVirga_right) {
			return visitor.visitVirga_right(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Virga_leftContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHAR_V(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_V, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_virga_left;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterVirga_left) {
	 		listener.enterVirga_left(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitVirga_left) {
	 		listener.exitVirga_left(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitVirga_left) {
			return visitor.visitVirga_left(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FlatContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHAR_x(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_x, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_flat;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterFlat) {
	 		listener.enterFlat(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitFlat) {
	 		listener.exitFlat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitFlat) {
			return visitor.visitFlat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NaturalContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHAR_y(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_y, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_natural;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterNatural) {
	 		listener.enterNatural(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitNatural) {
	 		listener.exitNatural(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitNatural) {
			return visitor.visitNatural(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TristrophaContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHAR_s(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_s, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_tristropha;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterTristropha) {
	 		listener.enterTristropha(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitTristropha) {
	 		listener.exitTristropha(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitTristropha) {
			return visitor.visitTristropha(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttachmentContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public episema_vertical(): Episema_verticalContext {
		return this.getTypedRuleContext(Episema_verticalContext, 0) as Episema_verticalContext;
	}
	public episema_horizontal(): Episema_horizontalContext {
		return this.getTypedRuleContext(Episema_horizontalContext, 0) as Episema_horizontalContext;
	}
	public linea_punctum(): Linea_punctumContext {
		return this.getTypedRuleContext(Linea_punctumContext, 0) as Linea_punctumContext;
	}
	public linea_punctum_cavum(): Linea_punctum_cavumContext {
		return this.getTypedRuleContext(Linea_punctum_cavumContext, 0) as Linea_punctum_cavumContext;
	}
	public accentus(): AccentusContext {
		return this.getTypedRuleContext(AccentusContext, 0) as AccentusContext;
	}
	public reversed_accentus(): Reversed_accentusContext {
		return this.getTypedRuleContext(Reversed_accentusContext, 0) as Reversed_accentusContext;
	}
	public circulus(): CirculusContext {
		return this.getTypedRuleContext(CirculusContext, 0) as CirculusContext;
	}
	public semi_circulus(): Semi_circulusContext {
		return this.getTypedRuleContext(Semi_circulusContext, 0) as Semi_circulusContext;
	}
	public reversed_semi_circulus(): Reversed_semi_circulusContext {
		return this.getTypedRuleContext(Reversed_semi_circulusContext, 0) as Reversed_semi_circulusContext;
	}
	public punctum_cavum(): Punctum_cavumContext {
		return this.getTypedRuleContext(Punctum_cavumContext, 0) as Punctum_cavumContext;
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_attachment;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterAttachment) {
	 		listener.enterAttachment(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitAttachment) {
	 		listener.exitAttachment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitAttachment) {
			return visitor.visitAttachment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Punctum_cavumContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHAR_r(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_r, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_punctum_cavum;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterPunctum_cavum) {
	 		listener.enterPunctum_cavum(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitPunctum_cavum) {
	 		listener.exitPunctum_cavum(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitPunctum_cavum) {
			return visitor.visitPunctum_cavum(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Linea_punctumContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHAR_R(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_R, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_linea_punctum;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterLinea_punctum) {
	 		listener.enterLinea_punctum(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitLinea_punctum) {
	 		listener.exitLinea_punctum(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitLinea_punctum) {
			return visitor.visitLinea_punctum(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Linea_punctum_cavumContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ATTACHMENT_r0(): TerminalNode {
		return this.getToken(gabc_grammar.ATTACHMENT_r0, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_linea_punctum_cavum;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterLinea_punctum_cavum) {
	 		listener.enterLinea_punctum_cavum(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitLinea_punctum_cavum) {
	 		listener.exitLinea_punctum_cavum(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitLinea_punctum_cavum) {
			return visitor.visitLinea_punctum_cavum(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AccentusContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ATTACHMENT_r1(): TerminalNode {
		return this.getToken(gabc_grammar.ATTACHMENT_r1, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_accentus;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterAccentus) {
	 		listener.enterAccentus(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitAccentus) {
	 		listener.exitAccentus(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitAccentus) {
			return visitor.visitAccentus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Reversed_accentusContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ATTACHMENT_r2(): TerminalNode {
		return this.getToken(gabc_grammar.ATTACHMENT_r2, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_reversed_accentus;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterReversed_accentus) {
	 		listener.enterReversed_accentus(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitReversed_accentus) {
	 		listener.exitReversed_accentus(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitReversed_accentus) {
			return visitor.visitReversed_accentus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CirculusContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ATTACHMENT_r3(): TerminalNode {
		return this.getToken(gabc_grammar.ATTACHMENT_r3, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_circulus;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterCirculus) {
	 		listener.enterCirculus(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitCirculus) {
	 		listener.exitCirculus(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitCirculus) {
			return visitor.visitCirculus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Semi_circulusContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ATTACHMENT_r4(): TerminalNode {
		return this.getToken(gabc_grammar.ATTACHMENT_r4, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_semi_circulus;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterSemi_circulus) {
	 		listener.enterSemi_circulus(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitSemi_circulus) {
	 		listener.exitSemi_circulus(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitSemi_circulus) {
			return visitor.visitSemi_circulus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Reversed_semi_circulusContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ATTACHMENT_r5(): TerminalNode {
		return this.getToken(gabc_grammar.ATTACHMENT_r5, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_reversed_semi_circulus;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterReversed_semi_circulus) {
	 		listener.enterReversed_semi_circulus(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitReversed_semi_circulus) {
	 		listener.exitReversed_semi_circulus(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitReversed_semi_circulus) {
			return visitor.visitReversed_semi_circulus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Episema_verticalContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public APOSTROPHE(): TerminalNode {
		return this.getToken(gabc_grammar.APOSTROPHE, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_episema_vertical;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterEpisema_vertical) {
	 		listener.enterEpisema_vertical(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitEpisema_vertical) {
	 		listener.exitEpisema_vertical(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitEpisema_vertical) {
			return visitor.visitEpisema_vertical(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Episema_horizontalContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UNDERSCORE(): TerminalNode {
		return this.getToken(gabc_grammar.UNDERSCORE, 0);
	}
	public position_horizontal_episema(): Position_horizontal_episemaContext {
		return this.getTypedRuleContext(Position_horizontal_episemaContext, 0) as Position_horizontal_episemaContext;
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_episema_horizontal;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterEpisema_horizontal) {
	 		listener.enterEpisema_horizontal(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitEpisema_horizontal) {
	 		listener.exitEpisema_horizontal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitEpisema_horizontal) {
			return visitor.visitEpisema_horizontal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Position_horizontal_episemaContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUMBER_0(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_0, 0);
	}
	public NUMBER_1(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_1, 0);
	}
	public NUMBER_2(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_2, 0);
	}
	public NUMBER_3(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_3, 0);
	}
	public NUMBER_4(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_4, 0);
	}
	public NUMBER_5(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_5, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_position_horizontal_episema;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterPosition_horizontal_episema) {
	 		listener.enterPosition_horizontal_episema(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitPosition_horizontal_episema) {
	 		listener.exitPosition_horizontal_episema(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitPosition_horizontal_episema) {
			return visitor.visitPosition_horizontal_episema(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PitchContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHAR_a(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_a, 0);
	}
	public CHAR_b(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_b, 0);
	}
	public CHAR_c(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_c, 0);
	}
	public CHAR_d(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_d, 0);
	}
	public CHAR_e(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_e, 0);
	}
	public CHAR_f(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_f, 0);
	}
	public CHAR_g(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_g, 0);
	}
	public CHAR_h(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_h, 0);
	}
	public CHAR_i(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_i, 0);
	}
	public CHAR_j(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_j, 0);
	}
	public CHAR_k(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_k, 0);
	}
	public CHAR_l(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_l, 0);
	}
	public CHAR_m(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_m, 0);
	}
	public inclinatum(): InclinatumContext {
		return this.getTypedRuleContext(InclinatumContext, 0) as InclinatumContext;
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_pitch;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterPitch) {
	 		listener.enterPitch(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitPitch) {
	 		listener.exitPitch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitPitch) {
			return visitor.visitPitch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InclinatumContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UPPERCASE_SHAPE(): TerminalNode {
		return this.getToken(gabc_grammar.UPPERCASE_SHAPE, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_inclinatum;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterInclinatum) {
	 		listener.enterInclinatum(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitInclinatum) {
	 		listener.exitInclinatum(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitInclinatum) {
			return visitor.visitInclinatum(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Clef_symbolContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHAR_c(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_c, 0);
	}
	public CHAR_f(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_f, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_clef_symbol;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterClef_symbol) {
	 		listener.enterClef_symbol(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitClef_symbol) {
	 		listener.exitClef_symbol(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitClef_symbol) {
			return visitor.visitClef_symbol(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Clef_numberContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUMBER_1(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_1, 0);
	}
	public NUMBER_2(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_2, 0);
	}
	public NUMBER_3(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_3, 0);
	}
	public NUMBER_4(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_4, 0);
	}
	public NUMBER_5(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_5, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_clef_number;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterClef_number) {
	 		listener.enterClef_number(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitClef_number) {
	 		listener.exitClef_number(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitClef_number) {
			return visitor.visitClef_number(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bar_numberContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUMBER_1(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_1, 0);
	}
	public NUMBER_2(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_2, 0);
	}
	public NUMBER_3(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_3, 0);
	}
	public NUMBER_4(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_4, 0);
	}
	public NUMBER_5(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_5, 0);
	}
	public NUMBER_6(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_6, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_bar_number;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterBar_number) {
	 		listener.enterBar_number(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitBar_number) {
	 		listener.exitBar_number(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitBar_number) {
			return visitor.visitBar_number(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpaceContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public no_space(): No_spaceContext {
		return this.getTypedRuleContext(No_spaceContext, 0) as No_spaceContext;
	}
	public no_space_coccecting(): No_space_coccectingContext {
		return this.getTypedRuleContext(No_space_coccectingContext, 0) as No_space_coccectingContext;
	}
	public neumatic_cut(): Neumatic_cutContext {
		return this.getTypedRuleContext(Neumatic_cutContext, 0) as Neumatic_cutContext;
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_space;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterSpace) {
	 		listener.enterSpace(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitSpace) {
	 		listener.exitSpace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitSpace) {
			return visitor.visitSpace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class No_spaceContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXCLAMATION(): TerminalNode {
		return this.getToken(gabc_grammar.EXCLAMATION, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_no_space;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterNo_space) {
	 		listener.enterNo_space(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitNo_space) {
	 		listener.exitNo_space(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitNo_space) {
			return visitor.visitNo_space(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class No_space_coccectingContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AT(): TerminalNode {
		return this.getToken(gabc_grammar.AT, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_no_space_coccecting;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterNo_space_coccecting) {
	 		listener.enterNo_space_coccecting(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitNo_space_coccecting) {
	 		listener.exitNo_space_coccecting(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitNo_space_coccecting) {
			return visitor.visitNo_space_coccecting(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Neumatic_cutContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SLASH_list(): TerminalNode[] {
	    	return this.getTokens(gabc_grammar.SLASH);
	}
	public SLASH(i: number): TerminalNode {
		return this.getToken(gabc_grammar.SLASH, i);
	}
	public space_factor(): Space_factorContext {
		return this.getTypedRuleContext(Space_factorContext, 0) as Space_factorContext;
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_neumatic_cut;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterNeumatic_cut) {
	 		listener.enterNeumatic_cut(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitNeumatic_cut) {
	 		listener.exitNeumatic_cut(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitNeumatic_cut) {
			return visitor.visitNeumatic_cut(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Space_factorContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUMBER_0(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_0, 0);
	}
	public SQUARE_BRACKET_OPEN(): TerminalNode {
		return this.getToken(gabc_grammar.SQUARE_BRACKET_OPEN, 0);
	}
	public factor_number(): Factor_numberContext {
		return this.getTypedRuleContext(Factor_numberContext, 0) as Factor_numberContext;
	}
	public SQUARE_BRACKET_CLOSE(): TerminalNode {
		return this.getToken(gabc_grammar.SQUARE_BRACKET_CLOSE, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(gabc_grammar.MINUS, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_space_factor;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterSpace_factor) {
	 		listener.enterSpace_factor(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitSpace_factor) {
	 		listener.exitSpace_factor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitSpace_factor) {
			return visitor.visitSpace_factor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Factor_numberContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUMBER_1(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_1, 0);
	}
	public NUMBER_2(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_2, 0);
	}
	public NUMBER_3(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_3, 0);
	}
	public NUMBER_4(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_4, 0);
	}
	public NUMBER_5(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_5, 0);
	}
	public NUMBER_6(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_6, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_factor_number;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterFactor_number) {
	 		listener.enterFactor_number(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitFactor_number) {
	 		listener.exitFactor_number(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitFactor_number) {
			return visitor.visitFactor_number(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CustosContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHAR_z(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_z, 0);
	}
	public NUMBER_0(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_0, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_custos;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterCustos) {
	 		listener.enterCustos(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitCustos) {
	 		listener.exitCustos(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitCustos) {
			return visitor.visitCustos(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BraceContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SQUARE_BRACKET_OPEN(): TerminalNode {
		return this.getToken(gabc_grammar.SQUARE_BRACKET_OPEN, 0);
	}
	public brace_position(): Brace_positionContext {
		return this.getTypedRuleContext(Brace_positionContext, 0) as Brace_positionContext;
	}
	public brace_shape(): Brace_shapeContext {
		return this.getTypedRuleContext(Brace_shapeContext, 0) as Brace_shapeContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(gabc_grammar.COLON, 0);
	}
	public brace_attachment(): Brace_attachmentContext {
		return this.getTypedRuleContext(Brace_attachmentContext, 0) as Brace_attachmentContext;
	}
	public SQUARE_BRACKET_CLOSE(): TerminalNode {
		return this.getToken(gabc_grammar.SQUARE_BRACKET_CLOSE, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(gabc_grammar.SEMICOLON, 0);
	}
	public number_decimal(): Number_decimalContext {
		return this.getTypedRuleContext(Number_decimalContext, 0) as Number_decimalContext;
	}
	public CHAR_m_list(): TerminalNode[] {
	    	return this.getTokens(gabc_grammar.CHAR_m);
	}
	public CHAR_m(i: number): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_m, i);
	}
	public brackets(): BracketsContext {
		return this.getTypedRuleContext(BracketsContext, 0) as BracketsContext;
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_brace;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterBrace) {
	 		listener.enterBrace(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitBrace) {
	 		listener.exitBrace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitBrace) {
			return visitor.visitBrace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BracketsContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BRACKET_OPEN(): TerminalNode {
		return this.getToken(gabc_grammar.BRACKET_OPEN, 0);
	}
	public BRACKET_CLOSE(): TerminalNode {
		return this.getToken(gabc_grammar.BRACKET_CLOSE, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_brackets;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterBrackets) {
	 		listener.enterBrackets(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitBrackets) {
	 		listener.exitBrackets(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitBrackets) {
			return visitor.visitBrackets(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Brace_positionContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHAR_o(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_o, 0);
	}
	public CHAR_u(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_u, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_brace_position;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterBrace_position) {
	 		listener.enterBrace_position(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitBrace_position) {
	 		listener.exitBrace_position(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitBrace_position) {
			return visitor.visitBrace_position(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Brace_shapeContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHAR_c(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_c, 0);
	}
	public CHAR_b(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_b, 0);
	}
	public CHAR_a(): TerminalNode {
		return this.getToken(gabc_grammar.CHAR_a, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_brace_shape;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterBrace_shape) {
	 		listener.enterBrace_shape(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitBrace_shape) {
	 		listener.exitBrace_shape(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitBrace_shape) {
			return visitor.visitBrace_shape(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Brace_attachmentContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUMBER_0(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_0, 0);
	}
	public NUMBER_1(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_1, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_brace_attachment;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterBrace_attachment) {
	 		listener.enterBrace_attachment(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitBrace_attachment) {
	 		listener.exitBrace_attachment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitBrace_attachment) {
			return visitor.visitBrace_attachment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Number_decimalContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public number__list(): NumberContext[] {
		return this.getTypedRuleContexts(NumberContext) as NumberContext[];
	}
	public number_(i: number): NumberContext {
		return this.getTypedRuleContext(NumberContext, i) as NumberContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(gabc_grammar.DOT, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_number_decimal;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterNumber_decimal) {
	 		listener.enterNumber_decimal(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitNumber_decimal) {
	 		listener.exitNumber_decimal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitNumber_decimal) {
			return visitor.visitNumber_decimal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUMBER_0(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_0, 0);
	}
	public NUMBER_1(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_1, 0);
	}
	public NUMBER_2(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_2, 0);
	}
	public NUMBER_3(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_3, 0);
	}
	public NUMBER_4(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_4, 0);
	}
	public NUMBER_5(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_5, 0);
	}
	public NUMBER_6(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_6, 0);
	}
	public NUMBER_7(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_7, 0);
	}
	public NUMBER_8(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_8, 0);
	}
	public NUMBER_9(): TerminalNode {
		return this.getToken(gabc_grammar.NUMBER_9, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_number;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterNumber) {
	 		listener.enterNumber(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitNumber) {
	 		listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Lyric_symbolsContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_LYRIC(): TerminalNode {
		return this.getToken(gabc_grammar.OPEN_LYRIC, 0);
	}
	public lyric(): LyricContext {
		return this.getTypedRuleContext(LyricContext, 0) as LyricContext;
	}
	public CLOSE_LYRIC(): TerminalNode {
		return this.getToken(gabc_grammar.CLOSE_LYRIC, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_lyric_symbols;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterLyric_symbols) {
	 		listener.enterLyric_symbols(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitLyric_symbols) {
	 		listener.exitLyric_symbols(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitLyric_symbols) {
			return visitor.visitLyric_symbols(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LyricContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public V_LYRIC(): TerminalNode {
		return this.getToken(gabc_grammar.V_LYRIC, 0);
	}
	public R_LYRIC(): TerminalNode {
		return this.getToken(gabc_grammar.R_LYRIC, 0);
	}
	public A_LYRIC(): TerminalNode {
		return this.getToken(gabc_grammar.A_LYRIC, 0);
	}
	public OE_LYRIC(): TerminalNode {
		return this.getToken(gabc_grammar.OE_LYRIC, 0);
	}
	public AE_LYRIC(): TerminalNode {
		return this.getToken(gabc_grammar.AE_LYRIC, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_lyric;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterLyric) {
	 		listener.enterLyric(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitLyric) {
	 		listener.exitLyric(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitLyric) {
			return visitor.visitLyric(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Open_text_modifiersContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_BOLD(): TerminalNode {
		return this.getToken(gabc_grammar.OPEN_BOLD, 0);
	}
	public OPEN_ITALIC(): TerminalNode {
		return this.getToken(gabc_grammar.OPEN_ITALIC, 0);
	}
	public OPEN_COLOR(): TerminalNode {
		return this.getToken(gabc_grammar.OPEN_COLOR, 0);
	}
	public OPEN_UNDERLINE(): TerminalNode {
		return this.getToken(gabc_grammar.OPEN_UNDERLINE, 0);
	}
	public OPEN_SMALL_CAPS(): TerminalNode {
		return this.getToken(gabc_grammar.OPEN_SMALL_CAPS, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_open_text_modifiers;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterOpen_text_modifiers) {
	 		listener.enterOpen_text_modifiers(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitOpen_text_modifiers) {
	 		listener.exitOpen_text_modifiers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitOpen_text_modifiers) {
			return visitor.visitOpen_text_modifiers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Close_text_modifiersContext extends ParserRuleContext {
	constructor(parser?: gabc_grammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CLOSE_BOLD(): TerminalNode {
		return this.getToken(gabc_grammar.CLOSE_BOLD, 0);
	}
	public CLOSE_ITALIC(): TerminalNode {
		return this.getToken(gabc_grammar.CLOSE_ITALIC, 0);
	}
	public CLOSE_COLOR(): TerminalNode {
		return this.getToken(gabc_grammar.CLOSE_COLOR, 0);
	}
	public CLOSE_UNDERLINE(): TerminalNode {
		return this.getToken(gabc_grammar.CLOSE_UNDERLINE, 0);
	}
	public CLOSE_SMALL_CAPS(): TerminalNode {
		return this.getToken(gabc_grammar.CLOSE_SMALL_CAPS, 0);
	}
    public get ruleIndex(): number {
    	return gabc_grammar.RULE_close_text_modifiers;
	}
	public enterRule(listener: gabc_grammarListener): void {
	    if(listener.enterClose_text_modifiers) {
	 		listener.enterClose_text_modifiers(this);
		}
	}
	public exitRule(listener: gabc_grammarListener): void {
	    if(listener.exitClose_text_modifiers) {
	 		listener.exitClose_text_modifiers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gabc_grammarVisitor<Result>): Result {
		if (visitor.visitClose_text_modifiers) {
			return visitor.visitClose_text_modifiers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
