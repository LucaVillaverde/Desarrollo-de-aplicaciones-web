const numeros = [];
let suma = 0, i = 0, cantImpares=0;

do {
    numeros [i] = parseInt(prompt("Ingrese numero"));
    numeros.push(numeros);    
    if (i % 2 == 1) {
        cantImpares += numeros [i];
    }
} while (numeros [i] != 0);

alert(cantImpares);