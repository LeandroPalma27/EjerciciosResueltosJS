var numeros = []; // Declaramos array vacio para posteriormente llenarlo.
var salir = 'n'; // Declaramos e inicializamos un condicional para nuestro bucle while, y asi poder
                 // repetir una funcion las veces que deseemos.

main(); //Ejecutamos la funcion principal.

function main() {
    while (salir == 'n') { // Minetras salir este con valor n, se repetira todo el bloque de codigo.
        let numero;
        numero = prompt('Ingresa un numero:'); //Ingresamos un valor a la variable numero para posteriormente agregarlo al arreglo.
        if (numero != "" && numero != undefined) {
            // Si el numero no es una cadena vacia y tampoco un undefined, procede true.
            // Pero si tan solo procede alguno y el otro no, procede false y se va al elseif o else.
            numeros.push(parseInt(numero));
            // Pusheamos los valores de numero en el arreglo vacio "numeros".
            let seguir = confirm('desea ingresar mas numeros');
            //A traves de confirm, confirmamos si continuaremos o no. El metodo retorna un valor booleano.
            if (seguir == false) {
                // Si presionamos en no continuar, seguir seria false, por lo tanto procede el if.
                salir = 'y';// Detenemos el bucle
                var pares = parImpar(numeros).Par; //Ejecutamos la funcion de comprobacion de pares e impares.
                var impares = parImpar(numeros).Impar;
                console.log("La cantidad de pares es de " + pares + " y la de impares es de " + impares);
                // Imprimimos por consola la respuesta que retorna la funcion de comprobacion.
            }
        } else if (numero == undefined) {
            //Al ejecutar el main, inicializamos la variable numero, y si cancelamos el prompt, numero
            //queda declarado pero no inicializado, por lo tanto seria undefined. Si es asi, con este if
            //definimos si se detiene el programa.
            salir = 'y';
            alert("Programa finalizado");
        } else {
            // Se ejecuta si damos aceptar sin haber ingresado un valor.
            alert("¡Ingrese un numero!");
        }
    }

    function parImpar(data) {
        var contadorPar = 0;
        var contadorImpar = 0; //Contadores para ir contanto algo en especifico.
        for (var i = 0; i < data.length; i++) { //Recorremos el arreglo en base a las posiciones
            let operador = data[i]; // Almacenamos cada posicion del arreglo en un operador (programacion funcional)
            function comprobador(operador) {
                let tipoNumero = operador % 2; //Obtenemos el resto.
                if (tipoNumero == 1) {
                    //Si el resto da uno, es un numero impar.
                    contadorImpar++;//Añadimos una unidad al contador para ir contando los numeros, en este caso impares.
                } else if (tipoNumero == 0) {
                    //Si el resto da 0, es un numero par.
                    contadorPar++;
                }
            }
            comprobador(operador); //Ejecutamos la funcion comprobador() con el parametro operador
                                   //que contiene los valores del arreglo en cada posicion.
        }
        var info = new Object(); //Creamos un objeto vacio para separar la data en par e impar que nos otorga los contadores.
        info.Par = contadorPar; //Aca separamos pares
        info.Impar = contadorImpar; //Y aca impares
        return info; //Retornamos esa informacion.
    }

}

