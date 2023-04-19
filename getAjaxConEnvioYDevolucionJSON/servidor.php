<?php
    
    // Declaración de variables
    $nombre = "Neyser";
    $tlf = "123";

    // Devolución de datos como JSON
    $data = array('nombre' => $nombre, 'tlf' => $tlf);
    
    echo json_encode($data);
    //echo $data;





?>