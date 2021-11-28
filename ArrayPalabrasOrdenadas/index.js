var frase = prompt("Ingresa una palabra o frase"); //Ingresamos una frase o palabra cualquiera.
var arrayPalabras = frase.split(" "); //Separamos la frase en palabras y creamos un array con cada palabra.
var utlimaPosicion = arrayPalabras.length - 1; //Esto se hace para poder mostrar la ultima posicion de un arreglo de n posiciones.
var arrayVolteado = []; //Para almacenar el array volteado.

//Impresion de array
console.log(arrayPalabras);
//Impresion de la cantidad de palabras que conforma el array.
console.log("La cantidad de palabras ingresadas es de: " + arrayPalabras.length);
//Impresion de la primera y ultima palabra.
console.log('La primera palabra ingresada es "' + arrayPalabras[0] + '", y la ultima es "' + arrayPalabras[utlimaPosicion] + '"');

for (var i = arrayPalabras.length - 1; i >= 0; i--) {
    arrayVolteado.push(arrayPalabras[i]); //Con este for, recorreremos el array pero desde la ultima posicion hasta la primera.
}
//Impresion de array volteado
console.log(arrayVolteado);
//Impresion del array ordenado de la a A la Z con el metodo sort()
console.log(arrayPalabras.sort()); //Con el metodo sort, ordenamos cualquier array de cadenas de la A a la Z.

var arrayAlfabetico = arrayPalabras.sort();
var arrayAlfabeticoAlReves = [];
for (var i = arrayAlfabetico.length - 1; i >= 0; i--) { //La variable i empieza en la ultima posicion del array, luego ira disminuyendo 1 por uno hasta llegar a la ultima posicion que es 0. Ahi se detiene.
    arrayAlfabeticoAlReves.push(arrayAlfabetico[i]); //Con esto, pushearemos el array ordenado alfabeticamente, pero de la Z a la A.
}
//Impresion del array ordenado de la Z a la A
console.log(arrayAlfabeticoAlReves);

palindromePhraseChecker(frase);

function palindromePhraseChecker(str) {
    const newStr = str.replace(/[\W_]/g, "").toLowerCase(); //Para comprobrar si una frase o palabra es un palindromo, le quitamos los espacios y la ponemos en minisculas.
    const strReversed = newStr.split("").reverse().join("") //Invertimos la frase sin espacios.

    if (newStr === strReversed) {
        console.log("La frase o palabra si es un palindromo.") //Si es lo mismo invertido o no, es un palindromo.
    } else { 
        console.log("La frase o palabra no es un palindromo.");
    }
}


