"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matcher = void 0;
var Matcher = /** @class */ (function () {
    function Matcher(grammars) {
        this.grammas = grammars;
    }
    /**
     * Match
     */
    Matcher.prototype.Match = function (input) {
        return null;
    };
    Matcher.prototype.Parse = function (input) {
        var root = {};
        while (this.Match(input) != null) {
        }
        return root;
    };
    return Matcher;
}());
exports.Matcher = Matcher;
