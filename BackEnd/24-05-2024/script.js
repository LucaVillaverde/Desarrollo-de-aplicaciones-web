const persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 29,
    casado: false,
    trabajo: "Desempleado",
    evadeImpuestos: "Siempre",
    fullName: function () {
        return this.nombre + this.apellido;
    }
}

alert(persona.fullName);

let p = JSON.stringify(persona);

console.log(p);

let b = JSON.parse(p);

console.log(b);