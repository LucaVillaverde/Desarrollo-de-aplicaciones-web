
function borrarTodo(){
    let x = parseFloat(document.getElementById("display").value);
    if (x != 0) {
        document.getElementById("display").value = "0";
    }
}

function borrarUno(){
    document.getElementById("display").length - 1;
}

function ingresarNumero(n){
    if (document.getElementById("display").value == 0){
        document.getElementById("display").value = n;
    } else {
        document.getElementById("display").value += n;
    }
}