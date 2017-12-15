<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>While loops</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <style>
        h1{
            color: purple;
        }
    </style>
    
  </head>
  <body>
    <div class="container-fluid">
      <h1>While loops:</h1>
        <div>
<?php
$i = 1;
// standard while loop
while($i < 10) {
    echo $i . "<br>";
    $i++;
}
// over an array
$carmakes = array("BMW", "Audi", "Mercedes");
$j = 0;
while ($j < 3){
    echo $carmakes[$j] . "<br>";
    $j++;
}
?>

        </div>
    </div>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js">
  </script>
  <script src="js/bootstrap.min.js">
  </script>
  </body>
</html>
