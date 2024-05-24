const persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 29,
    casado: false,
    trabajo: "Desempleado",
    evadeImpuestos: "Siempre",
}

let p = JSON.stringify(persona);

console.log(p);

let b = JSON.parse(p);

console.log(b);