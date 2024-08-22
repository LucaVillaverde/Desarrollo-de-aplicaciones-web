const addButton = document.getElementById("agregar");
const averageButton = document.getElementById("promedio");
const listaButton = document.getElementById("lista");

const datos = new Map ([
]);

function añadir(nombre, nota){
    datos.set(nombre, nota);
}

function promedio(){
    let totalNota = 0;
    let totalAlumnos = 0;
    datos.forEach (function(nota, nombre) {
        totalNota += parseInt(nota);
        console.log("Integrando la nota de " + nombre);
        totalAlumnos++;
    })
    promedioNotas = (totalNota / totalAlumnos);

    console.log("Cantidad de notas ingresadas = " + totalAlumnos);
    console.log("Suma total de todas las notas = " + totalNota);
    console.log("El promedio de las notas es = " + promedioNotas);
}

addButton.addEventListener("click", function(){
    let nota = document.getElementById("calificación").value;
    let nombre = document.getElementById("nombre").value;
    añadir(nombre, nota);
});

averageButton.addEventListener("click", function(){
    promedio();
});

listaButton.addEventListener ("click", function(){
    console.log(datos);
})