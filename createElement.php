<?php
require_once("./ws/interfaces/IToJson.php");
require_once ("./ws/models/Element.php");

$usr_name=$_POST["name"];
$usr_descript=$_POST["descript"];
$usr_id_num=$_POST["id_num"];
$usr_status=$_POST["status"];
$usr_priority=$_POST["priority"];
echo $usr_name;
echo $usr_descript;
echo $usr_id_num;

    
$elemento = new Element($usr_name,$usr_descript,$usr_id_num,$usr_status,$usr_priority);
var_dump($elemento);

    
