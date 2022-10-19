<?php
require "./vendor/autoload.php";
use ElementoPHP\Element;

isset($_POST["name"]) ? $usr_name = $_POST["name"] : null;
isset($_POST["id_descript"]) ? $usr_descript = $_POST["id_descript"] : null;
isset($_POST["id_num"]) ? $usr_id_num = $_POST["id_num"] : null;
isset($_POST["status"]) ? $usr_status = $_POST["status"] : false;
isset($_POST["priority"]) ? $usr_priority = $_POST["priority"] : $usr_priority = "Baja";


$elemento = new Element($usr_name, $usr_descript, $usr_id_num, $usr_status, $usr_priority);
$elemento->writeJson($elemento, "elementos.txt");