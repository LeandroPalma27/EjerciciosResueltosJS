var palabra = "";

palabra = prompt("Ingresa una palabra para comprobar si es palindroma");

if (palabra.length > 0) {
    comproPalindromo(palabra);
} else {
    alert("¡Ingresa un dato!");
}

function comproPalindromo(cadena) {
    let palabra = cadena;
    let alReves = palabra.split("").reverse().join("");// Con esto, separamos cada cadena con un espacio vacio, la invertimos y volvemos a juntar la cadena respectivamente.
    if (alReves == palabra) { // Aca comprobamos si son palindromas
        alert('La palabra al reves es "' + alReves + '", por lo tanto si es palindroma.');
    } else {
        alert('La palabra al reves es "' + alReves + '.');
    }
}