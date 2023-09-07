parser grammar gabc_grammar;
/**
@author Carlos Peñarrubia
@author Juan Carlos Martínez-Sevilla
@author David Rizo
**/
options { tokenVocab=gabc_lexer; }

start: header SEPARATOR body;

header : NAME WORD+ SEMICOLON (header_types WORD+ SEMICOLON)* ;

header_types : GABC_COPYRIGHT  // drizo - simplified
              | SCORE_COPYRIGHT
              | OFFICE_PART
              | OCCASION
              | METER
              | COMMENTARY
              | ARRANGER
              | AUTHOR
              | DATE
              | MANUSCRIPT
              | MANUSCRIPT_REFERENCE
              | MANUSCRIPT_STORAGE_PLACE
              | BOOK
              | LANGUAGE
              | TRANSCRIBER
              | TRANSCRIPTION_DATE
              | MODE
              | USER_NOTES
              | ANNOTATION
              ;

body : syllable+;

//TODO simplificar esto.... - es casi igual
syllable : lyric_symbols? open_text_modifiers? SYLLABLE? close_text_modifiers? PARENTHESIS_OPEN musical_symbol* (PIPE TEXT_ABOVE)? PARENTHESIS_CLOSE
         | lyric_symbols? open_text_modifiers? SYLLABLE close_text_modifiers? (PARENTHESIS_OPEN musical_symbol* (PIPE TEXT_ABOVE)? PARENTHESIS_CLOSE)?
         ;

musical_symbol : clef
     | note
     | bar
     | space
     | custos
     | dot
     | system_break // drizo
     ;

system_break: CHAR_Z;

note: pitch shape* attachment* brace?;

clef : clef_symbol CHAR_b? clef_number ;

dot: DOT; // drizo lo he movido como independiente

bar : bar_small //TODO ¿qué división son éstas?
    | APOSTROPHE
    | bar_finallis
    | bar_maxima
    | bar_maior
    | COLON INTERROGATION? APOSTROPHE?
    ;

bar_small : COMMA UNDERSCORE? NUMBER_0? ;

bar_maxima: COLON; // drizo

bar_finallis: COLON COLON;

bar_maior: SEMICOLON_MUSIC bar_number?; // drizo


shape : virga_right //TODO Regla parser con nombre a cada una de estas
      | virga_left
      | tristropha
      | CHAR_w
      | CHAR_W
      | CHAR_o
      | CHAR_O
      | CHAR_MINOR
      | CHAR_MAJOR
      | CHAR_VIRGLILLA
      | CHAR_PLUS
      | flat
      | natural
      | CHAR_HASH
      ;

virga_right : CHAR_v;

virga_left : CHAR_V;

flat : CHAR_x;

natural : CHAR_y;

tristropha : CHAR_s;

attachment : //TODO Hay que darle nombre a cada una de estas - véase episema
            episema_vertical
            | episema_horizontal
            | linea_punctum
            | linea_punctum_cavum
            | accentus
            | reversed_accentus
            | circulus
            | semi_circulus
            | reversed_semi_circulus
            | punctum_cavum
            ;

punctum_cavum : CHAR_r ;

linea_punctum : CHAR_R;

linea_punctum_cavum : ATTACHMENT_r0 ;

accentus : ATTACHMENT_r1;

reversed_accentus : ATTACHMENT_r2;

circulus : ATTACHMENT_r3;

semi_circulus : ATTACHMENT_r4;

reversed_semi_circulus : ATTACHMENT_r5;

episema_vertical: APOSTROPHE;

episema_horizontal : UNDERSCORE position_horizontal_episema? ;

position_horizontal_episema : NUMBER_0 | NUMBER_1 | NUMBER_2 | NUMBER_3 | NUMBER_4 | NUMBER_5;

pitch : CHAR_a
      | CHAR_b
      | CHAR_c
      | CHAR_d
      | CHAR_e
      | CHAR_f
      | CHAR_g
      | CHAR_h
      | CHAR_i
      | CHAR_j
      | CHAR_k
      | CHAR_l
      | CHAR_m
      | inclinatum
      ;

inclinatum : UPPERCASE_SHAPE ;

clef_symbol : CHAR_c
            | CHAR_f
            ;

clef_number : NUMBER_1
            | NUMBER_2
            | NUMBER_3
            | NUMBER_4
            | NUMBER_5
            ;

bar_number : NUMBER_1 //TODO ¿Qué significan estos números? ¿Sólo hasta el 6?
           | NUMBER_2
           | NUMBER_3
           | NUMBER_4
           | NUMBER_5
           | NUMBER_6
           ;

space : no_space  //TODO Hay que darle nombre a cada una de estas
       | no_space_coccecting
       | neumatic_cut
       ;

no_space : EXCLAMATION ;

no_space_coccecting : AT;

neumatic_cut: SLASH (SLASH | space_factor?); // drizo

space_factor : NUMBER_0
             | SQUARE_BRACKET_OPEN MINUS? factor_number SQUARE_BRACKET_CLOSE
             ;

factor_number : NUMBER_1
              | NUMBER_2
              | NUMBER_3
              | NUMBER_4
              | NUMBER_5
              | NUMBER_6
              ;

custos : CHAR_z NUMBER_0?;

brace : SQUARE_BRACKET_OPEN brace_position brace_shape COLON brace_attachment (SEMICOLON number_decimal CHAR_m CHAR_m)? brackets? SQUARE_BRACKET_CLOSE ;

brackets : BRACKET_OPEN
         | BRACKET_CLOSE
         ;

brace_position : CHAR_o
               | CHAR_u
               ;

brace_shape : CHAR_c CHAR_b CHAR_a?
            | CHAR_b
            ;

brace_attachment : NUMBER_0
                 | NUMBER_1
                 ;

number_decimal : number+ (DOT number+)? ;

number : NUMBER_0
       | NUMBER_1
       | NUMBER_2
       | NUMBER_3
       | NUMBER_4
       | NUMBER_5
       | NUMBER_6
       | NUMBER_7
       | NUMBER_8
       | NUMBER_9
       ;

lyric_symbols : OPEN_LYRIC lyric CLOSE_LYRIC ;

lyric : V_LYRIC
      | R_LYRIC
      | A_LYRIC
      | OE_LYRIC
      | AE_LYRIC
      ;

open_text_modifiers : OPEN_BOLD
                    | OPEN_ITALIC
                    | OPEN_COLOR
                    | OPEN_UNDERLINE
                    | OPEN_SMALL_CAPS
                    ;

close_text_modifiers : CLOSE_BOLD
                     | CLOSE_ITALIC
                     | CLOSE_COLOR
                     | CLOSE_UNDERLINE
                     | CLOSE_SMALL_CAPS
                     ;