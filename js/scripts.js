document.getElementByClass("pageLinks").onmouseover = function() {pageLinkHover()};
document.getElementByClass("pageLinks").onmouseout = function() {pageLinkStopHover()};

function pageLinkHover() {
  document.getElementByClass("pageLinks").style.backgroundColor = "cornflowerblue";
}

function pageLinkStopHover() {
  document.getElementById("pageLinks").style.backgroundColor = "blue";
}