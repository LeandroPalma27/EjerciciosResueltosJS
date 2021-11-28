var cuerpoTabla = document.getElementById("tablaBody");
document.querySelector("#btnJson").addEventListener("click", function (e) {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "miJSON.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText);
            cuerpoTabla.innerHTML = "";
            for (let item of data) {
                cuerpoTabla.innerHTML += `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.nombre}</td>
                    <td>${item.edad}</td>
                    <td>${item.generoH}</td>
                    <td>${item.telefono}</td>
                </tr>
                `;
            }
        }
    };
});
document.getElementById("btnLimpiar").addEventListener('click', function (e) {
    if (cuerpoTabla.textContent == '') {
        alert('Cree su tabla primero.');
    }
    cuerpoTabla.innerHTML = '';
});
