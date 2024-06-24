function pintar(color) {
    const elemento = document.querySelector('#ele1');
    elemento.style.backgroundColor = color;
}

const ele1 = document.getElementById('ele1');

ele1.addEventListener("click", function() {
    pintar('yellow')
});