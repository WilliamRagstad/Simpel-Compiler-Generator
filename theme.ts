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