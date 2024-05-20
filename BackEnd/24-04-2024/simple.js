let num1, num2, num3, num4, num5, suma, sumaMensaje;
num1 = parseInt(prompt("Favor de ingresar primer numero"));
num2 = parseInt(prompt("Favor de ingresar segundo numero"));
num3 = parseInt(prompt("Favor de ingresar tercer numero"));
num4 = parseInt(prompt("Favor de ingresar cuarto numero"));
num5 = parseInt(prompt("Favor de ingresar quinto numero"));
suma = num1 + num2 + num3 + num4 + num5;

sumaMensaje = ("El resultado de la suma del primer y segundo numero es ") + suma;
alert(sumaMensaje);

let multiplicacion, multiplicacionMensaje;
multiplicacion = num1 * num2 * num3 * num4 * num5;

multiplicacionMensaje = ("El resultado de multiplicar los cinco numeros entre si es ") + multiplicacion;
alert(multiplicacionMensaje)

let promedio, promedioMensaje;
promedio = suma / 5;

promedioMensaje = ("El resultado del promedio de la suma de todos los numeros es " + promedio);
alert(promedioMensaje);

let resto, restoMensaje;
resto = suma % 10;

restoMensaje = ("El resultado de hacerle el resto a la suma de los cinco numeros es " + resto); 
alert(restoMensaje);

let potencia, potenciaMensaje;
potencia = suma ** 5

potenciaMensaje = ("El resultado de elevar a la cinco la suma de los cinco numeros es " + potencia);
alert(potenciaMensaje);

if (num1 > 0) {
    alert("Es positivo");
} else {
    if (num1 < 0) {
        alert("Es negativo");
    } else {
        alert("Es neutro");
    }
}


