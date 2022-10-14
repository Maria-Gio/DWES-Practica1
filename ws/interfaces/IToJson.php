<?php
interface IToJson
{

    public function toJson($archivo);
    public function writeJson($object, $ruta);
}