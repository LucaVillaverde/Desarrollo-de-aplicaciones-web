
/*
let estudiantes = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 23 },
    { nombre: "Pedro", edad: 21 }
]

console.log(estudiantes);
console.log(estudiantes[0]);
console.log("El nombre es " + estudiantes[0].nombre);
console.log("Y su edad es " + estudiantes[0].edad);

let numeros = [1, 2, 3, 4, 5];
let ultimoNumero = numeros.at(-1);
let primerNumero = numeros.at(4);

console.log(numeros);
console.log(primerNumero);
console.log(ultimoNumero);

let frutas = new Array("Manzana", "Banana", "Cereza");

console.log(frutas);

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

console.log(matriz);
console.log(matriz[2][0]);
console.log(matriz[1][2]);


for (let i = 0; i < estudiantes.length; i++) {
    console.log(estudiantes[i].nombre + " " + estudiantes[i].edad);
}
*/

let numeros = [1, 2, 3, 4, 5];
let numerosPares = [];
let numerosImpares = [];

numeros.forEach(num => {
    if ((num % 2) != 1) {
    numerosPares.push(num);
} else {
    numerosImpares.push(num);
}
})

console.log(numeros);
console.log(numerosPares);
console.log(numerosImpares);

let cuadrados = numeros.map(num => num * num);
console.log(cuadrados);

let edades = [15, 18, 21, 17, 25, 14, 30];
let mayoresDeEdad = edades.filter(edad => edad >= 18);
console.log(mayoresDeEdad); // [18, 21, 25, 30]

let factorial = numeros.reduce((acumulador, valorActual) => acumulador * valorActual, 1);
console.log(suma);