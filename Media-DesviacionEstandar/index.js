var arregloNumeros = [];
var cadenaNumeros = prompt("Ingrese lista de numeros separados por una coma:");
arregloNumeros = cadenaNumeros.split(",");// El metodo split convierte un string en un array de cadenas en funcion a un separador que distinga cada letra de la cadena.
var arregloNumerico = [];

for (var i = 0; i < arregloNumeros.length; i++) { //Recorremos el arreglo de nuestra lista de numeros pero en formato string
    var unidadNumero = parseInt(arregloNumeros[i], 10);// En una variable, almacenamos cada dato del arreglo que marca cada posicion iterada, pero parseado a entero con parseInt().
    arregloNumerico.push(unidadNumero);// Pusheamos un solo dato por cada iteracion con el fin de crear un array de varios elemento y no se solo uno.
}

alert("La media es de " + mediaDesviacion(arregloNumerico).media + " y la desviacion estandar es de "
    + mediaDesviacion(arregloNumerico).desviacion);

function mediaDesviacion(listaNumerica) { //A la funcion para calcular media y desviacion, le pasamos el array con los lista de numeros ya parseados a entero.
    let arregloNumerico = [];
    arregloNumerico = listaNumerica;
    var media = 0;
    var sumaNumeros = 0;
    var desviacion;
    var sumaDatosAlCuadrado = 0;
    for (var i = 0; i < arregloNumerico.length; i++) { // Recorremos el array de datos numericos
        sumaNumeros = sumaNumeros + arregloNumerico[i]; // Iteramos una suma de cada elemento del arreglo a un contador para poder obtener la suma de todos los elementos del arreglo.
    }
    media = sumaNumeros / arregloNumerico.length; //Calculamos la media
    for (i = 0; i < arregloNumerico.length; i++) {
        var datosAlCuadrado = (arregloNumerico[i] - media) ** 2;
        sumaDatosAlCuadrado = sumaDatosAlCuadrado + datosAlCuadrado;// En cada iteracion iremos calculando la suma de todas las diferencias que cada dato del arreglo, con la media obtenida, para asi poder obtener esa suma, y elevados al cuadrado.
        // for (var j = 0; j < arregloNumerico.length; j++) {
        //     // Este bucle se repetiria n * n veces, donde n = length.
        // }
    }
    desviacion = Math.sqrt((sumaDatosAlCuadrado / (arregloNumerico.length - 1))); //Calculamos la desviacion estandar.
    
    //Esto sirve para retornar un objeto con varios datos y poder gestionarlos mejor.
    var info = new Object();
    info.media = media;
    info.desviacion = desviacion;
    return info;
}
