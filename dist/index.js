"use strict";
exports.__esModule = true;
var compiler_1 = require("./core/compiler");
var onClick = function (id, fun) {
    document.getElementById(id).addEventListener('click', function () {
        fun.apply(void 0, fun.toString().split(/\(|\)/)[1].split(',').map(function (a) { return document.getElementById(a.trim()); }));
    });
};
onClick('build', function (spec, spec_lang, gen, gen_lang, compiler, compiler_lang) {
    console.log("Generated compiler from " + spec_lang.value + " to " + gen_lang.value + " in " + compiler_lang.value + ".");
    compiler.innerText = new compiler_1.Compiler(spec.value, gen.value).Build();
});
onClick('download', function (compiler) {
    console.log(compiler.value);
});
onClick('compile', function (source, destination) {
    console.log(source.value);
});
