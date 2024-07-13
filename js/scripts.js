var lmb = document.getElementById("lightModeButton");
lmb.addEventListener("click", lightMode);
function lightMode() {
    lmb.id = "darkModeButton";
    lmb.style.borderColor = "mediumblue";
    lmb.style.backgroundColor = "black";
    document.getElementById("lightModeButtonText").innerText = "Dark Mode";
    document.getElementsByTagName("body").style.backgroundColor = "white";
    document.getElementsByClassName("pageLinks").style.backgroundColor = "mediumblue";
    document.getElementsByClassName("currentPageLink").style.backgroundColor = "white";
    document.getElementsByClassName("pageLinksText").style.backgroundColor = "white";
    document.getElementsByClassName("textContainer").style.backgroundColor = "white";
    document.getElementsByClassName("text").style.color = "black";
};
var dmb = document.getElementById("darkModeButton");
dmb.addEventListener("click", darkMode);
function darkMode() {
    dmb.id = "lightModeButton";
    dmb.style.borderColor = "lime";
    dmb.style.backgroundColor = "white";
    document.getElementById("lightModeButtonText").innerText = "Light Mode";
    document.getElementsByTagName("body").style.backgroundColor = "black";
    document.getElementsByClassName("pageLinks").style.backgroundColor = "lime";
    document.getElementsByClassName("currentPageLink").style.backgroundColor = "black";
    document.getElementsByClassName("pageLinksText").style.backgroundColor = "black";
    document.getElementsByClassName("textContainer").style.backgroundColor = "black";
    document.getElementsByClassName("text").style.color = "white";
};