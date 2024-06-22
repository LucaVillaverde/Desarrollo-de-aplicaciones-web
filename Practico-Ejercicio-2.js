let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingrese un numero distinto al anterior"));

let array = [];

    let mayor,menor;
    if (num1<num2){
        mayor=num2;
        menor=num1;
    } if (num1>num2){
        mayor=num1;
        menor=num2;
    }
    for(let i = (menor + 1); i < mayor; i++){
        array.push(i);
    }

    if (num1<num2){
        console.log(array);
        alert(array);
    } if (num1>num2){
        console.log(array);
        alert(array);
    } if (num1===num2) {
        console.log("No se pueden encontrar numeros intermedios, asegurese de que los numeros ingresados no sean iguales")
        window.alert("No se pueden encontrar numeros intermedios, asegurese de que los numeros ingresados no sean iguales");
    }

