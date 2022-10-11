<?php
class Element implements IToJson
{
    private $name;
    private $description;
    private $idNum;
    private $isActive;
    private $priority;

    public function __construct($name, $description, $idNum, $isActive, $priority)
    {
        $this->name = $name;
        $this->description = $description;
        $this->idNum = $idNum;
        $this->isActive = $isActive;
        $this->priority = $priority;
    }

    /**
     * Get the value of name
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set the value of name
     *
     * @return  self
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get the value of description
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set the value of description
     *
     * @return  self
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get the value of idNum
     */
    public function getIdNum()
    {
        return $this->idNum;
    }

    /**
     * Set the value of idNum
     *
     * @return  self
     */
    public function setIdNum($idNum)
    {
        $this->idNum = $idNum;

        return $this;
    }

    /**
     * Get the value of isActive
     */
    public function getIsActive()
    {
        return $this->isActive;
    }

    /**
     * Set the value of isActive
     *
     * @return  self
     */
    public function setIsActive($isActive)
    {
        $this->isActive = $isActive;

        return $this;
    }


    /**
     * Get the value of priority
     */
    public function getPriority()
    {
        return $this->priority;
    }

    /**
     * Set the value of priority
     *
     * @return  self
     */
    public function setPriority($priority)
    {
        $this->priority = $priority;

        return $this;
    }
    public function toJson($archivo)
    {
        $data = json_encode(get_object_vars($this));
        echo "Previsualizacion del JSon:" . $data . "<br>";
        return $data;
    }
    public function writeJson($object, $ruta)
    {
        $data = $object->toJson($object);
        if (fopen($ruta, "r")) {
            $datosNuevos = file_get_contents($ruta);
            $datosNuevos .= $data . ",";
            file_put_contents($ruta, $datosNuevos);
            echo ("Datos guardados en " . $ruta);
        }
        else {
            echo ("El archivo no esta");
        }

    }
}