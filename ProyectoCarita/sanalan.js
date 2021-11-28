var d = document.getElementById("villaSanAlan");
var lienzo = d.getContext("2d");
var x = 10, y = 10;

var fondo = {
  url: "/ProyectoCarita/248362091_2137342986420829_1735360099491967423_n.jpg",
  cargaOk: false
};

var carita = {
  url: "Carita2.png",
  cargaOk: false
};

console.log(fondo);

fondo.imagen = new Image();
fondo.imagen.scr = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

carita.imagen = new Image();
carita.imagen.scr = carita.url;
carita.imagen.addEventListener("load", cargarCarita);

function cargarFondo() {
  fondo.cargaOk = true;
  lienzo.drawImage(fondo.imagen, 0, 0);
}

function cargarCarita() {
  carita.cargaOk = true;
  lienzo.drawImage(carita.imagen, x, y);
}


function dibujar() {
  if (true) {
    lienzo.drawImage(imagen, 0, 0);
  }
  else
    cargarCarita();
}


var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
}

document.addEventListener("keydown", dibujar());


function dibujar(evento) {
  var movimiento = 10;

  switch (evento.keyCode) {
    case teclas.DOWN: {
      if (y < 478) {
        lienzo.drawImage(carita.imagen, x, y + movimiento);
        y = y + movimiento;
        console.log("Dibuja hacia abajo");
      }
      else alert("Has llegado a un limite")
    }
      break;

    case teclas.LEFT: {
      if (x > 0) {
        lienzo.drawImage(carita.imagen, x - movimiento, y);
        x = x - movimiento;
        console.log("Dibuja hacia izquierda");
      }
      else alert("Has llegado a un limite")
    }
      break;

    case teclas.RIGHT: {
      if (x < 691) {
        lienzo.drawImage(carita.imagen, x + movimiento, y);
        x = x + movimiento;
        console.log("Dibuja hacia derecha");
      }
      else alert("Has llegado a un limite")
    }
      break;

    case teclas.UP: {
      if (y > 0) {
        lienzo.drawImage(carita.imagen, x, y - movimiento);
        y = y - movimiento;
        console.log("Dibuja hacia arriba");
      }
      else alert("Has llegado a un limite")
    }
      break;
    default:
      alert("Estas usando otra tecla!!")
  }
}