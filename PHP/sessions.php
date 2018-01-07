<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sessions</title>
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
          <h1>Sessions:</h1>
<?php
// start a session
session_start();
// store some data
$_SESSION["firstname"] = "Mark";
$_SESSION["lastname"] = "Zuckerberg";
$firstname = $_SESSION["firstname"];
$lastname = $_SESSION["lastname"];

echo "<p>Hi $firstname $lastname!</p>";

// remove data from session

if(isset($_SESSION["firstname"])) {
    unset($_SESSION["firstname"]);
}

echo $_SESSION["firstname"]?1:0;

// destroy a session!
session_destroy();
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
