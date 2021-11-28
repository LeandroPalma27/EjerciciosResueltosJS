var d = document.getElementById("dibujoL");
var lienzo = d.getContext("2d");
var cantidadColores = 5;

var color = document.getElementById("txtColor");

//Dibujar carita 
function marco(x1, y1, x2, y2, color) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.linewidth = 5;
    lienzo.arc(140, 170, 120, 0, 2 * Math.PI);
    lienzo.stroke();
    lienzo.closePath();
}

function figuras(color) {
    let colorCompleto;
    switch (color) {
        case "1":
            colorCompleto = "red";
            break;
        case "2":
            colorCompleto = "green";
            break;
        case "3":
            colorCompleto = "blue";
            break;
        case "4":
            colorCompleto = "yellow";
            break;
        case "5":
            colorCompleto = "orange";
            break;
        default:
            alert("Ingrese un valor entre 1 y 5!!");
    }
    lienzo.beginPath();
    lienzo.strokeStyle = colorCompleto;
    var a1 = 0;
    var a2 = 200;
    for (var i = 1; i <= 4; i++) {
        marco(a1, a1, a2, a2, colorCompleto);
        a1 = a1 + 20;
        a2 = a2 - 20;
    }
}

function dibuja() {
    figuras(color.value);
}