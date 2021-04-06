import { CompilerGenerators } from './core/compiler';
import { DefaultSpecs } from './core/defaults/spec';
import { DefaultCodeGenerators } from './core/defaults/codegen';

const onAction = (action: string, id: string, fun: Function) => {
    document.getElementById(id)?.addEventListener(action, () => {
        fun(...fun.toString().split(/\(|\)/)[1].split(',').map(a => document.getElementById(a.trim())));
    });
}

const onClick = (id: string, fun: Function) => onAction('click', id, fun);
const onChange = (id: string, fun: Function) => onAction('change', id, fun);

let mainName = 'compile';
onClick('build', (spec: HTMLTextAreaElement, gen: HTMLTextAreaElement, compiler: HTMLTextAreaElement, output: HTMLTextAreaElement) => {
    compiler.value = '';
    if (gen.value == '') mainName = 'interpret'; // Interpreter
    else mainName = 'compile' // Compiler

    hijackConsole(output);
    console.clear();
    try {
       compiler.value = CompilerGenerators.JavaScript(spec.value, gen.value, mainName);
    }
    catch(e) {
        console.log(e.message);
    }
    restoreConsole();
})
onClick('compile', (compiler: HTMLTextAreaElement, source: HTMLTextAreaElement, output: HTMLTextAreaElement, destination: HTMLTextAreaElement) => {
    destination.value = '';
    hijackConsole(output);
    console.clear();
    try {
        const input = JSON.stringify(source.value);
        const result = eval(compiler.value + `${mainName}(${input});`) ?? '';
        destination.value = result;
    }
    catch(e) {
        console.log(e.message);
    }
    restoreConsole();
})

onClick('execute', (output: HTMLTextAreaElement, destination: HTMLTextAreaElement) => {
    hijackConsole(output);
    console.clear();
    try {
        eval(destination.value);
    }
    catch(e) {
        console.log(e.message);
    }
    restoreConsole();
})

onClick('layout-reset', () => {
    let elements = document.getElementsByTagName("textarea");
    for (let i = 0; i < elements.length; i++) {
        // console.log(elements[i]);
        elements[i].style.removeProperty('margin');
        elements[i].style.removeProperty('width');
        elements[i].style.removeProperty('height');
    }
})

onClick('layout-save', () => {
    let elements = document.getElementsByTagName("textarea");
    let cache = [];
    for (let i = 0; i < elements.length; i++) {
        // console.log(elements[i]);
        cache.push({
            width: elements[i].style.getPropertyValue('width'),
            height: elements[i].style.getPropertyValue('height')
        })
    }
    localStorage.setItem('layout', JSON.stringify(cache));
})

onClick('layout-load', () => {
    let elements = document.getElementsByTagName("textarea");
    let cache = JSON.parse(localStorage.getItem('layout') ?? '[]');
    if (!cache) return;
    for (let i = 0; i < elements.length; i++) {
        if (cache[i]) {
            elements[i].style.setProperty('width', cache[i].width);
            elements[i].style.setProperty('height', cache[i].height);
        }
    }
})

onChange('template', (spec: HTMLTextAreaElement, gen: HTMLTextAreaElement, template: HTMLSelectElement) => {
    if ((DefaultSpecs as any)[template.value] && (spec.value == '' || confirm("Do you want to override your syntax grammar specification?"))) spec.value = (DefaultSpecs as any)[template.value].trim();
    if ((DefaultCodeGenerators as any)[template.value] && (gen.value == '' || confirm("Do you want to override your code generator?"))) gen.value = (DefaultCodeGenerators as any)[template.value].trim();
    else if (gen.value == '' || confirm("Do you want to clear your code generator?")) gen.value = '';
})

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
    document.body.parentElement?.classList.add('dark');
    themeBtn.innerText = "☀️";
}

function setDay() {
    document.body.parentElement?.classList.remove('dark');
    themeBtn.innerText = "🌙";
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
