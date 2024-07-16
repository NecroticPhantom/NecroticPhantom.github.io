function localStorage() { //add accept and decline (if decline: nothing, if accept: make a local storage for the accept and use getItem so no other local storage is used if declined)
    if (localstorage.getItem("localStorageAlert") === null) {
        window.alert("IMPORTANT:/n/nThis site uses local storage to store data about preferences on the site.");
        localstorage.localStorageAlert = True;
    };
    if (localstorage.getItem("siteCustomised") === null) {
        customiseSiteNow();
    }
    else {
        applyColour();
        applyMode();
    };
};
function customiseSiteNow() {
    var customiseSiteNowInput = False;
    while (!(customiseSiteNowInput)) {
        if (localstorage.getItem("siteCustomised") === null) {
            var customisingSiteNow = window.prompt("Would you like to customise the website now?/n(1/3)");
            var customisingSiteNow = customisingSiteNow.toLowerCase();
        };
        if (customisingSiteNow == "no") {
            customiseSiteNowInput = True;
            localstorage.siteCustomised = True;
            return;
        }
        else if (customisingSiteNow == "yes") {
            customiseSiteNowInput = True;
        }
        else {
            window.alert("INVALID INPUT");
        };
    };
    if (customisingSiteNow == "yes") {
        localstorage.siteCustomised = True;
        chooseColour();
        chooseMode();
    };
};
function chooseColour() {
    var chooseColourInput = False;
    while (!(chooseColourInput)) {
        if (!localstorage.getItem("chosenColour") === null) {
            var chosenColour = window.prompt("Type the javascript colour you would like to be used in the colour scheme (invalid colour will result in default colour):/n(2/3)");
        };
        if (chosenColourTest == True) {
            chooseColourInput = True;
            var chosenColour = chosenColour.toLowerCase();
        }
        else {
            window.alert("INVALID COLOUR");
        };
    };
    localstorage.chosenColour = chosenColour;
    applyColour();
};
function isValidColor(colourStr) {
    var colourTest = new Option().style;
    colourTest.color = colourStr;
    return colourTest.color == colourStr.toLowerCase();
};
function applyColour() {
    if (localstorage.getItem("chosenColour") !== null) {
        var pageLinkElements = document.getElementsByClassName("pageLinks");
        for (var i = 0; i < pageLinkElements.length; i++) {
            pageLinkElements[i].style.backgroundColor = localstorage.chosenColour;
        };
    };
};
function chooseMode() {
    var chooseModeInput = False
    while (!(chooseModeInput)) {
        if (localstorage.getItem("chosenMode") === null) {
            var chosenMode = window.prompt("Would you like to use light mode or dark mode (Type: 'light' or 'dark')?/n(3/3)");
            var chosenMode = chosenMode.toLowerCase();
        };
        if (chosenMode == "light" || chosenMode == "light mode" || chosenMode == "dark" || chosenMode == "dark mode") {
            chooseModeInput = True;
        }
        else {
            window.alert("INVALID MODE");
        };
    };
    localstorage.chosenMode = chosenMode;
    applyMode();
};
function applyMode() {
    if (localstorage.getItem("chosenColour") !== null) {
        if (localstorage.chosenMode == "light") {
            lightMode();
        }
        else if (localstorage.chosenMode == "dark") {
            darkMode();
        };
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