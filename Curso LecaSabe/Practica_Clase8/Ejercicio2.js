/* Ejercicio 2 (Selective multiple if) */

let promedio = parseInt(prompt("Ingrese un promedio"));
if(promedio >= 1 && promedio < 5){
    alert("Ponete las pilas!");
}else if (promedio >= 5 && promedio < 7){
    alert("Se valora el esfuerzo");
}else if (promedio >= 7 && promedio < 10){
    alert("Buen trabajo");
}else if (promedio >= 10 && promedio <= 12){
    alert("Excelente trabajo");
}