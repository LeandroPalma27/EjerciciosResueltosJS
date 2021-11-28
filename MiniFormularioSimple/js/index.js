function obtenerData() {
    var usuario, selectOption, option, incidencia, contraseña;
    usuario = document.getElementById("usu").value;
    contraseña = document.getElementById("pass").value;
    incidencia = document.getElementById("incidencia").value;
    selectOption = document.getElementById("departamentos");
    option = selectOption.options[selectOption.selectedIndex].value;
    if (usuario.length > 0 && contraseña.length > 0 && incidencia.length > 0) {
        let jsonString = {};
        jsonString.usuario = usuario;
        jsonString.departamento = option;
        jsonString.incidencia = incidencia;
        jsonString.contraseña = contraseña;
        let json = JSON.stringify(jsonString);
        //Con este codigo podemos crear un json a partir de varaibles comunes, 
        //para poder gestionar mejor la data.
        alert(json);
    } else{
        alert("¡Ingrese datos!");
    }
}

function reseteoDatos() {
    document.getElementById("usu").value = '';
    document.getElementById("incidencia").value = '';
    document.getElementById("pass").value = '';
    //Este es el metodo que me permitio resetar datos del formulario.
}