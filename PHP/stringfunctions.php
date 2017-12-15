<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>String Functions</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <style>
        h1{
            color: purple;
        }
    </style>
    
  </head>
  <body>
    <div class="container-fluid">
      <h1>String Functions:</h1>
      <div>
<?php
$message = "hello, welcome to a website.";
echo $message . "<br>";
// for length of a string
echo "Length of my message: " . strlen($message) . "<br>";
// word count
echo "message word count: " . str_word_count($message) . "<br>";
// replace stuff in a string (doesn't change original)
echo str_replace("website", "world", $message, $numberReplaced);
echo "<br>";
echo "number of words replaced: " . $numberReplaced . "<br>";
echo "Can you read backwards? " . strrev($message);
?>
      </div>

    </div>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js">
  </script>
  <script src="js/bootstrap.min.js">
  </script>
  </body>
</html>
