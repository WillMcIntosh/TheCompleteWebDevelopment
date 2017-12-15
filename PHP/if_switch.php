<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>If and Switch Statements</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <style>
        h1{
            color: purple;
        }
    </style>
    
  </head>
  <body>
    <div class="container-fluid">
      <h1>If else and switch:</h1>
        <div>
<?php
$believeinyourdream = false;
// curly brackets not necessary but are helpful for readablility
if($believeinyourdream) {
    echo "<p>You will be successful. </p>";
} else{
    echo "<p>You won't</p>";
}

$x = ($believeinyourdream)?"A":"B";
echo $x;

$temperature = 25;
if ($temperature<15) {
    echo "<p>it is cold</p>";
}elseif ($temperature>30) {
    echo "<p>it is hot</p>";
}else {
    echo "<p> the temperature is medium</p>";
}

// switches

$strength = "belief";
switch ($strength) {
    case "belief":
        echo "stuff";
        break;
    case "communication":
        echo "other stuff";
        break;
    default:
        echo "no stuff";
        break;
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
