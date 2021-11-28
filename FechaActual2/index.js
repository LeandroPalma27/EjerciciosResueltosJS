var ingresoFecha = prompt("Ingrese la fecha en formato m-d-yyyy: ");
hoyAhora = new Date();

var dia = hoyAhora.getDate();
var mes = hoyAhora.getMonth();
var año = hoyAhora.getFullYear();

var fechaActual = (mes + 1) + '-' + dia + '-' + año; // Al mes se le suma 1 porque los meses empiezan desde el 0,1,2...hasta el 11.

restaFechas = function (f1, f2) {
    var aFecha1 = f1.split('-');
    var aFecha2 = f2.split('-');
    var fFecha1 = [aFecha1[0] - 1, aFecha1[1], aFecha1[2]];
    var fFecha2 = [aFecha2[0] - 1, aFecha2[1], aFecha2[2]];

    function datediff(first, second) {
        return Math.round((second - first) / (1000 * 60 * 60 * 24));
    }

    console.log(datediff(Date.parse(fFecha1), Date.parse(fFecha2)));
}

if (ingresoFecha != "") {
    restaFechas(ingresoFecha, fechaActual);
} else {
    alert("Ingrese una fecha!");
}




