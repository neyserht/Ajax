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
            $pista = $_GET["pista"];
            
            //$c1 = $_GET['p1'];
            $nomPista = "./music/".$pista.".mp3";
            ?>

            <div >
                <audio id="audio" controls autoplay>
                    <source src=<?php echo $nomPista; ?> type='audio/mpeg' width='20%' >
                    Este navegador no puede reproducir el audio seleccionado
                </audio>
            </div>
    


</body>
</html>