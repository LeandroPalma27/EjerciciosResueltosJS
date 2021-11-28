var listaNumeros = [];
var bucle = "open";

while (bucle == "open") { //El bucle empieza repitiendose a menos que cancele la funcion.
    let numero;
    numero = prompt('Ingresa un numero a la lista:');
    if (numero != "" && numero != undefined) {
        listaNumeros.push(parseInt(numero));// Ingresamos el numero ingresado
        let seguir = confirm("¿Desea ingresar mas numeros?");// El bucle sigue si damos en seguir porque no cambia a "close"
        if (seguir == false) {
            bucle = "close";
            alert("La lista de numeros es: " + listaNumeros);
            let resultadoFinal = sumaNumeros(listaNumeros); // Ejecutamos la funcion que sumara la lista de numeros
            console.log(listaNumeros);
            alert("La suma de los numeros ingresados en la lista es de: " + resultadoFinal);
        }
    } else if (numero == undefined) {
        bucle = "close";
        alert("Programa finalizado");
    } else {
        alert("¡Ingrese un numero!");
    }
}

function sumaNumeros(lista) {
    let arregloNumeros = [];
    arregloNumeros = lista;
    var sumaNumeros = 0;
    for (var i = 0; i < arregloNumeros.length; i++) {// Recorremos el arreglo en funcion a su tamaño
        let numeroIndividual = arregloNumeros[i]; // En una variable almacenamos el numero que la posicion del arreglo esta marcando en esa iteracion.
        sumaNumeros = sumaNumeros + numeroIndividual;// Aca iremos sumando cada numero que iremos "desestrucutrando" del arreglo para sumarlo al contador.
    }
    return sumaNumeros;
}