
const searchInput = document.querySelector("#searchInput");
const searchForm = document.querySelector("#searchForm");
window.onload = crearTabla;
function introSubmit(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        searchForm.submit();
    }
}
function crearTabla() {
    const JSon = [{
        "name": "Motor trivolution",
        "descript": "Una maquina muy powerful y eficiente",
        "id_num": "109235-X2",
        "status": true,
        "priority": "High"
    }]
    let tableBody = document.querySelector("#tableBody");
    let columnaNueva = document.createElement('tr');
    let botonTabla = document.createElement('input');
    botonTabla.type = "button";
    botonTabla.value = "Borrar";
    botonTabla.setAttribute("onclick", "borrarFila(this)");

    let nombreTabla = document.createElement('td');
    nombreTabla.innerHTML = JSon[0].name;
    let descripTabla = document.createElement('td');
    descripTabla.innerHTML = JSon[0].descript;
    let idTabla = document.createElement('td');
    idTabla.innerHTML = JSon[0].id_num;
    let statusTabla = document.createElement('td');
    statusTabla.innerHTML = JSon[0].status;
    let priorityTabla = document.createElement('td');
    priorityTabla.innerHTML = JSon[0].priority;

    columnaNueva.appendChild(botonTabla);
    columnaNueva.appendChild(nombreTabla);
    columnaNueva.appendChild(descripTabla);
    columnaNueva.appendChild(idTabla);
    columnaNueva.appendChild(statusTabla);
    columnaNueva.appendChild(priorityTabla);
    tableBody.appendChild(columnaNueva);

} function borrarFila(b) {
    var i = b.parentChild;
    tableBody.deleteRow(i);
}

