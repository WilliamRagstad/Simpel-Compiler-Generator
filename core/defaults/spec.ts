export const DefaultSpecs = {
    Reverse: `
start = (.*)
`,
    JavaScript: `
// JavaScript PEG grammar
{
    function makeInteger(o) {
        return parseInt(o.join(""), 10);
    }
}

start
    = integer

integer "integer"
    = digits:[0-9]+ { return makeInteger(digits); }

`,
    Integer: `
// Single integer parser
start "integer" = digits: [0-9]+ {
    return parseInt(digits.join(''));
}
`,
    Float: `
// Single float parser
start "float" = left: integer "." right: integer {
    return parseFloat(left + "." + right);
}

integer "integer" = digits: ([0-9]+) {
    return digits.join('');
}
`,
    MathEval: `
// Math PEG Grammar
{
    function makeInteger(o) {
        return parseInt(o.join(""), 10);
    }
}

start
    = additive

additive
    = left:multiplicative "+" right:additive { return left + right; }
    / multiplicative

multiplicative
    = left:primary "*" right:multiplicative { return left * right; }
    / primary

primary
    = integer
    / "(" additive:additive ")" { return additive; }

integer "integer"
    = digits:[0-9]+ { return makeInteger(digits); }
`,

/*
    * MathEval
    * ========
    * 
    * Examples:
    * 
    *   - (123+321)*2+(11*10)+2 = 1000
*/

    MathAST: `
// Math PEG Grammar
{
    function makeInteger(o) {
        return parseInt(o.join(""), 10);
    }
}

start
    = additive

additive
    = left:multiplicative "+" right:additive { return {op: 'add', left: left, right: right}; }
    / multiplicative

multiplicative
    = left:primary "*" right:multiplicative { return {op: 'mul', left: left, right: right}; }
    / primary

primary
    = integer
    / "(" additive:additive ")" { return additive; }

integer "integer"
    = digits:[0-9]+ { return {num: makeInteger(digits) }; }
`
}