// var menuHamburguesa = document.getElementById("menu");
// var linksNavBar = document.getElementById("myLinksAnchor");

// function interaccionNavBar(){
//     if (menuHamburguesa.className === "hamburger-menu"){
//         menuHamburguesa.className += " rotateHamb";
//     } else {
//         menuHamburguesa.className = "hamburger-menu";
//     }
//     if (linksNavBar.className == "displayAncNone"){
//         linksNavBar.className = "displayAncBlock";
//     } else {
//         linksNavBar.className = "displayAncNone"
//     }
// }

// menuHamburguesa.addEventListener("click", function() {
//     interaccionNavBar();
// });

// function desplegar(){
//     let height = Porcentaje();
//     if(height === 0){
//         document.getElementById("navigation").style.height = "100%";
//     } else if (height === 100){
//         document.getElementById("navigation").style.height = "0%";
//     }
// }

// // Funcion para obtener el "porcentaje" del elemento OVERLAY
// function Porcentaje() {
//     // Obtener tamaño
//     const height = document.getElementById("navigation").offsetHeight;
//     // Cont padre
//     const containerHeight = document.body.offsetHeight;
//     // calcular porcentaje
//     const overPercentage = (height /containerHeight) * 100;
//     return overPercentage;
// }

const buttonMenu = document.getElementById("navigationButtonContainer");
const menuNav = document.getElementById("navigation");

function menu(){
    if (menuNav.className === "default"){
        menuNav.className += " show";
        buttonMenu.className = "navigationButton1";
    } else {
        menuNav.className = "default";
        buttonMenu.className = "none";
    }
}

buttonMenu.addEventListener("click", function(){
    menu();
})