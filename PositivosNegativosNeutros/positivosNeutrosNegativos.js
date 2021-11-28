var arrayNumeros = [];
arrayNumeros = [-1, 0, 0, 1, 1, 1, 1, 2]; //Ingresamos cantidad de numeros
console.log(masMenos(arrayNumeros));
function masMenos(array) {
    var cantidadTotal = array.length;
    var contadorPositivos = 0;
    var contadorNeutros = 0;
    var contadorNegativos = 0;
    for (var i = 0; i < array.length; i++) { //Recorremos el array de numeros posicion por posicion para filtrarlos en funcion a si son positivos, neutros o negativos.
        if (array[i] > 0) {
            contadorPositivos += 1; //Se ira contando los tipos de numero en su respectivo contador.
        } else if (array[i] == 0) {
            contadorNeutros += 1;
        } else if (array[i] < 0) {
            contadorNegativos += 1;
        }
    }

    function porcentajeNumeros(positivos, neutros, negativos, total) {
        let porcentajePositivos = positivos / total;
        let porcentajeNegativos = negativos / total;
        let porcentajeNeutros = neutros / total; //Calculamos porcentajes.
        var porcentajes = [porcentajePositivos, porcentajeNeutros, porcentajeNegativos]; //Guardamos resultados en un array
        return porcentajes;
    }

    var retorno = porcentajeNumeros(contadorPositivos, contadorNeutros, contadorNegativos, cantidadTotal); //Ejecutamos la funcion que retornara un array con los porcentajes.
    return retorno;
}