console.log("Hola Mundo");
//Para ver este mensaje presiona Ctrl + Shift + j
//abriendo la consola del navegador

/*Las variables son espacios reservados en memoria que almacenan un dato. Estos tienen tres atributos principales:
tipo de dato, nombre y valor.
Los tipos de dato que puede poseer una variable son: undefined(no tienen un especifico)
Boolean(verdadero o falso), string(Palabras), number(numeros), symbol(lo vemos mas adelante) y object (lo vemos mas adelante)
estos tipos de datos definiran el contenido de la variable a utilizar.
Existen tres acciones que se realizan sobre las variables: declaracion, inicializacion y asignacion
La declaracion consiste en asignar un espacio en memoria con un nombre determinado y un tipo de dato (por defecto sera undefined).
Podemos ver el tipo de una variable con la funcion typeof(Variable).
*/

let variable=4;
console.log(variable)
typeof(variable);
variable=8;
console.log(variable)
variable="Hola"
console.log(variable)

/*
Para poder declarar una variable podremos utilizar las palabras reservadas "var" o "let". Por convencion, se recomienda utilizar la palabra reservada "let"
ya que esta definida para el formato ES6 que trabajaremos en este curso (aun cuando se presente de forma separada en el segundo semestre junto con las novedades de ES6)
Ademas tenemos un tipo especial de variable llamada constante que se define con la palabra reservada "const"
Las constantes son aquellas que no puede cambiar ni de tipo ni de valor a lo largo de toda la ejecucion de la aplicacion.
La inicializacion consiste en darle un valor inicial a la variable. Utilizando este formato, tambien le estaremos asignando un tipo de dato implicitamente. en el caso
de las constates, estas deben ser inicializadas de manera obligatoria.
la asignacion consiste en darle un valor a la variable luego de que ya fue inicializada (de echo la inicializacion es una asignacion inicial)
ese valor lo podemos asignar al momento de la declaracion o de manera posterior utilizando en operador = asignando el valor a la derecha del operador hacia la variable puesta
a la izquierda del mismo.
en el caso de las constantes, no podemos asignarles un nuevo valor.
*/
const variable1="Hola"; //Declaracion e inicializacion de una variable.
let variable2; //Declaracion de variable
console.log(typeof(variable2));
let primeraVariable; //declaracion de variable
primeraVariable = 10; // Asignacion de variable
console.log(typeof(primeraVariable));
console.log(primeraVariable);
/*la escritura de los nombres de las variables tienen ciertas condiciones:
1) Solo pueden comenzar con letras (el signo $ tambien es considerado una letra) o guion bajo(_)
2)Pued
*/