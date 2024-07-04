let inserte;
inserte = prompt("Ingrese una calificación");
switch (inserte) {
    case "AA+":
    case "AA":
    case "A+":
    case "A":
        alert("Exonera");
        break;
        
    case "BB":
    case "B+":
    case "B":
        alert("A examen en diciembre");
        break;

    case "CC":
    case "C+":
    case "C":
    case "D":
        alert("A examen en febrero");
        break;

    default:
        alert("Usted no ha ingresado una calificación valida");
        break;
}

/* Funcionamiento:

Sección de exonerados:
1er case: AA+ === inserte (Si es así entonces dira que exonera)
2do case: AA === inserte  (Si es así entonces dira que exonera)
3er case: A+ === inserte  (Si es así entonces dira que exonera)
4to case: A === inserte  (Si es así entonces dira que exonera)

-----------------------------------------------------------------

Sección de examenes en diciembre:
1er case: BB === inserte (Si es así entonces dira A examen en diciembre)
2do case: B+ === inserte (Si es así entonces dira A examen en diciembre)
3er case: B === inserte (Si es así entonces dira A examen en diciembre)

-----------------------------------------------------------------

Sección de examenes en febrero:
1er case: CC === inserte (Si es así entonces dira A examen en febrero)
2do case: C+ === inserte (Si es así entonces dira A examen en febrero)
3er case: C === inserte (Si es así entonces dira A examen en febrero)
4to case: D === inserte (Si es así entonces dira A examen en febrero)

-----------------------------------------------------------------

Respuesta predeterminada si no se responde con un dato válido:
 


*/