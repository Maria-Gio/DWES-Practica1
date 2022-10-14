<?php
require_once("./ws/interfaces/IToJson.php");
require_once("./ws/models/Element.php");



$usr_name = $_POST["name"];
$usr_descript = $_POST["descript"];
$usr_id_num = $_POST["id_num"];
$usr_status = $_POST["status"];
$usr_priority = $_POST["priority"];

if ($_POST["status"] == "on") {
    $usr_status = true;
}
else {
    $usr_status = false;
}

$elemento = new Element($usr_name, $usr_descript, $usr_id_num, $usr_status, $usr_priority);
$elemento->writeJson($elemento, "elementos.txt");