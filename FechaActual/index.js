const hoyAhora = new Date(); // Creamos un objeto de la clase date para obtener informacion de la fecha y hora actuales.

var dia = hoyAhora.getDate();
var mes = hoyAhora.getMonth();
var año = hoyAhora.getFullYear();
var hora = hoyAhora.getHours();
var minutos = hoyAhora.getMinutes();
var segundos = hoyAhora.getSeconds();
var mesCadena;

if (mes == 0) {
    mesCadena = "Enero";
} else if (mes == 1) {
    mesCadena = "Febrero";
} else if (mes == 2) {
    mesCadena = "Marzo";
} else if (mes == 3) {
    mesCadena = "Abril";
} else if (mes == 4) {
    mesCadena = "Mayo";
} else if (mes == 5) {
    mesCadena = "Junio";
} else if (mes == 6) {
    mesCadena = "Julio";
} else if (mes == 7) {
    mesCadena = "Agosto";
} else if (mes == 8) {
    mesCadena = "Septiembre";
} else if (mes == 9) {
    mesCadena = "Octubre";
} else if (mes == 10) {
    mesCadena = "Noviembre";
} else if (mes == 11) {
    mesCadena = "Diciembre";
}
console.log(dia + ' de ' + (mesCadena) + ' del ' + año);
console.log("Son las: "+hora+':'+minutos+':'+segundos);