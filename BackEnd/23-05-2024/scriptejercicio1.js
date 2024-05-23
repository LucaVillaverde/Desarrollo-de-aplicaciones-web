/* Crear un script que implemente una funcion
llamada sumarArreglo que reciba como parametro
un arreglo y retore el resultado de la suma de los
valores almacenados */

let arreglo=[2, 4, 6];
let suma = 0;

function sumarArreglo(arreglo){
    let largo=arreglo.length;
    for (let i=0; i < largo; i++) {
        suma+= arreglo[i];
    }
    return suma;
}

alert(sumarArreglo(arreglo));