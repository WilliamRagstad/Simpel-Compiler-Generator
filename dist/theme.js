var _a;
var themeBtn = document.getElementById("theme");
function setNight() {
    document.body.parentElement.style.setProperty('filter', "invert(1) hue-rotate(180deg)");
    themeBtn.innerText = "☀️";
    themeBtn.style.setProperty('color', "#5f5f00");
}
function setDay() {
    document.body.parentElement.style.removeProperty('filter');
    themeBtn.innerText = "🌙";
    themeBtn.style.setProperty('color', "#976aef");
}
function applyTheme() {
    if (dark)
        setDay();
    else
        setNight();
    dark = !dark;
}
themeBtn.addEventListener("click", function () {
    applyTheme();
    localStorage.setItem("dark", dark.toString());
});
var dark = ((_a = localStorage.getItem("dark")) !== null && _a !== void 0 ? _a : 'false') == 'false';
applyTheme();
