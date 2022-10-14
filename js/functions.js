
const searchInput = document.querySelector("#searchInput");
const searchForm = document.querySelector("#searchForm");

window.onload = crearTabla;

function introSubmit(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        searchForm.submit();
    }
}
const JSon = [{
    "name": "Motor trivolution",
    "descript": "des1",
    "id_num": "109235-X2",
    "status": true,
    "priority": "High"
}, {
    "name": "Motor protolution",
    "descript": "des2",
    "id_num": "109235-X2",
    "status": true,
    "priority": "High"
}, {
    "name": "Motor putalution",
    "descript": "des3",
    "id_num": "109235-X2",
    "status": true,
    "priority": "High"
}]
function checkInput() {
    if (searchInput.value.length > 3) {

        filtrar();
    } else {
        crearTabla();
    }
}
function crearTabla() {
    const tbody = document.querySelector("#tableBody");
    tbody.innerHTML = "";

    for (i = 0; i < JSon.length; i++) {
        let fila = `<tr id="fila${i}">
            <td><button id="${i}"onclick="deleteRow(this)">Borrar</button ></td>
            <td>${JSon[i].name}</td>
            <td>${JSon[i].descript}</td>
            <td>${JSon[i].id_num}</td>
            <td>${JSon[i].status}</td>
            <td>${JSon[i].priority}</td>
            </tr>`
        tbody.innerHTML += fila;
    }

}

function deleteRow(button) {
    let id = button.id;
    document.querySelector("#fila" + id).remove();
}
function filtrar() {
    let text = searchInput.value.toLowerCase();
    let myTr = document.querySelectorAll("tr");

    if (text.length < 3) {
        return;
    }

    for (let tdAt of myTr) {
        let attrDescript = tdAt.children[2].innerText;
        let AttrName = tdAt.children[1].innerText;

        if (attrDescript.toLowerCase().includes(text) || AttrName.toLowerCase().includes(text)) {
            tdAt.style.backgroundColor = "blue"
        } else {
            tdAt.style.backgroundColor = "transparent";
        }
    }
}






