import { Matcher } from './matcher';
import { Generator } from './generator';
import { ASTNode } from './node';

export class SCGParser {
    public static Grammar(grammar: string): Matcher {
        let matches: ASTNode[] = [];

        let ct = '';
        let isExpr = true;

        for (let i = 0; i < grammar.length; i++) {
            const c = grammar[i];
            
            
            ct += c;
        }


        return new Matcher(matches);
    }

    public static Generator(rules: string): Generator {

        return new Generator(ast => "");
    }
}