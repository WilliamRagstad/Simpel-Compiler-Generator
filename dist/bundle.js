/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./core/compiler.ts":
/*!**************************!*\
  !*** ./core/compiler.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Compilers = exports.Compiler = void 0;\r\nvar parser_1 = __webpack_require__(/*! ./parser */ \"./core/parser.ts\");\r\nvar generator_1 = __webpack_require__(/*! ./generator */ \"./core/generator.ts\");\r\nvar Compiler = /** @class */ (function () {\r\n    function Compiler(generator) {\r\n        this.generator = generator;\r\n    }\r\n    /**\r\n     * Build\r\n     */\r\n    Compiler.prototype.Build = function (grammar, generatorRules) {\r\n        var matcher = parser_1.SCGParser.Grammar(grammar);\r\n        var generator = parser_1.SCGParser.Generator(generatorRules);\r\n        // return this.generator()\r\n        return (function main(input) {\r\n            var ast = matcher.Parse(input);\r\n            return generator.CodeGen(ast);\r\n        }).toString();\r\n    };\r\n    return Compiler;\r\n}());\r\nexports.Compiler = Compiler;\r\nexports.Compilers = {\r\n    TypeScript: new Compiler(new generator_1.Generator(function (input) { return \"Generated code\"; }))\r\n};\r\n\n\n//# sourceURL=webpack://scg/./core/compiler.ts?");

/***/ }),

/***/ "./core/generator.ts":
/*!***************************!*\
  !*** ./core/generator.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Generator = void 0;\r\nvar Generator = /** @class */ (function () {\r\n    function Generator(fun) {\r\n        this.generatorFunction = fun;\r\n    }\r\n    Generator.prototype.CodeGen = function (ast) {\r\n        return this.generatorFunction(ast);\r\n    };\r\n    return Generator;\r\n}());\r\nexports.Generator = Generator;\r\n\n\n//# sourceURL=webpack://scg/./core/generator.ts?");

/***/ }),

/***/ "./core/matcher.ts":
/*!*************************!*\
  !*** ./core/matcher.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Matcher = void 0;\r\nvar Matcher = /** @class */ (function () {\r\n    function Matcher(grammars) {\r\n        this.grammas = grammars;\r\n    }\r\n    /**\r\n     * Match\r\n     */\r\n    Matcher.prototype.Match = function (input) {\r\n        return null;\r\n    };\r\n    Matcher.prototype.Parse = function (input) {\r\n        var root = {};\r\n        while (this.Match(input) != null) {\r\n        }\r\n        return root;\r\n    };\r\n    return Matcher;\r\n}());\r\nexports.Matcher = Matcher;\r\n\n\n//# sourceURL=webpack://scg/./core/matcher.ts?");

/***/ }),

/***/ "./core/parser.ts":
/*!************************!*\
  !*** ./core/parser.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.SCGParser = void 0;\r\nvar matcher_1 = __webpack_require__(/*! ./matcher */ \"./core/matcher.ts\");\r\nvar generator_1 = __webpack_require__(/*! ./generator */ \"./core/generator.ts\");\r\nvar SCGParser = /** @class */ (function () {\r\n    function SCGParser() {\r\n    }\r\n    SCGParser.Grammar = function (grammar) {\r\n        var matches = [];\r\n        var ct = '';\r\n        var isExpr = true;\r\n        for (var i = 0; i < grammar.length; i++) {\r\n            var c = grammar[i];\r\n            ct += c;\r\n        }\r\n        return new matcher_1.Matcher(matches);\r\n    };\r\n    SCGParser.Generator = function (rules) {\r\n        return new generator_1.Generator(function (ast) { return \"\"; });\r\n    };\r\n    return SCGParser;\r\n}());\r\nexports.SCGParser = SCGParser;\r\n\n\n//# sourceURL=webpack://scg/./core/parser.ts?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar compiler_1 = __webpack_require__(/*! ./core/compiler */ \"./core/compiler.ts\");\r\nvar onClick = function (id, fun) {\r\n    var _a;\r\n    (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {\r\n        fun.apply(void 0, fun.toString().split(/\\(|\\)/)[1].split(',').map(function (a) { return document.getElementById(a.trim()); }));\r\n    });\r\n};\r\nonClick('build', function (spec, spec_lang, gen, gen_lang, compiler, compiler_lang) {\r\n    console.log(\"Generated compiler from \" + spec_lang.value + \" to \" + gen_lang.value + \" in \" + compiler_lang.value + \".\");\r\n    if (!compiler_1.Compilers[compiler_lang.value]) {\r\n        alert(\"The selected language to generate the compiler in does not exist!\");\r\n        return;\r\n    }\r\n    compiler.innerText = compiler_1.Compilers[compiler_lang.value].Build(spec.value, gen.value);\r\n});\r\nonClick('download', function (compiler) {\r\n    console.log(compiler.value);\r\n});\r\nonClick('compile', function (source, destination) {\r\n    console.log(source.value);\r\n});\r\n/*\r\n888888 88  88 888888 8b    d8 888888\r\n  88   88  88 88__   88b  d88 88__\r\n  88   888888 88\"\"   88YbdP88 88\"\"\r\n  88   88  88 888888 88 YY 88 888888\r\n*/\r\nvar themeBtn = document.getElementById(\"theme\");\r\nvar ls = localStorage.getItem(\"dark\");\r\nvar dark = ls == 'false';\r\napplyTheme();\r\nfunction setNight() {\r\n    var _a;\r\n    (_a = document.body.parentElement) === null || _a === void 0 ? void 0 : _a.style.setProperty('filter', \"invert(1) hue-rotate(180deg)\");\r\n    themeBtn.innerText = \"☀️\";\r\n    themeBtn.style.setProperty('color', \"#5f5f00\");\r\n}\r\nfunction setDay() {\r\n    var _a;\r\n    (_a = document.body.parentElement) === null || _a === void 0 ? void 0 : _a.style.removeProperty('filter');\r\n    themeBtn.innerText = \"🌙\";\r\n    themeBtn.style.setProperty('color', \"#976aef\");\r\n}\r\nfunction applyTheme() {\r\n    if (dark)\r\n        setDay();\r\n    else\r\n        setNight();\r\n    dark = !dark;\r\n}\r\nthemeBtn.addEventListener(\"click\", function () {\r\n    applyTheme();\r\n    localStorage.setItem(\"dark\", dark.toString());\r\n});\r\n\n\n//# sourceURL=webpack://scg/./index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;