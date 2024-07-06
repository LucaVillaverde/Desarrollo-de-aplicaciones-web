function loading(){
    var loader = document.getElementById("contLoader");
    loader.classList.add("ocultar");
    console.log("función loading funciona bien.")
}

window.addEventListener("load", loading);