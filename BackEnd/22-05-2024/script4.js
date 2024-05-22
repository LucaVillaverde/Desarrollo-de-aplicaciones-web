function mostrarArreglo(arreglo){
    let largo=arreglo.length;
    for (let i=0; i < largo; i++){
        document.write(arreglo[i]);
        document.write("<br>")
    }
}

let arreglo=["Uno", "Dos", "Tres", "Cuatro"];
/*arreglo.sort();*/
mostrarArreglo(arreglo);
document.write("<br>");
mostrarArreglo(arreglo.sort());
document.write("<br>");
mostrarArreglo(arreglo.reverse);
document.write("<br>");
mostrarArreglo(arreglo);


function mostrarMatriz(matriz){
    let cantFilas=3, cantColumnas=3;
    for (let i=0; i < cantFilas; i++){
        for (let j=0; j < cantColumnas; j++){
            document.write(matriz[i][j]+"");
        }
        document.write("<br>");
    }
}

let matriz=[ 
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

mostrarMatriz(matriz);