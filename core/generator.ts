import { ASTNode } from './node';

export class Generator {
    private generatorFunction: (ast: ASTNode) => string
    constructor(fun: (ast: ASTNode) => string) {
        this.generatorFunction = fun;
    }

    public CodeGen(ast: ASTNode): string {
        return this.generatorFunction(ast);
    }
}