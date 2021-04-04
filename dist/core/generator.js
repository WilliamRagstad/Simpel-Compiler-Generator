"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Generator = void 0;
var Generator = /** @class */ (function () {
    function Generator(fun) {
        this.generatorFunction = fun;
    }
    Generator.prototype.CodeGen = function (ast) {
        return this.generatorFunction(ast);
    };
    return Generator;
}());
exports.Generator = Generator;
