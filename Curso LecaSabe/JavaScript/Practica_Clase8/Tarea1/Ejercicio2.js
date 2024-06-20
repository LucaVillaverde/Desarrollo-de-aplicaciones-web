/* Ejercicio 2 (Selective multiple if) */

/*let promedio, nota1, nota2, nota3;
nota1= parseInt(prompt("Ingrese la nota de Matematica"));
nota2= parseInt(prompt("Ingrese la nota de Quimica"));
nota3= parseInt(prompt("Ingrese la nota de Fisica"));
promedio= (nota1+nota2+nota3)/3;
alert("El promedio es "+promedio);*/

let promedio = parseInt(prompt("Ingrese un promedio entre 1 y 12"));

if(promedio >= 1 && promedio < 5){
    alert("Tu promedio es " + promedio + " Ponete las pilas!");
}else if (promedio >= 5 && promedio < 7){
    alert("Tu promedio es " + promedio + " Se valora el esfuerzo");
}else if (promedio >= 7 && promedio < 10){
    alert("Tu promedio es " + promedio + " Buen trabajo");
}else if (promedio >= 10 && promedio <= 12){
    alert("Tu promedio es " + promedio + " Excelente trabajo");
}