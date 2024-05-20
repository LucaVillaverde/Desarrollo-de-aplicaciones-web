let numero, sumaPares=0, cantidadPares=0, promedioPares;

for (let i=0; i < 20; i++) {
    numero = parseInt(prompt("Ingrese un numero"));
    if (numero % 2 == 0){
        cantidadPares += 1;
        sumaPares += numero;
    }
}
if (cantidadPares == 0){
    alert("No has ingresado numeros pares");
} else {
    promedioPares= sumaPares / cantidadPares;
    alert(promedioPares);
}

