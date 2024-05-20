let sumaDecimal;
sumaDecimal = 7.4 + 10.7;
console.log(sumaDecimal);

let multiplicacionDecimal;
multiplicacionDecimal = 6 * 7.9;
console.log('El resultado es ' + multiplicacionDecimal);

let divisionDecimal;
divisionDecimal = (6.4 / 0);
console.log('El resultado es ' + divisionDecimal);

let result, inc, dec, pow, alertaPow, mensaje;
inc = 5;
++inc;
result = "El resultado es " + inc;
alert(result)
dec = 7;
--dec;
result = "El resultado es " + dec;
alert(result);
//Tambien poseemos exponenciacion
pow = 5 ** 3
alertaPow = "El resultado es " + pow;
alert(alertaPow);
// y precedencia de operadores
result= 4 + 3 * 2;
mensaje= "El resultado de precedencia de operadores es " + result;
alert (mensaje);