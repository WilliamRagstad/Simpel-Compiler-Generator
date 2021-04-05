import { CompilerGenerators } from './core/compiler';
import { DefaultSpec } from './core/defaults/spec';

const onAction = (action: string, id: string, fun: Function) => {
    document.getElementById(id)?.addEventListener(action, () => {
        fun(...fun.toString().split(/\(|\)/)[1].split(',').map(a => document.getElementById(a.trim())));
    });
}

const onClick = (id: string, fun: Function) => onAction('click', id, fun);
const onChange = (id: string, fun: Function) => onAction('change', id, fun);

onClick('build', (spec: HTMLTextAreaElement, spec_lang: HTMLSelectElement, gen: HTMLTextAreaElement, gen_lang: HTMLSelectElement, compiler: HTMLTextAreaElement) => {
    // console.log(`Generated compiler from ${spec_lang.value} to ${gen_lang.value}.`);
    compiler.value = CompilerGenerators.JavaScript(spec.value, gen.value);
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
        console.log(e.message);
    }
    restoreConsole();
})

onChange('spec_lang', (spec: HTMLTextAreaElement, spec_lang: HTMLSelectElement) => {
    if ((DefaultSpec as any)[spec_lang.value] && (spec.value == '' || confirm("Do you want to override your syntax grammar specification?"))) spec.value = (DefaultSpec as any)[spec_lang.value];
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
