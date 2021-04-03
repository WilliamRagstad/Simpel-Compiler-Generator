var themeBtn = document.getElementById("theme");
var moon = "🌙";
var moonCss = "#976aef";
var day = "☀️";
var dayCss = "#5f5f00";
themeBtn.innerText = moon;
themeBtn.style.setProperty('color', moonCss);
var dark = false;
var darkCss = "invert(1) hue-rotate(180deg)";
themeBtn.addEventListener("click", function () {
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
});
