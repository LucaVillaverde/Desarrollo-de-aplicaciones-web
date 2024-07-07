var loader = document.getElementById("contLoader");
function loading(){
    console.log("función loading funciona bien.");
    setTimeout(timer, 0);
}

function timer(){
    loader.classList.add("ocultar");
}

window.addEventListener("load", loading);

    
    // Función para cambiar el tamaño de la fuente
    function cambiarTamaño(tamaño) {
        // Obtener el elemento body
        var body = document.body;

        // Eliminar todas las clases de tamaño de texto
        body.classList.remove('texto-chico', 'texto-mediano', 'texto-grande', 'default');

        // Agregar la clase correspondiente al tamaño seleccionado
        body.classList.add(tamaño);
    }

    // Event listeners para los botones tipo radio
    document.getElementById('tam-chico').addEventListener('change', function() {
        cambiarTamaño('texto-chico');
    });

    document.getElementById('tam-mediano').addEventListener('change', function() {
        cambiarTamaño('texto-mediano');
    });

    document.getElementById('tam-grande').addEventListener('change', function() {
        cambiarTamaño('texto-grande');
    });

    document.getElementById('default').addEventListener('change', function() {
        cambiarTamaño('default')
    })


function cambiarTema(tema){
    var body = document.body;

    body.classList.remove('oscuro', 'claro');

    body.classList.add(tema);
}

document.getElementById('oscuro').addEventListener('change' , function() {
    cambiarTema('oscuro');
});

document.getElementById('claro').addEventListener('change' , function() {
    cambiarTema('claro');
});