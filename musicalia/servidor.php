<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

        <?php
            $id = $_GET["id"];
            // $pista = $_GET["pista"];
            // $logo = $_GET["logo"];
            echo $id;
        ?>

        <div>
            <h2>Nombre del artista</h2>
        </div>
        <div>
            <img id='<?php echo $id; ?>' src='./img/<?php echo $id; ?>.jpg' width='30%'>
        </div>



        <div>
            <audio controls>
                <source src='./music/<?php echo $id; ?>.mp3' type='audio/mpeg' width='20%'>
                Este navegador no puede reproducir el audio seleccionado
            </audio>
        </div>

</body>
</html>