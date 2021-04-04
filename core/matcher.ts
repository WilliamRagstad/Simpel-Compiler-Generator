import { ASTNode } from './node';

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

    public Parse(input: string): ASTNode {
        let root: ASTNode = {};

        while(this.Match(input) != null) {

        }

        return root;
    }
}