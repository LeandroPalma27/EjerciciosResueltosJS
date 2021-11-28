var registroLunes, registroMartes, registroMiercoles, registroJueves, registroViernes = [];
registroLunes = [1, 1, 11, 0]; //false
registroMartes = [0, 0, 10, 0]; //true
registroMiercoles = [6, 1, 11, 5]; //false
registroJueves = [0, -1, -11, 0]; //true
registroViernes = [1, 1, 11, 0]; //false
aperturas([registroLunes, registroMartes, registroMiercoles, registroJueves, registroViernes], 4);
function aperturas(registros, cantidad) {
    var registrosTotal = [];
    registrosTotal = registros;
    var cantidadMinima = cantidad;
    var respuesta;
    var arrayRespuestas = [];
    for (var i = 0; i < registrosTotal.length; i++) {
        respuesta = seAbre(registrosTotal[i],cantidadMinima); //Pasamos el parametro que refleja todas las posiciones del arreglo de dias.
        arrayRespuestas.push(respuesta);
    }
    function seAbre(diaLaborable, cantidad) { //La funcion ya detecta como array, ese dato que le pasamos que fue parte de un array de arrays.
        var contadorPositivos = 0;
        let apertura = false;
        var valor;
        for (var i = 0; i < diaLaborable.length; i++) {
            if (diaLaborable[i] <= 0) {
                contadorPositivos += 1;
            }
        }
        if (contadorPositivos >= cantidad) {
            apertura = true;
        } else {
            apertura = false;
        }
        valor = apertura;
        return valor;
    }
    console.log(arrayRespuestas);
    return arrayRespuestas;
}