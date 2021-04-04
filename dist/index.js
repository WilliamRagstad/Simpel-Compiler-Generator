"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var compiler_1 = require("./core/compiler");
var onClick = function (id, fun) {
    var _a;
    (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        fun.apply(void 0, fun.toString().split(/\(|\)/)[1].split(',').map(function (a) { return document.getElementById(a.trim()); }));
    });
};
onClick('build', function (spec, spec_lang, gen, gen_lang, compiler, compiler_lang) {
    console.log("Generated compiler from " + spec_lang.value + " to " + gen_lang.value + " in " + compiler_lang.value + ".");
    if (!compiler_1.Compilers[compiler_lang.value]) {
        alert("The selected language to generate the compiler in does not exist!");
        return;
    }
    compiler.innerText = compiler_1.Compilers[compiler_lang.value].Build(spec.value, gen.value);
});
onClick('download', function (compiler) {
    console.log(compiler.value);
});
onClick('compile', function (source, destination) {
    console.log(source.value);
});
