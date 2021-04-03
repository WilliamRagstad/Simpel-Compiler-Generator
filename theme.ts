let themeBtn = document.getElementById("theme");
const moon = "🌙";
const moonCss = "#976aef";
const day = "☀️";
const dayCss = "#5f5f00";
themeBtn.innerText = moon;
themeBtn.style.setProperty('color', moonCss);
let dark = false;
const darkCss = `invert(1) hue-rotate(180deg)`;

themeBtn.addEventListener("click", () => {
    if (dark) {
        document.body.parentElement.style.removeProperty('filter');
        themeBtn.innerText = moon;
        themeBtn.style.setProperty('color', moonCss);
    }
    else {
        document.body.parentElement.style.setProperty('filter', darkCss);
        themeBtn.innerText = day;
        themeBtn.style.setProperty('color', dayCss);
    }
    dark = !dark;
})