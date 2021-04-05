export const DefaultCodeGenerators = {
    Template: `
function codegen(ast) {
    return "Code generator is not implemented.";
}`.trimStart(),
    MathAST: `
// Convert math expressions to JS expressions
function codegen(ast) {
    return 'console.log(' + traverse(ast) + ');';
}

function traverse(ast) {
    if (ast.num) return ast.num.toString();
    if (ast.op) {
        switch(ast.op) {
                case 'add': return traverse(ast.left) + ' + ' + traverse(ast.right);
                case 'mul':
                    let left = traverse(ast.left);
                    if (ast.left.op && ast.left.op == 'add') left = '(' + left + ')';
                    let right = traverse(ast.right);
                    if (ast.right.op && ast.right.op == 'add') right = '(' + right + ')';
                    return left + ' * ' + right;
        }
        throw "Unknown operation '" + ast.op + "'";
    }
}
`.trimStart()
}