rm -rf src/generated/antlr
java -jar ./antlr-4.13.0-complete.jar ./antlr/gabc/gabc_lexer.g4 -o src/generated/antlr -Xexact-output-dir -Dlanguage=TypeScript
java -jar ./antlr-4.13.0-complete.jar -visitor ./antlr/gabc/gabc_grammar.g4 -o src/generated/antlr -Xexact-output-dir -Dlanguage=TypeScript
