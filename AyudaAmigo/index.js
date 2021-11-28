var switcheo = true;
while (switcheo === true) {
    let opcionFuncional = confirm("¿Desea agregar una reservacion?");
    if (opcionFuncional === true) {
        console.log("Empieza el programa...");
        pasaOno();
    } else if (opcionFuncional === false) {
        console.log("Finalizo el programa.");
        switcheo = false;
    }
}

function pasaOno() {
    let edadDelUsuario = parseInt(prompt("¿Cuál es tu edad?"));

    if (edadDelUsuario >= 18) {
        alert("Eres mayor de edad, puedes continuar.");
        reservacion();
    } else if (edadDelUsuario < 18) {
        alert("Eres menor de edad" + "  No puedes continuar");
        switcheo = false;
    }
}

function reservacion() {
    var nombre = prompt("Digite a nombre de quien se hara la reserva:");
    var reservacion = parseInt(prompt("¿Cuantas personas son?"));
    var reservacion = 9;
    if (reservacion > 10) {
        console.log("No puedes exceder 10 persona por reservacion.");
        switcheo = false;
    }
    else {
        alert("Su reserva fue aprobada");
        obtenerDia(nombre);
    }
    function obtenerDia(nombreReserva) {
        let nombre = nombreReserva;
        let dia = new Date();
        numeroDia = dia.getDay();
        switch (numeroDia) {
            case 1:
                var diaTexto = "Lunes";
                break;
            case 2:
                var diaTexto = "Martes";
                break;
            case 3:
                var diaTexto = "Miercoles";
                break;
            case 4:
                var diaTexto = "Jueves";
                break;
            case 5:
                var diaTexto = "Viernes";
                break;
            case 6:
                var diaTexto = "Sabado";
                break;
            case 0:
                var diaTexto = "Domingo";
                break;
        }

        console.log(`${nombre}, tu reserva esta pactada para el dia ${diaTexto}.`);
        switcheo = false;
    }
}
