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
          <h3>Send data to DB:</h3>
<?php
// define all user inputs
$id = $_POST["ID"];
$firstname = $_POST["firstname"];
$lastname = $_POST["lastname"];
$email = $_POST["email"];
$password = $_POST["password"];

// error messages
$missingFirstname = "<p><strong>Please enter your firstname</strong></p>";
$missingLastname = "<p><strong>Please enter your lastname</strong></p>";
$missingEmail = "<p><strong>Please enter your email</strong></p>";
$invalidEmail = "<p><strong>Please enter a valid email</strong></p>";
$missingPassword = "<p><strong>Please enter a password</strong></p>";

// check for errors
if($_POST["submit"]) {
  if(!$firstname) {
    $errors .= $missingFirstname;
  } else {
    $firstname = filter_var($firstname, FILTER_SANITIZE_STRING);
  }

  if(!$lastname) {
    $errors .= $missingLastname;
  } else {
    $lastname = filter_var($lastname, FILTER_SANITIZE_STRING);
  }

  if(!$email) {
    $errors .= $missingEmail;
  } else {
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $errors .= $invalidEmail;
    }
  }

  if(!$password) {
    $errors .= $missingPassword;
  } 

  if($errors) {
    $resultsMessage = '<div class="alert alert-danger">' . $errors . '</div>';
    echo $resultsMessage;
  }
}
?>
          <form method="post">
            <div class="form-group">
              <label for="ID">ID:</label>
              <input type="number" id="ID" placeholder="ID"
              class="form-control" name="ID" maxlength="4">
            </div>
            <div class="form-group">
              <label for="firstname">Firstname:</label>
              <input type="text" id="firstname" placeholder="Firstname"
              class="form-control" name="firstname"  maxlength="20">
            </div>
            <div class="form-group">
              <label for="lastname">Lastname:</label>
              <input type="text" id="lastname" placeholder="Lastname"
              class="form-control" name="lastname"  maxlength="20">
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" placeholder="Email" 
              class="form-control" name="email"  maxlength="30">
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" id="password" placeholder="Password"
              class="form-control" name="password"  maxlength="40">
            </div>
            <input type="submit" name="submit" class="btn btn-success 
            btn-lg" value="Send data">
          </div>
        </div>
      </div>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js">
      </script>
      <script src="js/bootstrap.min.js">
      </script>
    </body>
</html>
