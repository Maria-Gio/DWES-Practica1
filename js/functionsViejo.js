
const searchInput = document.querySelector("#finderInput");
//const searchInputValue = document.querySelector("#finderInput").value;
const searchForm = document.querySelector("#searchForm");
const buildForm=document.querySelector("#formulario");
let formName = document.querySelector("#p_name").value;
let formDescript = document.querySelector("#p_descript").value;
let formID = document.querySelector("#p_id_num").value;
let formStatus=document.querySelector("#p_status").value;
let formPriority=document.getElementsByName("priority").value;
//('[name="priority"]').value;


buildForm.addEventListener('submit', crearObjeto())
searchInput.addEventListener('keypress', (event) => introSubmit());
function introSubmit(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        searchForm.submit();
    }
}
function crearObjeto(){
const formdata = {
    "usr_name": formName,
    "usr_descript": formDescript,
    "usr_id_num": formID,
    "usr_status": formStatus,
    "usr_priority": formPriority
}
console.log(formName);
}

