let numero, multiplicacion = 1;
for (let i = 0; i < 10; i++) {
    numero = parseInt(prompt("Ingrese un numero para la multiplicacion"));
    multiplicacion *= numero;
}
alert("La multiplicacion de los diez numeros entre si da como resultado: " + multiplicacion);

let numero1, suma = 0;
for (let i = 0; i < 15; i++) {
    numero1 = parseInt(prompt("Ingrese un numero para la suma"));
    suma += numero1;
}
alert("La suma de los quince numeros entre si da como resultado: " + suma);

/* la variable "i" indicada dentro de los "for" es utilizada para indicar la cantidad de veces que se quiere
repetir algo.*/

/* En el primer let, se le indica con la "i" que se repita diez veces, mientras que en el segundo let solo se repite
quince veces.*/