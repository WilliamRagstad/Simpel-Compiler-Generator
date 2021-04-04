"use strict";
var themeBtn = document.getElementById("theme");
var ls = localStorage.getItem("dark");
var dark = ls == 'false';
applyTheme();
function setNight() {
    var _a;
    (_a = document.body.parentElement) === null || _a === void 0 ? void 0 : _a.style.setProperty('filter', "invert(1) hue-rotate(180deg)");
    themeBtn.innerText = "☀️";
    themeBtn.style.setProperty('color', "#5f5f00");
}
function setDay() {
    var _a;
    (_a = document.body.parentElement) === null || _a === void 0 ? void 0 : _a.style.removeProperty('filter');
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
