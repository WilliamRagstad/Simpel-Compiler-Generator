import { CompilerGenerator } from './core/compiler';

const onClick = (id: string, fun: Function) => {
    document.getElementById(id)?.addEventListener('click', () => {
        fun(...fun.toString().split(/\(|\)/)[1].split(',').map(a => document.getElementById(a.trim())));
    });
}
onClick('build', (spec: HTMLTextAreaElement, spec_lang: HTMLSelectElement, gen: HTMLTextAreaElement, gen_lang: HTMLSelectElement, compiler: HTMLTextAreaElement) => {
    // console.log(`Generated compiler from ${spec_lang.value} to ${gen_lang.value}.`);
    compiler.value = CompilerGenerator.Build(spec.value, gen.value);
})
onClick('compile', (compiler: HTMLTextAreaElement, source: HTMLTextAreaElement, output: HTMLTextAreaElement, destination: HTMLTextAreaElement) => {
    
    hijackConsole(output);
    console.clear();
    try {
        const input = JSON.stringify(source.value);
        const result = eval(compiler.value + `main(${input});`);
        destination.value = result;
    }
    catch(e) {
        console.log(e);
    }
    restoreConsole();
})

function main(input: string): string { console.log("The compiler is missing a main function"); return ''; }

let clog = console.log;
let cclear = console.clear;
let cerror = console.error;
function hijackConsole(output: HTMLTextAreaElement) {
    console.clear = () => output.value = "";
    console.log = (...text: string[]) => output.value += text.map(v => typeof v == 'object' ? JSON.stringify(v) : v).join(' ') + '\n';
    console.error = console.log;
}

function restoreConsole() {
    console.log = clog;
    console.error = cerror;
    console.clear = cclear;
}


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
