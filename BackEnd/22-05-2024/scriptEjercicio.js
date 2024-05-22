let matriz1=[[]], matriz2=[[]], sumaMatrices=[[]];

function mostrarMenu(){
    let texto="Ingrese una opcion<br>1) ingresar matriz 1<br>2) Ingresar matriz 2<br>3) Sumar matrices<br>4) Listar Matrices<br>";
    document.getElementById("texto").innerHTML=texto;
}

function guardarDato(){
    let valor = document.getElementById("ingreso").value;
    return valor;
}

function ingresarMatriz(matriz){
    for(let i=0; i < 4; i++){
        for(let j=0; j < 4; j++){
            matriz[i][j] = parseInt(prompt("Ingrese un valor"))
        }
    }
}

function mostrarMatriz(matriz){
    let contenido="";
    for (let i=0; i < 4; i++){
        for(let j=0; j < 4; j++){
            contenido+=matriz[i][j]+" "
        }
        contenido+="<br>";
    }
    document.getElementById("resultado").innerHTML
}

function ingresoMenu(){
    document.getElementById("texto").innerHTML = document.getElementById("ingreso").value;
    switch(opcion){
        case "1":
            ingresarMatriz(matriz1);
            break;
        case "2":
            ingresarMatriz(matriz2);
            break;
        case "3":
            sumarMatrices(matriz1, matriz2);
            break;
        case "4":
            mostrarMatriz(matriz1);

            mostrarMatriz(matriz2);
            break;
        default:
            document.getElementById("resultado").innerHTML="La opcion es incorrecta";
            break;
    }
}

mostrarMenu();