<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VDB</title>
</head>
<body id="pelicula">
    <?php
    //$idPelicula = $_GET['id'];
    $parametro = $_GET['parametro'];
    
    //echo $idPelicula;

    $data = file_get_contents("./lista.json");
    $videos = json_decode($data, false);




    if ($parametro == "total") {
        echo "Vacio";
    } else {
        echo "Lleno";
    }


    //for ($i=0; $i <$data.sizeof ; $i++) { 
    //    echo $data[$i];
    //}


    //$id = $data
    //$titulo = $data.titulo

    ?>
    <div class="col-md-6 col-xl-3 p-3" style="width: 18rem;">
            <a href="pelicula.php?id=001">
                <img id="001" src="img/001.jpg" class="card-img-top claseVideo1" name="nombreVideo1" alt="">
            </a>
            <div class="card-body">
              <h5 class="card-title">Blue Beetle</h5>
              <p class="card-text">Accion</p>
              <a href="#" class="btn btn-primary">Ver Pelicula</a>
            </div>
        </div>

        <div class="col-md-6 col-xl-3 p-3" style="width: 18rem;">
            <a href="pelicula.php?id=002">
                <img id="002" src="img/002.jpg" class="card-img-top claseVideo1" name="nombreVideo1" alt="">
            </a>
            <div class="card-body">
              <h5 class="card-title">The Pope's Exorcist</h5>
              <p class="card-text">Terror</p>
              <a href="#" class="btn btn-primary">Ver Pelicula</a>
            </div>
        </div>

        <div class="col-md-6 col-xl-3 p-3" style="width: 18rem;">
            <a href="pelicula.php?id=003">
                <img id="003" src="img/003.jpg" class="card-img-top claseVideo1" name="nombreVideo1" alt="">
            </a>
            <div class="card-body">
              <h5 class="card-title">Indiana Jones</h5>
              <p class="card-text">Aventura</p>
              <a href="#" class="btn btn-primary">Ver Pelicula</a>
            </div>
        </div>

        <div class="col-md-6 col-xl-3 p-3" style="width: 18rem;">
            <a href="pelicula.php?id=004">
                <img id="004" src="img/004.jpg" class="card-img-top claseVideo1" name="nombreVideo1" alt="">
            </a>
            <div class="card-body">
              <h5 class="card-title">Dune: Part Two</h5>
              <p class="card-text">Aventura</p>
              <a href="#" class="btn btn-primary">Ver Pelicula</a>
            </div>
        </div>

        <div class="col-md-6 col-xl-3 p-3" style="width: 18rem;">
            <a href="pelicula.php?id=005">
                <img id="005" src="img/005.jpg" class="card-img-top claseVideo1" name="nombreVideo1" alt="">
            </a>
            <div class="card-body">
              <h5 class="card-title">Mission: Impossible</h5>
              <p class="card-text">Accion</p>
              <a href="#" class="btn btn-primary">Ver Pelicula</a>
            </div>
        </div>

        <div class="col-md-6 col-xl-3 p-3" style="width: 18rem;">
            <a href="pelicula.php?id=006">
                <img id="006" src="img/006.jpg" class="card-img-top claseVideo1" name="nombreVideo1" alt="">
            </a>
            <div class="card-body">
              <h5 class="card-title">The Flash</h5>
              <p class="card-text">Accion</p>
              <a href="#" class="btn btn-primary">Ver Pelicula</a>
            </div>
        </div>

    <?php



/*
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

    }*/
    
    ?>


            
    
</body>
</html>