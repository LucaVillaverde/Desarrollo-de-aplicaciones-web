// Ejercicio 1 Practico

let num=0;
for (let i = 0; i < 20; i++){
    let input = parseInt(prompt("Ingrese un numero"));
    if (input > num){
        num = input;
    }
}
alert("El numero mas grande es 2" + num);