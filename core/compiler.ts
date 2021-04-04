import { SCGParser } from './parser';
import { Matcher } from './matcher';
import { Generator } from './generator';


export class Compiler {
    private generator: Generator;

    constructor(generator: Generator) {
        this.generator = generator;
    }
    /**
     * Build
     */
    public Build(grammar: string, generatorRules: string) {
        let matcher = SCGParser.Grammar(grammar);
        let generator = SCGParser.Generator(generatorRules);

        // return this.generator()
        return (function main(input: string) {
            let ast = matcher.Parse(input);
            return generator.CodeGen(ast);
        }).toString();
    }
}

export const Compilers = {
    TypeScript: new Compiler(new Generator(input => "Generated code"))
};