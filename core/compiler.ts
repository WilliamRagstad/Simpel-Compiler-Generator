const peg = require('../lib/peg-0.10.0.min.js');

export const CompilerGenerators = {
    JavaScript: (grammar: string, codegen: string) => {
        let pegParser = peg.generate(grammar);
        let codegenName = codegen.split(/function|\(|\)/)[1]?.trim();
        return `
// Peg helper functions
const buildSyntaxErrorMessage = (expected, found) => "Expected " + expected.filter(v => v["description"] != '').map(v => v["description"]).join(" or ") + " but got " + JSON.stringify(found) + "!";
${pegParser.parse.toString()
    .replace(/peg\$parse/g,'parse')
    .replace(/peg\$SyntaxError/g,'SyntaxError')
    .replace(/SyntaxError\.buildMessage/g,'buildSyntaxErrorMessage')}
${codegen}
function main(input) {
    console.log('got "' + input + '"');
    let ast = parse(input);
    console.log('parsed', ast);
    return ${codegenName}(ast);
}`.trimStart();
    }
}