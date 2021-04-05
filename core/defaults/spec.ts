export const DefaultSpecs = {
    JavaScript: `
// JavaScript PEG grammar

`.trimStart(),
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
`.trimStart(),

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
`.trimStart()
}