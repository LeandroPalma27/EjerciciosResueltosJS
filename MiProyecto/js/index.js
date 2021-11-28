function mostrarHelados() {
    let dinero = document.getElementById("inputDinero").value; //Con value se obtiene el valor un elemento
    var heladosDisponibles = function (dinero) {
        if (dinero >= 0.6 && dinero < 1) {
            let labelH41 = document.getElementById("dineroYalcance");
            labelH41.innerHTML = "Le alcanza hasta helado 1";
        } else if (dinero >= 1 && dinero < 1.6) {
            let labelH41 = document.getElementById("dineroYalcance");
            labelH41.innerHTML = "Le alcanza hasta helado 2";
        } else if (dinero >= 1.6 && dinero < 1.7) {
            let labelH41 = document.getElementById("dineroYalcance");
            labelH41.innerHTML = "Le alcanza hasta helado 3";
        } else if (dinero >= 1.7 && dinero < 1.8) {
            let labelH41 = document.getElementById("dineroYalcance");
            labelH41.innerHTML = "Le alcanza hasta helado 4";
        } else if (dinero >= 1.8 && dinero < 2.9) {
            let labelH41 = document.getElementById("dineroYalcance");
            labelH41.innerHTML = "Le alcanza hasta helado 5";
        } else if (dinero >= 2.9) {
            let labelH41 = document.getElementById("dineroYalcance");
            labelH41.innerHTML = "Le alcanza hasta helado 6 y 7, o cualquier helado";
        } else {
            let labelH41 = document.getElementById("dineroYalcance");
            labelH41.innerHTML = "Eres pobre";
        }
    }
    if (dinero == "" || dinero == 0) {
        alert("¡Ingrese su dinero!");
    } else {
        heladosDisponibles(dinero);
    }
}

function imprimirCompra() {
    var select = document.getElementById("helados"); //Obtenemos el select
    var valueSelect = select.options[select.selectedIndex].value; //obtenemos las opciones del select (va cambiando en funcion de donde se marque el combo)
    let dinero = document.getElementById("inputDinero").value;
    var compraRe = function (dinero, valueSelect) {
        let money = dinero; //Se almacena en nuevos datos para no modificar los parametros de la funcion (programacion funcional)
        let value = valueSelect;
        let labelH41 = document.getElementById("dineroYalcance");
        if (value == "Helado 1") {
            money = money - 0.6;
            if (money > 0) { //Para comprobar que haya vuelto 
                labelH41.innerHTML = "Compro helado 1, su vuelto es de " + money;
            } else {
                labelH41.innerHTML = "Compro helado 1";
            }
        } else if (value == "Helado 2") {
            money = money - 1;
            if (money > 0) {
                labelH41.innerHTML = "Compro helado 2, su vuelto es de " + money;
            } else {
                labelH41.innerHTML = "Compro helado 2";
            }
        } else if (value == "Helado 3") {
            money = money - 1.6;
            if (money > 0) {
                labelH41.innerHTML = "Compro helado 3, su vuelto es de " + money;
            } else {
                labelH41.innerHTML = "Compro helado 3";
            }
        } else if (value == "Helado 4") {
            money = money - 1.7;
            if (money > 0) {
                labelH41.innerHTML = "Compro helado 4, su vuelto es de " + money;
            } else {
                labelH41.innerHTML = "Compro helado 4";
            }
        } else if (value == "Helado 5") {
            money = money - 1.8;
            if (money > 0) {
                labelH41.innerHTML = "Compro helado 5, su vuelto es de " + money;
            } else {
                labelH41.innerHTML = "Compro helado 5";
            }
        } else if ((value == "Helado 6" || value == "Helado 7")) {
            money = money - 2.9;
            if (value == "Helado 6") {
                if (money > 0) {
                    labelH41.innerHTML = "Compro helado 6, su vuelto es de " + money;
                } else {
                    labelH41.innerHTML = "Compro helado 6";
                }
            } else if (value == "Helado 7") {
                if (money > 0) {
                    labelH41.innerHTML = "Compro helado 7, su vuelto es de " + money;
                } else {
                    labelH41.innerHTML = "Compro helado 7";
                }
            }
        } else {
            let labelH41 = document.getElementById("dineroYalcance");
            labelH41.innerHTML = "XD";
        }
    }
    if (dinero == "" || dinero == 0) {
        alert("¡Ingrese su dinero!");
    } else {
        compraRe(dinero, valueSelect);
    }
}

