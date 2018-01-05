<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Get and Post</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <style>
        h1{
            color: purple;
        }
    </style>
    
  </head>
  <body>
    <div class="container-fluid">
      <h1>Get and Post:</h1>
        <div>
<?php
// GET method displays in URL
echo "<h3>POST:</h3>";
print_r($_GET);
// check if form has been submitted
if($_GET["submit"]){
    echo "<p>The get form has been submitted.</p>";
}
// does username exist?
if($_GET["username"]) {
    echo "<p>Hi ". $_GET["username"] . ", Welcome. </p>";
}

// POST method
echo "<h3>POST:</h3>";
print_r($_POST);
if($_POST["submit"]) {
    echo "<p>POST form submitted.</p>";
    if($_POST["country"]) {
        echo "<p>Your country is: " . $_POST["country"] . "</p>";
    }
}
?>
        <form method="get">
            <label for="username">Username:</label>
            <input id="username" type="text" name="username">
            <input type="submit" name="submit" value="Submit">
        </form>
        <form method="post">
            <label for="country">Country:</label>
            <input id="country" type="text" name="country">
            <input type="submit" name="submit" value="Submit">
        </form>

        </div>
    </div>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js">
  </script>
  <script src="js/bootstrap.min.js">
  </script>
  </body>
</html>
