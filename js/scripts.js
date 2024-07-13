var lightModeButton = document.getElementById("lightModeButton");
lightModeButton.addEventListener("click", lightMode);
function lightMode() {
    lightModeButton.id = "darkModeButton";
    lightModeButton.style.borderColor = "mediumblue";
    lightModeButton.style.backgroundColor = "black";
    document.getElementById("lightModeButtonText").innerText = "Dark Mode";
    document.getElementsByTagName("body").style.backgroundColor = "white";
    document.getElementsByClassName("pageLinks").style.backgroundColor = "mediumblue";
    document.getElementsByClassName("currentPageLink").style.backgroundColor = "white";
    document.getElementsByClassName("pageLinksText").style.backgroundColor = "white";
    document.getElementsByClassName("textContainer").style.backgroundColor = "white";
    document.getElementsByClassName("text").style.color = "black";
};
var darkModeButton = document.getElementById("darkModeButton");
lightModeButton.addEventListener("click", darkMode);
function darkMode() {
    darkModeButton.id = "lightModeButton";
    document.getElementById("lightModeButtonText").innerText = "Light Mode";
    document.getElementsByTagName("body").style.backgroundColor = "black";
    document.getElementsByClassName("pageLinks").style.backgroundColor = "lime";
    document.getElementsByClassName("currentPageLink").style.backgroundColor = "black";
    document.getElementsByClassName("pageLinksText").style.backgroundColor = "black";
    document.getElementsByClassName("textContainer").style.backgroundColor = "black";
    document.getElementsByClassName("text").style.color = "white";
};