"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SCGParser = void 0;
var matcher_1 = require("./matcher");
var generator_1 = require("./generator");
var SCGParser = /** @class */ (function () {
    function SCGParser() {
    }
    SCGParser.Grammar = function (grammar) {
        var matches = [];
        var ct = '';
        var isExpr = true;
        for (var i = 0; i < grammar.length; i++) {
            var c = grammar[i];
            ct += c;
        }
        return new matcher_1.Matcher(matches);
    };
    SCGParser.Generator = function (rules) {
        return new generator_1.Generator(function (ast) { return ""; });
    };
    return SCGParser;
}());
exports.SCGParser = SCGParser;
