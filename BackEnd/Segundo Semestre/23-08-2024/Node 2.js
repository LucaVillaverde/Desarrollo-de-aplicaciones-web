/* Crear un modulo JavaScript (.mjs) que solicite un nombre y un apellido por consola,
 y finalmente muestre el mensaje "Hola" seguido del nombre y apellido ingresados. */

 const { Readline } = require("node:readline");
 const lector = require("readline");
 const {stdin: input, stdout: output } = require("process"); 
 
 const rl = lector.createInterface({ input, output, });
 
 let name = "";
 
 rl.question("Ingrese su Nombre: ", (nombre) => {
   name = nombre;
   rl.question("Ingrese su Apellido: ", (apellido) => {
     console.log("Hola " + name + " " + apellido);
     rl.close()
   })
 })