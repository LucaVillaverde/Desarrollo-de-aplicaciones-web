let promesa = new Promise(function(myResolve, myReject) {
    
    myResolve();
    myReject();
});

promesa.then(
    function(value) { setTimeout(function(){window.alert("Se ejecutó bien")}, 3000)},
    function(error) { window.alert("No se ejecutó bien")}
);