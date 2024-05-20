function intermedios(num1,num2){
    let mayor,menor;
    if (num1<num2){
        mayor=num2;
        menor=num1;
    } else {
        mayor=num1;
        menor=num2;
    }
    for(let i= menor+1; i<mayor; i++){
        alert(i);
    }
}

intermedios(3,7);
intermedios(8,2);
intermedios(4,5);
intermedios(2,2);