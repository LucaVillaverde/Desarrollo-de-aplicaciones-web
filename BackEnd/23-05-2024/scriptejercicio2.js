/* Lo mismo que en el ejercicio 1 pero con matrices */

let matriz=[
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
]

function sumarMatriz(matriz){
    let suma=0
    let col = matriz[0].length, row = matriz.length;
    for (let i=0; i < row; i++){
        for (let j=0; j < col; j++){
            suma+= matriz[i][j];
        }
    }
    return suma;
}

alert(sumarMatriz(matriz))