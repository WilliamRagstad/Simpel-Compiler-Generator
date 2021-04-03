"use strict";
exports.__esModule = true;
exports.Compilers = exports.Compiler = void 0;
var SCGParser_1 = require("./SCGParser");
var Parser = /** @class */ (function () {
    function Parser() {
    }
    return Parser;
}());
var Generator = /** @class */ (function () {
    function Generator() {
    }
    return Generator;
}());
var Compiler = /** @class */ (function () {
    function Compiler(grammar, generatorRules) {
        this.parser = SCGParser_1.SCGParser.Grammar(grammar);
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
