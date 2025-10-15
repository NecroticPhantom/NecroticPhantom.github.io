window.addEventListener("load", () => {
  document.getElementById("homeLink").addEventListener("mouseover", pageLinkHover("homeLink"))
  document.getElementById("pathfindingLink").addEventListener("mouseout", pageLinkHover("pathfindingLink"))
  document.getElementById("testPageLink").addEventListener("mouseout", pageLinkHover("testPageLink"))
  document.getElementById("homeLink").addEventListener("mouseover", pageLinkStopHover("homeLink"))
  document.getElementById("pathfindingLink").addEventListener("mouseout", pageLinkStopHover("pathfindingLink"))
  document.getElementById("testPageLink").addEventListener("mouseout", pageLinkStopHover("testPageLink"))
});

function pageLinkHover(elementID) {
  document.getElementById(elementID).style.backgroundColor = "cornflowerblue";
}

function pageLinkStopHover(elementID) {
  if (elementID.classList.contains("currentPageLink") == false) {
    document.getElementById(elementID).style.backgroundColor = "blue";
  }
}