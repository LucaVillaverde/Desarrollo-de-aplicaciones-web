let numero, sumaPares=0, cantidadPares=0, promedioPares, cantidadImpares=0, sumaImpares=0, promedioImpares;

for (let i=0; i < 20; i++) {
    numero = parseInt(prompt("Ingrese un numero (Par o impar, no importa)."));
    if (numero % 2 == 0){
        cantidadPares += 1;
        sumaPares += numero;
    } else {
        cantidadImpares += 1;
        sumaImpares += numero;
    }
}
if (cantidadPares == 0){
    alert("No has ingresado numeros pares");
} else {
    promedioPares= sumaPares / cantidadPares;
    alert("El promedio de los pares es "+ promedioPares);
}

if (cantidadImpares == 0) {
    alert("No has ingresado ningun numero impar");
} else {
    promedioImpares= sumaImpares / cantidadImpares;
    alert("El promedio de los impares es "+ promedioImpares);
}
