function mostrarArreglo(arreglo){
    let largo=arreglo.length;
    for (let i=0; i < largo; i++){
        document.write(arreglo[i]);
        document.write("<br>")
    }
}

let arreglo=["Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis"];
let resultado=arreglo.copyWithin(0,0);
mostrarArreglo(arreglo);
document.write("<br>");
document.write(resultado);
document.write("<br>");
document.write(arreglo.indexOf("Cuatro"));
document.write("<br>");
document.write(arreglo.includes("Dos"));
