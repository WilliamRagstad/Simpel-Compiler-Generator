import { Matcher } from './matcher';

export class SCGParser {
    public static Grammar(grammar: string): Matcher {
        let matches: Node[] = [];

        let ct = '';
        let isExpr = true;

        for (let i = 0; i < grammar.length; i++) {
            const c = grammar[i];
            
            
            ct += c;
        }


        return new Matcher(matches);
    }
}