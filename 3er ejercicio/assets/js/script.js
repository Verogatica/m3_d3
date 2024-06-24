function pintarDiv(elemento, color) {
    elemento.style.backgroundColor = color;
}

document.getElementById("azul").addEventListener("click", function() {
    const elemento = document.getElementById("azul");
    pintarDiv(elemento, 'black');
});

document.getElementById("rojo").addEventListener("click", function() {
    const elemento = document.getElementById("rojo");
    pintarDiv(elemento, 'black');
});

document.getElementById("verde").addEventListener("click", function() {
    const elemento = document.getElementById("verde");
    pintarDiv(elemento, 'black');
});

document.getElementById("amarillo").addEventListener("click", function() {
    const elemento = document.getElementById("amarillo");
    pintarDiv(elemento, 'black');
});
