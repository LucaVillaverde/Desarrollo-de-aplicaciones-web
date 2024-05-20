let num1, num2, num3;
num1 = parseInt(prompt("Favor de ingresar primer numero"));
num2 = parseInt(prompt("Favor de ingresar segundo numero"));
num3 = parseInt(prompt("Favor de ingresar tercer numero"));

if (num1 > num2 && num2 > num3) {
    alert("El primer numero es el mayor")
} else {
    if (num3 > num2 && num3 > num1) {
        alert("El tercer numero es el mayor")
    } else {
            if (num2 > num3 && num2 > num1) {
                alert("El segundo numero es el mayor")                
            }
        }
    }




let $expresion;
$expresion = prompt("Ingrece una opcion entre 1 y 3");
switch ($expresion) {
    case "1":
        alert("Ha seleccionado la opcion 1");
        break;
    case "2":
        alert("Ha seleccionado la opcion 2");
        break;
    case "3":
        alert("Ha seleccionado la opcion 3");
        break;
    default:
        alert("No ha seleccionado una opcion estipulada");
        break;
}

let expresion;
expresion = prompt("Ingrese un día de semana o fin de semana.");
switch (expresion) {
    case "Lunes":
    case "Martes":
    case "Miercoles":
    case "Jueves":
    case "Viernes":
        alert("Es un día de semana.")
        break;
    case "Sabado":
    case "Domingo":
        alert("Es un día de fin de semana.");
        break;
    default:
        alert("No ha ingresado el nombre de un día.");
        break;
}