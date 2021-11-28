var precioBarra = 450;
var nroVendidasPasadas = prompt("Ingrese la cantidad de barras que no son del dia y que ha vendido:");
if (nroVendidasPasadas != "") {
    alert("El precio habitual de las barras es de " + precioBarra);
    precioBarra = precioBarra * (50 / 100);
    alert("El descuento por cada barra pasada es de " + precioBarra);
    let venta = nroVendidasPasadas * precioBarra;
    alert("Por lo tanto la venta de hoy fue de " + venta);
}