import { ASTNode } from './node';

export class Generator {
    private generatorFunction: (ast: ASTNode) => string
    constructor(fun: (ast: ASTNode) => string) {
        this.generatorFunction = fun;
    }

    public Build(functionName: string): string {
        return `function ${functionName}(ast) {
    return ${this.generatorFunction.toString()}
    // return ast.value;
}`;
    }
}