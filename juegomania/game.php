<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VDB</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css">
</head>
<body id="pelicula" class="bg-black">
    <?php
    $idPelicula = $_GET['id'];
    $parametro = $_GET['id'];
    
    //echo $idPelicula;

    $data = file_get_contents("./lista.json");
    $games = json_decode($data, false);


    //print_r($games);

/*
    if ($parametro == "total") {
        echo "Vacio";
    } else {
        echo "Lleno";
    }*/


    //for ($i=0; $i <$data.sizeof ; $i++) { 
    //    echo $data[$i];
    //}


    //$id = $data
    //$titulo = $data.titulo




    foreach($games as $video){

        if ($video->id == $idPelicula) {

            $id = $video->id;
            $titulo = $video->titulo;
            $director = $video->director;
            $protagonista = $video->protagonista;
            $genero = $video->genero;
            $ruta = $video->ruta;
            ?>

            <section class="container text-center text-light">
            <h1>
            Juego: <?php echo $titulo; ?>
            </h1>

            <h4>
            Categoria: <?php echo $director; ?>
            </h4>

            <h4>
            Autoria: <?php echo $protagonista; ?>
            </h4>

            <div>
            Genero: <?php echo $genero; ?>
            </div>
            
           

            <div>
                <a href=<?php echo $ruta; ?> download=<?php echo $titulo; ?>>Descargar</a>
         
            </div>

            <video width="80%" controls="controls" autoplay="autoplay" loop="loop" >
                <source src=<?php echo $ruta; ?>   type="video/mp4" width='20%' >
                Este navegador no puede reproducir el audio seleccionado
                </source>
            </video> 

            </section>

            



            

            <?php

        } else{
            
        }

    }
    
    ?>


            
    
</body>
</html>