"use strict";
exports.__esModule = true;
exports.Compilers = exports.Compiler = void 0;
var parser_1 = require("./parser");
var Compiler = /** @class */ (function () {
    function Compiler(grammar, generatorRules) {
        this.matcher = parser_1.SCGParser.Grammar(grammar);
    }
    /**
     * Set name of compiler
     */
    Compiler.prototype.SetName = function (name) {
        this.Name = name;
        return this;
    };
    /**
     * Build
     */
    Compiler.prototype.Build = function () {
        return "Build";
    };
    return Compiler;
}());
exports.Compiler = Compiler;
exports.Compilers = {
    TypeScript: new Compiler("", "").SetName("TypeScript")
};
