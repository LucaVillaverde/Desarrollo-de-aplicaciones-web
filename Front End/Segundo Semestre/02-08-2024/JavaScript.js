
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
//     const overPercentage = (height / containerHeight) * 100;
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


const loginButton = document.getElementById("logearme");
const registerButton = document.getElementById("registrarme");
const menuLogin = document.getElementById("menuLogin");
const menuRegister = document.getElementById("menuRegister");

function loginMenu(){
    if (menuLogin.className === "defaultL"){
        menuLogin.className = "showL";
    } else {
        menuLogin.className = "defaultL";
    }
}

function registerMenu(){
    if (menuRegister.className === "defaultR"){
        menuRegister.className = "showR";
    } else {
        menuRegister.className = "defaultR";
    }
}


loginButton.addEventListener("click", function(){
    loginMenu();
})

registerButton.addEventListener("click", function(){
    registerMenu();
})