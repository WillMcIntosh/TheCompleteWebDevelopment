<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Create Database from PHP</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <style>
      h1{
        color: purple;
      }
      .containingDiv {
        border:1px solid #7c73f6;
        margin-top: 50px;
        border-radius: 15px;
      }
    </style>

  </head>
  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-offset-1 col-sm-10 containingDiv">
          <h1>Create Database:</h1>
          <h3>Connect to server</h3>
<?php
// mysqli_connect ( host, username, pw, databasename )
$link = mysqli_connect("localhost", "willmcin_william", "#(?FF#Wvl5Ym") 
    or die("Error. Unable to connect: " . mysqli_connect_error());

var_dump($link); 

// check connection ( not needed because of or above )
// if(mysqli_connect_error()) {
//     die("Error. Unable to connect: " . mysqli_connect_error());
// }

echo "<p>Connected!</p>";
?>
          <h3>Create a database</h3>
<?php
// this doesn't work with cPanel and PHP myAdmin
$sql = "CREATE DATABASE IF NOT EXISTS willmcin_store";
if(mysqli_query($link, $sql)) {
    echo "<p>Database store was created</p>";
} else {
    echo "ERROR" . mysqli_error($link);
}
?>
        </div>
      </div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js">
    </script>
    <script src="js/bootstrap.min.js">
    </script>
  </body>
</html>

