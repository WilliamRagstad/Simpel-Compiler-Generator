import { Compilers, Compiler } from './core/compiler';

const onClick = (id: string, fun: Function) => {
    document.getElementById(id)?.addEventListener('click', () => {
        fun(...fun.toString().split(/\(|\)/)[1].split(',').map(a => document.getElementById(a.trim())));
    });
}
onClick('build', (spec: HTMLTextAreaElement, spec_lang: HTMLSelectElement, gen: HTMLTextAreaElement, gen_lang: HTMLSelectElement, compiler: HTMLTextAreaElement, compiler_lang: HTMLSelectElement) => {
    console.log(`Generated compiler from ${spec_lang.value} to ${gen_lang.value} in ${compiler_lang.value}.`);
    
    if (!(Compilers as any)[compiler_lang.value]) {
        alert("The selected language to generate the compiler in does not exist!");
        return;
    }
    compiler.innerText = (Compilers as any)[compiler_lang.value].Build(spec.value, gen.value);
})
onClick('download', (compiler: HTMLTextAreaElement) => {
    console.log(compiler.value);
})
onClick('compile', (source: HTMLTextAreaElement, destination: HTMLTextAreaElement) => {
    console.log(source.value);
})


/*
888888 88  88 888888 8b    d8 888888
  88   88  88 88__   88b  d88 88__
  88   888888 88""   88YbdP88 88""
  88   88  88 888888 88 YY 88 888888
*/

let themeBtn = document.getElementById("theme") as HTMLElement;

let ls = localStorage.getItem("dark");
let dark = ls == 'false';
applyTheme();

function setNight() {
    document.body.parentElement?.style.setProperty('filter', `invert(1) hue-rotate(180deg)`);
    themeBtn.innerText = "☀️";
    themeBtn.style.setProperty('color', "#5f5f00");
}

function setDay() {
    document.body.parentElement?.style.removeProperty('filter');
    themeBtn.innerText = "🌙";
    themeBtn.style.setProperty('color', "#976aef");
}

function applyTheme() {
    if (dark) setDay();
    else setNight();
    dark = !dark;
}

themeBtn.addEventListener("click", () => {
    applyTheme();
    localStorage.setItem("dark", dark.toString());
})