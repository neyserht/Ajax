<?php
    
    // Recepcion de los datos con JSON
    header('Content-Type: application/json; charset=utf-8');

    // Cuando es true, los bjetos JSON devueltos seran converids a arrays asociativos
    // Cuando es false, los bjetos JSON devueltos seran converids a objetos
    
    $datosJSON1 = json_decode($_GET['datosJSON1'], false);
    $argumento = "Nombre: " . $datosJSON1->nom;
    $tlf = "Telefono: " . $datosJSON1->tlf;


    // Devolución de datos como JSON
    $datos = array('nom' => $nom, 'tlf' => $tlf);
    
    echo json_encode($datos);
    //echo $data;





?>