var lightModeButton = document.getElementById("lightModeButton");
lightModeButton.addEventListener("click", lightMode);
function lightMode() {
    const body = document.getElementsByTagName("body");
    body.style.backgroundColor = "white";
    const pageLinks = document.getElementsByClassName("pageLinks");
    pageLinks.style.backgroundColor = "mediumblue";
    const currentPageLink = document.getElementsByClassName("currentPageLink");
    currentPageLink.style.backgroundColor = "white";
    const pageLinksText = document.getElementsByClassName("pageLinksText");
    pageLinksText.style.backgroundColor = "white";
    const textContainer = document.getElementsByClassName("textContainer");
    textContainer.style.backgroundColor = "white";
    const text = document.getElementsByClassName("text");
    text.style.color = "black";
};
var darkModeButton = document.getElementById("darkModeButton");
lightModeButton.addEventListener("click", darkMode);
function darkMode() {
    const body = document.getElementsByTagName("body");
    body.style.backgroundColor = "black";
    const pageLinks = document.getElementsByClassName("pageLinks");
    pageLinks.style.backgroundColor = "lime";
    const currentPageLink = document.getElementsByClassName("currentPageLink");
    currentPageLink.style.backgroundColor = "black";
    const pageLinksText = document.getElementsByClassName("pageLinksText");
    pageLinksText.style.backgroundColor = "black";
    const textContainer = document.getElementsByClassName("textContainer");
    textContainer.style.backgroundColor = "black";
    const text = document.getElementsByClassName("text");
    text.style.color = "white";
};