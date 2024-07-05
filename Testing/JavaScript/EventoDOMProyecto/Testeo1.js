const btton1 = document.getElementById("1em");
const btton2 = document.getElementById("2em");

btton1.addEventListener("click", unoEm);
btton2.addEventListener("click", dosEm);

function unoEm(){
    let texto = document.getElementsByClassName("texto1em");
    if(texto.classname === "texto2em"){
        window.alert("se llama adecuadamente(unoEm)")
        texto.classname = "texto1em";
    }
}

function dosEm(){
    let texto = document.getElementsByClassName("texto2em");

    
    if(texto.classname === "texto1em"){
        window.alert("Se llama adecuadamente(dosEm)");
        texto.classname = "texto2em";
    }
}
