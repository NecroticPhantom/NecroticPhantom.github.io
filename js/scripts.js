function cookies() {
    window.alert("IMPORTANT:/n/nThis site uses necessary cookies to store data about preferences on the site.");
    document.cookie = "cookieAlert = True; expires = Mon, 31 Dec 2025 23:59:59 BWT; path=/";
    var customisingSiteNow = window.prompt("Would you like to customise the website now?");
    var customisingSiteNow = customisingSiteNow.toLowerCase();
    customiseSiteNow();
};
function customiseSiteNow() {
    if (customisingSiteNow == "no") {
        return;
    }
    else if (customisingSiteNow == "yes") {
        chooseColour();
        chooseMode();
    };
};
function chooseColour() {
    var chosenColour = window.prompt("Type the javascript colour you would like to be used in the colour scheme:");
    var chosenColour = chosenColour.toLowerCase();
    document.cookie = "chosenColour = ", chosenColour, "; expires = Mon, 31 Dec 2025 23:59:59 BWT; path=/";
    var pageLinkElements = document.getElementsByClassName("pageLinks");
    for (var i = 0; i < pageLinkElements.length; i++) {
        pageLinkElements[i].style.backgroundColor = chosenColour;
    };
};
function chooseMode() {
    var chosenMode = window.prompt("Would you like to use light mode or dark mode (Type: 'light' or 'dark')?");
    var chosenMode = chosenMode.toLowerCase();
    document.cookie = "chosenMode = ", chosenMode, "; expires = Mon, 31 Dec 2025 23:59:59 BWT; path=/";
    if (chosenMode == "light") {
        lightMode()
    }
    else if (chosenMode == "dark") {
        darkMode()
    };
};
function lightMode() {
    var bodyElements = document.getElementsByTagName("body");
    for (var i = 0; i < bodyElements.length; i++) {
        bodyElements[i].style.backgroundColor = "white";
    };
    var currentPageLinkElements = document.getElementsByClassName("currentPageLinks");
    for (var i = 0; i < currentPageLinkElements.length; i++) {
        currentPageLinkElements[i].style.backgroundColor = "black";
    };
    var pageLinkTextElements = document.getElementsByClassName("pageLinkTextElements");
    for (var i = 0; i < pageLinkTextElements.length; i++) {
        pageLinkTextElements[i].style.backgroundColor = "white";
    };
    var textContainerElements = document.getElementsByClassName("textContainer");
    for (var i = 0; i < textContainerElements.length; i++) {
        textContainerElements[i].style.backgroundColor = "white";
    };
    var textElements = document.getElementsByClassName("text");
    for (var i = 0; i < textElements.length; i++) {
        textElements[i].style.color = "black";
    };
};
function darkMode() {
    var bodyElements = document.getElementsByTagName("body");
    for (var i = 0; i < bodyElements.length; i++) {
        bodyElements[i].style.backgroundColor = "black";
    };
    var currentPageLinkElements = document.getElementsByClassName("currentPageLinks");
    for (var i = 0; i < currentPageLinkElements.length; i++) {
        currentPageLinkElements[i].style.backgroundColor = "white";
    };
    var pageLinkTextElements = document.getElementsByClassName("pageLinkTextElements");
    for (var i = 0; i < pageLinkTextElements.length; i++) {
        pageLinkTextElements[i].style.backgroundColor = "black";
    };
    var textContainerElements = document.getElementsByClassName("textContainer");
    for (var i = 0; i < textContainerElements.length; i++) {
        textContainerElements[i].style.backgroundColor = "black";
    };
    var textElements = document.getElementsByClassName("text");
    for (var i = 0; i < textElements.length; i++) {
        textElements[i].style.color = "white";
    };
};