lexer grammar gabc_lexer;

fragment FSEMICOLON: ';'; // drizo

NAME : 'name:' ;
GABC_COPYRIGHT : 'gabc-copyright:' ;
SCORE_COPYRIGHT : 'score-copyright:' ;
OFFICE_PART : 'office-part:' ;
OCCASION : 'occasion:' ;
METER : 'meter:' ;
COMMENTARY : 'commentary:' ;
ARRANGER: 'arranger:' ;
AUTHOR : 'author:' ;
DATE : 'date:' ;
MANUSCRIPT : 'manuscript:' ;
MANUSCRIPT_REFERENCE : 'manuscript-reference:' ;
MANUSCRIPT_STORAGE_PLACE : 'manuscript-storage-place:' ;
BOOK: 'book:' ;
LANGUAGE : 'language:' ;
TRANSCRIBER : 'transcriber:' ;
TRANSCRIPTION_DATE : 'transcription-date:' ;
MODE : 'mode:' ;
USER_NOTES : 'user-notes:' ;
ANNOTATION : 'annotation:' ;

SEMICOLON : FSEMICOLON; // in both modes

SEPARATOR : '%%' -> pushMode(TEXT);

WORD : [a-zA-Z0-9.,/()*]+ ;
WS :  [ \t\n\r]+ -> skip;


mode TEXT;

OPEN_LYRIC : '<sp>' -> pushMode(LYRIC_MODE);
OPEN_BOLD : '<b>' ;
CLOSE_BOLD : '</b>' ;
OPEN_ITALIC : '<i>' ;
CLOSE_ITALIC : '</i>' ;
OPEN_COLOR : '<c>' ;
CLOSE_COLOR : '</c>' ;
OPEN_UNDERLINE : '<u>' ;
CLOSE_UNDERLINE : '</u>' ;
OPEN_SMALL_CAPS : '<sc>' ;
CLOSE_SMALL_CAPS : '</sc>' ;
PARENTHESIS_OPEN: '(' -> pushMode(MUSIC);
//SILABA : [a-zA-Z]+ ;
SYLLABLE : [a-zA-Z0-9;áéíóúÁÉÍÓÚ:./,æ-]+ | '*'+;
WS3 :  [ \t\n\r]+ -> skip;


mode MUSIC;

ATTACHMENT_r0 : 'r0' ;
ATTACHMENT_r1 : 'r1' ;
ATTACHMENT_r2 : 'r2' ;
ATTACHMENT_r3 : 'r3' ;
ATTACHMENT_r4 : 'r4' ;
ATTACHMENT_r5 : 'r5' ;

CHAR_a: 'a';
CHAR_b: 'b';
CHAR_c: 'c';
CHAR_d: 'd';
CHAR_e: 'e';
CHAR_f: 'f';
CHAR_g: 'g';
CHAR_h: 'h';
CHAR_i: 'i';
CHAR_j: 'j';
CHAR_k: 'k';
CHAR_l: 'l';
CHAR_m: 'm';

//SHAPE : [ABCDEFGHIJKLMvVswoO<>~+xy#r] ;
UPPERCASE_SHAPE : [A-M] ;
CHAR_v : 'v' ;
CHAR_V : 'V' ;
CHAR_s : 's' ;
CHAR_w : 'w' ;
CHAR_W : 'W' ;
CHAR_O : 'O' ;
CHAR_Z : 'Z' ;
CHAR_MINOR : '<' ;
CHAR_MAJOR : '>' ;
CHAR_VIRGLILLA : '~' ;
CHAR_PLUS : '+' ;
CHAR_x : 'x' ;
CHAR_y : 'y' ;
CHAR_HASH : '#' ;

//ATTACHMENT : '.' | '\'' | '_' | 'R' | 'r0' | 'r1' | 'r2' | 'r3' | 'r4' | 'r5' ;
DOT : '.' ;
APOSTROPHE : '\'' ;
UNDERSCORE : '_' ;
CHAR_R : 'R' ;
CHAR_r : 'r' ;

COMMA : ',' ;
COLON : ':' ;
SEMICOLON_MUSIC: FSEMICOLON;

//BAR_COMPLEMENT : [0-6_] ;
//NUMBER : [1-5] ;
NUMBER_0 : '0' ;
NUMBER_1 : '1' ;
NUMBER_2 : '2' ;
NUMBER_3 : '3' ;
NUMBER_4 : '4' ;
NUMBER_5 : '5' ;
NUMBER_6 : '6' ;
NUMBER_7 : '7' ;
NUMBER_8 : '8' ;
NUMBER_9 : '9' ;

INTERROGATION : '?' ;

SLASH : '/' ;
EXCLAMATION : '!' ;
SQUARE_BRACKET_OPEN : '[' ;
SQUARE_BRACKET_CLOSE : ']' ;
BRACKET_OPEN : '{' ;
BRACKET_CLOSE : '}' ;

MINUS : '-' ;
AT : '@' ;

CHAR_o : 'o' ;
CHAR_u : 'u' ;

CHAR_z : 'z' ;

WS4 :  [ \t\n\r]+ -> skip;
PIPE : '|' -> pushMode(TEXTO_SUP);
PARENTHESIS_CLOSE: ')' -> pushMode(TEXT);

mode TEXTO_SUP;

TEXT_ABOVE : [a-zA-Záéíóú:.0-9/*~<>`-]+ -> pushMode(MUSIC);


mode LYRIC_MODE;

V_LYRIC : 'V/' ;
R_LYRIC : 'R/' ;
A_LYRIC : 'A/' ;
OE_LYRIC : '\'oe' ;
AE_LYRIC : '\'ae' ;
CLOSE_LYRIC : '</sp>' -> pushMode(TEXT);

