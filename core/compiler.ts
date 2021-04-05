import { SCGParser } from './parser';
import { Generator } from './generator';

const peg = require('../lib/peg-0.10.0.min.js');

export const CompilerGenerators = {
    JavaScript: (grammar: string, codegenRules: string) => {
        let pegParser = peg.generate(grammar);
        let codegen = SCGParser.Generator(codegenRules);
        return `
// Peg helper functions
const buildSyntaxErrorMessage = (expected, found) => "Expected " + JSON.stringify(expected) + " but got " + JSON.stringify(found) + "!";
${pegParser.parse.toString()
    .replace(/peg\$parse/g,'parse')
    .replace(/peg\$SyntaxError/g,'SyntaxError')
    .replace(/SyntaxError\.buildMessage/g,'buildSyntaxErrorMessage')}
${codegen.Build('codegen')}
function main(input) {
    console.log('got "' + input + '"');
    let ast = parse(input);
    console.log('parsed', ast);
    return codegen(ast);
}`.trimStart();
    }
}