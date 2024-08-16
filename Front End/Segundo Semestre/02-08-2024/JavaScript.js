var menuHamburguesa = document.getElementById("menu");
var linksNavBar = document.getElementById("myLinksAnchor");

function interaccionNavBar(){
    if (menuHamburguesa.className === "hamburger-menu"){
        menuHamburguesa.className += " rotateHamb";
    } else {
        menuHamburguesa.className = "hamburger-menu";
    }
    if (linksNavBar.className == "displayAncNone"){
        linksNavBar.className = "displayAncBlock";
    } else {
        linksNavBar.className = "displayAncNone"
    }
}

menuHamburguesa.addEventListener("click", function() {
    interaccionNavBar();
});