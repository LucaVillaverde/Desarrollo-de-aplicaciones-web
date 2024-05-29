/* Ejercicio 1 (Selective doble)
    Crear un programa en JS que evalue la edad de una persona y muestre diferentes mensajes:
    - Si es menor de 18 que diga: no tiene permitido el acceso
    - Si es mayor o igual de 18 que diga: seras dirigido/a a otra pagina
*/

let edad = parseInt(prompt("Ingrese una edad"));
if(edad < 18){
    alert("No tiene permitido el acceso");
}else{
    alert("seras dirigido/a a otra pagina");
}

