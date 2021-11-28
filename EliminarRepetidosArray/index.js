var cadena = "Emilio,Leandro,Juan,Rodrigo,Linus,Emilio,Linus";
var arregloElementos = [];


arregloElementos = cadena.split(",");
console.log(arregloElementos);
var noRepetidos = [... new Set(arregloElementos)];
console.log(noRepetidos);

