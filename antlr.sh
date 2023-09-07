rm -rf src/generated/antlr
java -jar ./antlr-4.13.0-complete.jar -listener ./antlr/agnostic.g4 -o src/generated/antlr -Dlanguage=TypeScript -Xexact-output-dir
java -jar ./antlr-4.13.0-complete.jar -visitor ./antlr/agnostic.g4 -o src/generated/antlr -Xexact-output-dir -Dlanguage=TypeScript
java -jar ./antlr-4.13.0-complete.jar -listener ./antlr/skm.g4 -o src/generated/antlr -Xexact-output-dir -Dlanguage=TypeScript
java -jar ./antlr-4.13.0-complete.jar ./antlr/gabc/gabc_lexer.g4 -o src/generated/antlr -Xexact-output-dir -Dlanguage=TypeScript
#java -jar ./antlr-4.13.0-complete.jar -listener ./antlr/gabc/gabc_grammar.g4 -o src/generated/antlr -Xexact-output-dir -Dlanguage=TypeScript
java -jar ./antlr-4.13.0-complete.jar -visitor ./antlr/gabc/gabc_grammar.g4 -o src/generated/antlr -Xexact-output-dir -Dlanguage=TypeScript
