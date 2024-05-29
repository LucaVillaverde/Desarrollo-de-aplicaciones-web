/* Ejercicio 3 Switch */

let creditos = parseInt(prompt("Ingrese la cantidad de creditos a pagar (de 1 a 4)"));
switch(creditos){
    case 1:
        alert("Usted puede ingresar solo a la sala de Consolas.");
    break;

    case 2:
        alert("Usted puede ingresar a la sala de Juegos 2D y la sala de Consolas.");
    break;

    case 3:
        alert("Usted puede ingresar a la sala de Juegos 3D, Juegos 2D y la sala de Consolas.");
    break;

    case 4:
        alert("Usted puede ingresar a la sala de Realidad Virtual, Juegos 3D, Juegos 2D y la sala de consolas.")
    break;

    default:
        alert("No ha ingresado un monto valido");
    break;
}