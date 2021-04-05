import { Matcher } from './matcher';
import { Generator } from './generator';
import { ASTNode } from './node';

export class SCGParser {
    private static whitespace = (c: string) => [' ', '\t', '\n'].includes(c);
    private static letter = (c: string) => /[a-z]/i.test(c);

    public static Grammar(grammar: string): Matcher {
        let matches: ASTNode[] = [];

        let ct = '';
        let i = 0;

        while(i < grammar.length) {
            const p = (offset: number = 0) => grammar[i + offset];
            const c = () => grammar[i++];
            const getWhile = (cond: (c: string) => boolean) => { while(cond(p())) ct += c(); }
            
            if (this.whitespace(p())) {c(); continue;}
            else if (this.letter(p())) {
                getWhile(this.letter);
                if (p() == ':') {
                    let exprName = ct;
                    ct = '';
                    
                }
            }
            else throw `Unexpected token '${c}'`;
            ct += c();
        }

        console.table(matches);
        return new Matcher(matches);
    }

    public static Generator(rules: string): Generator {

        return new Generator(ast => "");
    }
}