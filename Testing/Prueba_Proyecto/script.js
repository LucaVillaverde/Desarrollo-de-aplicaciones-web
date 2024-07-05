function tablet(){
    var h = window.matchMedia("(min-width: 768px)");
    if (h.matches){
        console.log("Modo Tablet >:D");
        document.getElementById("myLinksAnchor").className = "myLinks";
    }
}

tablet();

function menu(){
    girar();
    myLinks();
    anchors();
}

function girar(){
    var menu = document.getElementById("menu");
    if (menu.className === "hamburger-menu") {
        menu.className += " menu-rotate";
    } else {
        menu.className = "hamburger-menu";
    }
}

function myLinks() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function anchors(){
    var f = document.getElementById("myLinksAnchor");
    if (f.className === "display") {
        f.className += " myLinks";
    } else {
        f.className = "display";
    }
}