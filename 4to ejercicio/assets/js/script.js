function tecla(event) {
  teclaPresionada = event.key;
  console.log("Tecla presionada:", teclaPresionada);
}

document.addEventListener("keydown", tecla);

document.addEventListener("keydown", function (event) {
  const key = document.getElementById("key");
  if (event.key === "a" || event.key === "A") {
    key.style.backgroundColor = "pink";
  } else if (event.key === "s" || event.key === "S") {
    key.style.backgroundColor = "orange";
  } else if (event.key === "d" || event.key === "D") {
    key.style.backgroundColor = "lightblue";
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "q" || event.key === "Q") {
    agregarElemento("purple");
    } else if (event.key === "w" || event.key === "W") {
    agregarElemento("gray");
    } else if (event.key === "e" || event.key === "E") {
    agregarElemento("brown");
    } else {
    eliminarElemento();
  }
});

function agregarElemento(color) {
  contenedor = document.getElementById("contenedor");
  nuevoElemento = document.createElement("div");
  nuevoElemento.style.backgroundColor = color;
  contenedor.appendChild(nuevoElemento);
}

function eliminarElemento() {
  contenedor = document.getElementById("contenedor");
  elementos = contenedor.querySelectorAll("div");
  if (elementos.length > 0) {
    contenedor.removeChild(elementos[elementos.length - 1]);
  }
}

