<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Introduction</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <style>
      h1{
        color: purple;
      }
      h3 {
        color: teal;
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
          <h1>Connect to Database:</h1>
<?php
// mysqli_connect ( host, username, pw, databasename )
// $link = mysqli_connect("localhost", "willmcin_william", "#(?FF#Wvl5Ym", 
//     "willmcin_users") or die("Error. Unable to connect: 
//     " . mysqli_connect_error());
//
//
// echo "<p>Connected!</p>";
?>
          <form method="post">
            <div class="form-group">
              <input id="ID" class="form-control" type="">
            </div>
          </form>  
        </div>
      </div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js">
    </script>
    <script src="js/bootstrap.min.js">
    </script>
  </body>
</html>
