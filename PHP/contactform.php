<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Contact Form</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <style>
      h1{
        color: purple;
      }
      .contactForm {
        border:1px solid #7c73f6;
        margin-top: 50px;
        border-radius: 15px;
      }
    </style>

  </head>
  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-offset-1 col-sm-10 contactForm">
          <h1>Contact us:</h1>
<?php
// get user input
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

// error messages
$errors = '';
$missingName = '<p><strong>Please enter your name!</strong></p>';
$missingEmail = '<p><strong>Please enter your email address!</strong></p>';
$invalidEmail = '<p><strong>Please enter a valid email address!</strong></p>';
$missingMessage = '<p><strong>Please enter a message!</strong></p>';
// if user has submitted the form
if($_POST["submit"]) {
  // check for errors
  if(!$name) {
    $errors .= $missingName;
  } else {
    $name = filter_var($name,FILTER_SANITIZE_STRING);
  }
  if(!$email) {
    $errors .= $missingEmail;
  } else {
    $email = filter_var($email,FILTER_SANITIZE_EMAIL);
    if(!filter_var($email,FILTER_VALIDATE_EMAIL)) {
      $errors .= $invalidEmail;
    }
  }
  if(!$message) {
    $errors .= $missingMessage;
  } else {
    $message = filter_var($message,FILTER_SANITIZE_STRING);
  }
  // if errors
  if($errors) {
    // print msg
    $resultsMessage = '<div class="alert alert-danger">' . $errors .'</div>';
  }
        // no errors
            // send the mail
                // if success
                    // print msg
                // fail
                    // print msg

// print result message
  echo $resultsMessage;
}
?>
          <form action="contactform.php" method="post">
            <div class="form-group">
              <label for="name">Name</label>
              <input class="form-control" type="text"
                name="name" id="name" placeholder="Name" 
                value="<?php echo $_POST["name"];?>">
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input class="form-control" type="text"
                name="email" id="email" placeholder="email" 
                value="<?php echo $_POST["email"];?>">
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea name="message" id="message" 
                class="form-control" rows="5"><?php echo $_POST["message"];?>
              </textarea>
            </div>
            <input class="btn btn-success btn-lg" type="submit" name="submit" value="Send
            Message">
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
