import { ASTNode, RootNode } from './node';

export class Matcher {
    private grammas: ASTNode[]
    constructor(grammars: ASTNode[]) {
        this.grammas = grammars;
    }

    /**
     * Match
     */
    private Match(input: string) {
        return null;
    }

    public Parse(input: string): RootNode {
        let root: RootNode = {children: []};

        while(this.Match(input) != null) {

        }

        return root;
    }

    public Build(functionName: string): string {
        return `function ${functionName}(input) {
    return {value: input};
}`;
    }
}