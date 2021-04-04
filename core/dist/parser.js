"use strict";
exports.__esModule = true;
exports.SCGParser = void 0;
var matcher_1 = require("./matcher");
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
    return SCGParser;
}());
exports.SCGParser = SCGParser;
