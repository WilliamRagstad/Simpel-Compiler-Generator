import { SCGParser } from "./SCGParser";

class Parser {

}

class Generator {

}

export class Compiler {
    public Name: string;
    private parser: Parser;
    private generator: Generator;

    constructor(grammar: string, generatorRules: string) {
        this.parser = SCGParser.Grammar(grammar);
    }

    /**
     * Set name of compiler
     */
    public SetName(name: string): Compiler {
        this.Name = name;
        return this;
    }
    /**
     * Build
     */
    public Build() {
        return "Build";
    }
}

export const Compilers = {
    TypeScript: new Compiler(``, ``).SetName("TypeScript")
};