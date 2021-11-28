// Creamos la lista numeros:
listaNumeros = [-1, 2, 4, -5, -7, 10, 11, 12, -17];

// Llamamos a la funcion y le pasamos de argumento la lista de numeros
sumaTodosImpares(listaNumeros);

function sumaTodosImpares(array) {
    // La funcion recibe el array y lo guarda en otro array para no modificar nada del array principal.
    let arrayNumeros = array;
    // Inicializamos un contador para ir añadiendo los numeros impares que iremos sumando
    cont = 0;
    // Recorremos el array:
    for (var i = 0; i < arrayNumeros.length; i++) {
        // Condicional: Si un elemento del array que se ira recorriendo, se divide por 2 y de resto no da 0, 
        // iremos sumando ese valor al contador.
        if (arrayNumeros[i] % 2 != 0) {
            // Suma de los numeros uno por uno:
            cont = cont + arrayNumeros[i];
        }
    }
    console.log(cont);
}