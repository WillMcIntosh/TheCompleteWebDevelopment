<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>variables</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <style>
        h1{
            color: purple;
        }
    </style>
    
  </head>
  <body>
    <div class="container-fluid">
      <h1>Variables:</h1>
      <p>
<?php
// normal variables need a dollar sign at beginning
$name = "John";
$age = 33;
echo "My name is " . $name . ". I am " . $age . " years old.";
?>

<p>
<?php
// use define to declare a constant
define("COUNTRY", "USA");
echo "Flight Destination: " . COUNTRY;

?>
</p>
      </p>
    </div>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js">
  </script>
  <script src="js/bootstrap.min.js">
  </script>
  </body>
</html>
