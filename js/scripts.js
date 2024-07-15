function chooseColour() {
    var chosenColour = window.prompt("Type the javascript colour you would like to be used in the colour scheme:");
    var chosenColour = chosenColour.toLowerCase();
    var pageLinkElements = document.getElementsByClassName("pageLinks");
    for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = chosenColour;
    };
};
function chooseMode() {
    var chosenMode = window.prompt("Would you like to use light mode or dark mode (Type: 'light' or 'dark')?");
    var chosenMode = chosenMode.toLowerCase();
    if (chosenMode == "light") {
        lightMode()
    }
    else if (chosenMode == "dark") {
        darkMode()
    };
};
/*function lightMode() {
    document.getElementsByTagName("body").style.backgroundColor = "white";
    document.getElementsByClassName("pageLinks").style.backgroundColor = "mediumblue";
    document.getElementsByClassName("currentPageLink").style.backgroundColor = "white";
    document.getElementsByClassName("pageLinksText").style.backgroundColor = "white";
    document.getElementsByClassName("textContainer").style.backgroundColor = "white";
    document.getElementsByClassName("text").style.color = "black";
}; */
/*function darkMode() {
    document.getElementsByTagName("body").style.backgroundColor = "black";
    document.getElementsByClassName("pageLinks").style.backgroundColor = "lime";
    document.getElementsByClassName("currentPageLink").style.backgroundColor = "black";
    document.getElementsByClassName("pageLinksText").style.backgroundColor = "black";
    document.getElementsByClassName("textContainer").style.backgroundColor = "black";
    document.getElementsByClassName("text").style.color = "white";
}; */