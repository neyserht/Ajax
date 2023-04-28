<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VDB</title>
</head>
<body>
    <?php
    $idPelicula = $_GET['id'];
    
    //echo $idPelicula;

    $data = file_get_contents("./lista.json");
    $videos = json_decode($data, false);

    //$id = $data
    //$titulo = $data.titulo

    foreach($videos as $video){

        if ($video->id == $idPelicula) {

            $id = $video->id;
            $titulo = $video->titulo;
            $director = $video->director;
            $protagonista = $video->protagonista;
            $genero = $video->genero;
            $ruta = $video->ruta;
            ?>

            <h1>
            Titulo: <?php echo $titulo; ?>
            </h1>

            <h2>
            Director: <?php echo $director; ?>
            </h2>

            <h2>
            Protagonista: <?php echo $protagonista; ?>
            </h2>

            <div>
            Genero: <?php echo $genero; ?>
            </div>
            
            <div>
            Ruta: <?php echo $ruta; ?>
            </div>

            <video width="80%" controls="controls" autoplay="autoplay" loop="loop" >
                <source src=<?php echo $ruta; ?>   type="video/mp4" width='20%' >
                Este navegador no puede reproducir el audio seleccionado
                </source>
            </video> 

            <?php

        } else{
            
        }

    }
    
    ?>

        <!-- <video width="80%" controls="controls" autiplay="autoplay" loop="loop" >
            <source src=<?php echo $datos; ?>   type="video/mp4" width='20%' >
            Este navegador no puede reproducir el audio seleccionado
            </source>
        </video> -->
            
    
</body>
</html>