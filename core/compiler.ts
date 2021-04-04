import { SCGParser } from "./parser";
import { Matcher } from './matcher';


export class Compiler {
    public Name: string;
    private matcher: Matcher;
    private generator: Generator;

    constructor(grammar: string, generatorRules: string) {
        this.matcher = SCGParser.Grammar(grammar);
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