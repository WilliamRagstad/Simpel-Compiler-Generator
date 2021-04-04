import { SCGParser } from './parser';
import { Matcher } from './matcher';
import { Generator } from './generator';

type Builder = (m: Matcher, g: Generator) => string;
class Compiler {
    private builder: Builder;

    constructor(builder: Builder) {
        this.builder = builder;
    }
    /**
     * Build
     */
    public Build(grammar: string, generatorRules: string) {
        let matcher: Matcher = SCGParser.Grammar(grammar);
        let generator: Generator = SCGParser.Generator(generatorRules);

        return this.builder(matcher, generator);
        return (function main(input: string) {
            console.log("got:", JSON.stringify(input.split(' ')));
            return `Compiled Code from '${input}'`;
            // let ast = matcher.Parse(input);
            // console.log("Parsed AST: ", ast);
            // return generator.CodeGen(ast);
        }).toString();
    }
}

export const CompilerGenerator = new Compiler((m: Matcher, g: Generator) => {
    return `
${m.Build('parse')}
${g.Build('codegen')}
function main(input) {
    let ast = parse(input);
    return codegen(ast);
}`;
});