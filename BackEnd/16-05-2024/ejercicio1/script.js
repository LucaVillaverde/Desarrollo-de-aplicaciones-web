const numeros = []; let suma=0;

for (let i = 0; i < 10; i++) {
    numeros [i] = parseInt(prompt("ingrese un numero"))
    numeros.push(numeros)
    if (i % 2 != 0) {
        suma += numeros[i];
    }
}
document.getElementById("texto").innerHTML = "El resultado es " + suma;
document.write("<p>" + suma +"</p>")
alert(suma)
console.log(suma)