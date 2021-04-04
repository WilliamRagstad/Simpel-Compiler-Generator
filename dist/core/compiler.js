"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compilers = exports.Compiler = void 0;
var parser_1 = require("./parser");
var generator_1 = require("./generator");
var Compiler = /** @class */ (function () {
    function Compiler(generator) {
        this.generator = generator;
    }
    /**
     * Build
     */
    Compiler.prototype.Build = function (grammar, generatorRules) {
        var matcher = parser_1.SCGParser.Grammar(grammar);
        var generator = parser_1.SCGParser.Generator(generatorRules);
        // return this.generator()
        return (function main(input) {
            var ast = matcher.Parse(input);
            return generator.CodeGen(ast);
        }).toString();
    };
    return Compiler;
}());
exports.Compiler = Compiler;
exports.Compilers = {
    TypeScript: new Compiler(new generator_1.Generator(function (input) { return "Generated code"; }))
};
