var loader = document.getElementById("contLoader");
function loading(){
    console.log("función loading funciona bien.");
    setTimeout(timer, 0);
}

function timer(){
    loader.classList.add("ocultar");
}

window.addEventListener("load", loading);

    
    // // Función para cambiar el tamaño de la fuente
    function cambiarTamaño(tamaño) {
        // Obtener los elementos <p>, <h1>, <h2>, <h3>, <h4>, <h5>, <h6>
        const elementsToStyle = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, label');
    
        elementsToStyle.forEach(element => {
            // Verificar que el elemento no sea un <a>
            if (element.tagName.toLowerCase() !== 'a') {
                // Eliminar todas las clases de tamaño existentes
                element.classList.remove('texto-chico', 'texto-mediano', 'texto-grande', 'default');
                // Agregar la clase de tamaño deseada
                element.classList.add(tamaño);
            }
        });
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

    body.classList.remove('oscuro', 'claro', 'dark-scheme');

    body.classList.add(tema);
}

document.getElementById('oscuro').addEventListener('change' , function() {
    cambiarTema('oscuro');
});

document.getElementById('claro').addEventListener('change' , function() {
    cambiarTema('claro');
});

document.getElementById('navegador').addEventListener('change', function(){
    cambiarTema('dark-scheme');
});
