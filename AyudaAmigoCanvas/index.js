// Traer el canvas
var d = document.getElementById("dibujoL");
var lienzo = d.getContext("2d");

// Activar el evento Teclado en document
document.addEventListener("keydown",dibujar);
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
}
// Definir el punto inicial
var x=10,y=10,x1=10,y1=10;

function  dibujaLinea(color,x1, y1, x2, y2)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.arc(150+x,150+y,100,0,Math.PI*2,true); // Círculo externo
    lienzo.moveTo(220+x,150+y);
    lienzo.arc(150+x,150+y,70,0,Math.PI,false);   // Boca (contra reloj)
    lienzo.moveTo(130+x,130+y);
    lienzo.arc(120+x,130+y,10,0,Math.PI*2,true);  // Ojo izquierdo
    lienzo.moveTo(190+x,130+y);
    lienzo.arc(180+x,130+y,10,0,Math.PI*2,true);  // Ojo derecho
    lienzo.stroke();
    lienzo.closePath();
}

function dibujar(evento){

    switch (evento.keyCode){
        case teclas.DOWN:
            y1=y+10;
            dibujaLinea(x,y,x1,y1,"palecioletred");
            x=x1;
            y=y1;
            console.log("Dibuja hacia abajo");
            break;
        case teclas.LEFT:
            x1= x-10;
            dibujaLinea(x,y,x1,y1,"palecioletred");
            x=x1;
            y=y1;
            console.log("Dibuja hacia izquierda");
            break;
        case teclas.RIGHT:
            x1= x+10;
            dibujaLinea(x,y,x1,y1,"palecioletred");
            x=x1;
            y=y1;
            console.log("Dibuja hacia derecha");
            break;
        case teclas.UP:
            y1= y-10;
            dibujaLinea(x,y,x1,y1,"palecioletred");
            x=x1;
            y= y1;
            console.log("Dibuja hacia arriba");
            break;
        default: 
        alert("Estas usando otra tecla!!")
    }
}