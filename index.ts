import { Compilers, Compiler } from './core/compiler';

const onClick = (id, fun) => {
    document.getElementById(id).addEventListener('click', () => {
        fun(...fun.toString().split(/\(|\)/)[1].split(',').map(a => document.getElementById(a.trim())));
    });
}
onClick('build', (spec: HTMLTextAreaElement, spec_lang: HTMLSelectElement, gen: HTMLTextAreaElement, gen_lang: HTMLSelectElement, compiler: HTMLTextAreaElement, compiler_lang: HTMLSelectElement) => {
    console.log(`Generated compiler from ${spec_lang.value} to ${gen_lang.value} in ${compiler_lang.value}.`);
    compiler.innerText = new Compiler(spec.value, gen.value).Build();
})
onClick('download', (compiler: HTMLTextAreaElement) => {
    console.log(compiler.value);
})
onClick('compile', (source: HTMLTextAreaElement, destination: HTMLTextAreaElement) => {
    console.log(source.value);
})