## Profesora molesta

Una profesora de programacion, cansada de que sus alumnos lleguen tarde a clase, decide pedirle a un alumno que realice un programa que le permita ingresar los horarios de llegada del dia a traves de un arreglo de dias, representado de la siguiente manera:

diaLunes = [1, 0, 0, -4, 6]; 

Donde los numeros positivos son los minutos de tardanza por un alumno en particular, los neutros quieren decir que llegaron a la hora exacta y los negativos que llegaron tarde.

Tambien, el programa debe permitir ingresar un valor entero que representa la cantidad minima de alumnos que llegan a tiempo (negativos y neutros) para poder abrir la clase.

La llamda al programa seria de la siguiente manera: miPrograma([diaLunes,diaMartes,diaMiercoles], 4);.

Si la cantidad de alumnos que llegaron a tiempo iguala o supera a la cantidad minima de de alumnos necesarios para abrir la clase, el programa debe devolver true. En caso contrario, debe devolver false.

Respuesta esperada de lo siguiente (ejemplo):

var registroLunes, registroMartes, registroMiercoles = [];
registroLunes = [1, 1, 11, 0]; //false
registroMartes = [0, 0, 10, 0]; //true
registroMiercoles = [6, 1, 11, 5]; //false

Respuesta: [false,true,false]