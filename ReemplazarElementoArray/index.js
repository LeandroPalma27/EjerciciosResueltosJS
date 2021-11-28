var frase = "Goku le gana a todos";
var arregloFrase = [];
arregloFrase = frase.split(" ");
console.log("Siempre en dragon ball: " + arregloFrase.join(' '));
var instancia = new Arreglo();

function Arreglo() {
    this.reemplazar = function (array, reemplazar, reeemplazo) { // Use this para poder instanciar metodos de una funcion (POO?).
        let arreglo = array;
        let reemplazarX = reemplazar;
        let reeemplazoX = reeemplazo;
        for (var i = 0; i < arreglo.length; i++) {
            if (arreglo[i] == reemplazarX) {
                arreglo[i] = reeemplazoX;

            }
        }
        return arreglo.join(' ');
    }
}

console.log("Pero, podria ser que: " + instancia.reemplazar(arregloFrase, arregloFrase[0], "Vegeta"));


