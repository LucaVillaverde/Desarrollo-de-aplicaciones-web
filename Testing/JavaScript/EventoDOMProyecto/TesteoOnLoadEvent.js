function loading(){
    let loader = document.getElementById("contLoader");
    loader.classlist.add("ocultar");
}

document.addEventListener("load", function() {
    loading();
});
