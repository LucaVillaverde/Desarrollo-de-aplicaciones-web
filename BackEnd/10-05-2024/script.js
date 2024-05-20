function intermedios(num1, num2){
if (num1 > num2) {
    for (let i = num1 + 1; i < num2; i++)
    alert(i);
} else {
    for (let i = num2+1; i < num1; i++) {
        alert(i);
        }
    }
}

intermedios(3,7);
intermedios(8,2);
intermedios(4,5);
intermedios(2,2);