/*Asignación de variables*/
let num1, num2, num3;
num1 = parseInt(prompt("Ingrese el primer numero"));
num2 = parseInt(prompt("Ingrese el segundo numero"));
num3 = parseInt(prompt("Ingrese el tercer numero"));

if (num1 > num2 && num1 > num3) {
    alert("El primer numero es el mayor entre los tres")
} else {
    if (num2 > num1 && num2 > num3) {
        alert("El segundo numero es el mayor entre los tres")
    } else {
        if (num3 > num2 && num3 > num1) {
            alert("El tercer numero es el mayor entre los tres")
        } 
    }
}

if (num1 < num2 && num1 < num3) {
    alert("El primer numero es el menor entre los tres")
} else {
    if (num2 < num1 && num2 < num3) {
        alert("El segundo numero es el menor entre los tres")
    } else {
        if (num3 < num1 && num3 < num2) {
            alert("El tercer numero es el menor entre los tres")
        } else {
            if (num1 === num2 && num1 === num3) {
                alert("Los tres numeros son iguales")
            }
        }
    }
}

/*

Para el mayor numero:
primer caso: (1 2 3)
1er if) 1 > 2 [F] && 1 > 3 [F]
2do if) 2 > 1 [T] && 2 > 3 [F]
3er if) 3 > 2 [T] && 3 > 1 [T] (El tercer numero es el mas grande)
------------
segundo caso: (3 2 1)
1er if) 3 > 2 [T] && 3 > 1 [T] (El primer numero es el mas grande)
------------
tercer caso: (2 3 1)
1er if) 2 > 3 [F] && 2 > 1 [F]
2do if) 3 > 2 [T] && 3 > 1 [T] (El segundo numero es el mas grande)

cuarto caso: (2 2 2)
1er if) 2 > 2 [F] && 2 > 2 [F]
2do if) 2 > 2 [F] && 2 > 2 [F]
3er if) 2 > 2 [F] && 2 > 2 [F]
4to if) 2 === 2 [T] && 2 === 2 [T] (Los tres numeros son iguales)

Tarea: Lograr que la ventana emergente responda adecuadamente si hay 2 numeros ingresados que sean iguales.

---------------------------------------------------------------------------

Para el menor numero:
Primer caso: (1 2 3)
1er if) 1 < 2 [T] && 1 < 3 [T] (El primer numero es el menor)

Segundo caso: (3 2 1)
1er if) 3 < 2 [F] && 3 < 1 [F]
2do if) 2 < 3 [T] && 2 < 1 [F]
3er if) 1 < 3 [T] && 1 < 2 [T] (El tercer numero es el menor)

Tercer caso: (2 1 3)
1er if) 2 < 1 [F] && 2 < 3 [T]
2do if) 1 < 2 [T] && 1 < 3 [T] (El segundo numero es el menor)

cuarto caso: (2 2 2)
1er if) 2 < 2 [F] && 2 < 2 [F]
2do if) 2 < 2 [F] && 2 < 2 [F]
3er if) 2 < 2 [F] && 2 < 2 [F]
4to if) 2 === 2 [T] && 2 === 2 [T] (Los tres numeros son iguales)

*/
