if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {
    setInterval(petla, 900);
}

var x = 0;

var titleText = ["hook  ", "ook   ", "ok    ", "      t", "     tr", "   trip", "  tripp", " trippy", "trippyho", "trippyhook", "trippyhook", "ippyhook", "ppyhook", "pyhook", "yhook"];

function petla() {
    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];
}