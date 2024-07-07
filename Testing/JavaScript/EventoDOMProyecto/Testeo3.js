document.getElementById("texto1").addEventListener('change', function() {
    traductor();
});
document.getElementById("texto2").addEventListener('change', function() {
    traductor();
});

function traductor() {
    var txtEsp = document.getElementsByClassName('mostrarTexto');
    var txtEng = document.getElementsByClassName('ocultarTexto');

    toggleClass(txtEsp, 'mostrarTexto', 'ocultarTexto');
    toggleClass(txtEng, 'ocultarTexto', 'mostrarTexto');
}

function toggleClass(elements, class1, class2) {
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].classList.contains(class1)) {
            elements[i].classList.remove(class1);
            elements[i].classList.add(class2);
            console.log(`adios ${class1} ${i}`);
        } else {
            elements[i].classList.remove(class2);
            elements[i].classList.add(class1);
            console.log(`hola ${class1} ${i}`);
        }
    }
}


    