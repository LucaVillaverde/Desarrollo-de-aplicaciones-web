const numeros [];
let suma = 0, i = 0, cantImpares=0;

do {
    numeros [i] = parseInt(prompt("Ingrese numero"));
    if (i % 2 == 1) {
        suma += numeros [i];
    }
} while (numeros [i] != 0);

alert(suma);
