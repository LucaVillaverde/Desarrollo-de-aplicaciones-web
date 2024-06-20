/*const boton = document.getElementById("miBoton");
boton.addEventListener("click", function() {
    alert("Se hizo click en el boton!");
});

const caja = document.getElementById("caja");
//const body = document.getElementById("body");
caja.addEventListener("mouseover", function(){
    caja.style.backgroundColor = "red" ;
    alert("CUIDADO LA CAJA!!!!!!");
});

caja.addEventListener("mouseout", function(){
    caja.style.backgroundColor = "white";
    alert("A la proxima tene mas cuidado");
})

document.addEventListener("keydown", function(event){
    console.log("Tecla presionada: " + event.key);
});
*/

const mod1 = document.getElementById("mod1");
const mod2 = document.getElementById("mod2");
let texto = document.getElementsByClassName("textoOculto")

function header(){
    var boton = document.getElementsByClassName("botonFase1")
    if(boton.className === "botonFase1"){
        boton.className = "oculto";
    }else{
        boton.className = "botonFase1";
    }
}

