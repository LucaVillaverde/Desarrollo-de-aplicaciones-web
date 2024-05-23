/* Crear un script que implemente
funcion llamada "existeElemento" que
reciba un arreglo y un numero, debe
retornar "true" si el elemento
existe en el array, y "false" en el caso
de que no */

let arreglo = [2, 4, 6, 8]
let numero = parseInt(prompt("Ingrese un numero del 1 al 10"))

function existeElemento(arreglo, numero){
    return arreglo.includes(numero);
}
alert(existeElemento(arreglo, numero))