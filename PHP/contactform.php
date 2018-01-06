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
// if user has submitted the form
    // check for errors
        // if errors
            // print msg
        // no errors
            // send the mail
                // if success
                    // print msg
                // fail
                    // print msg

// print result message

?>
          <form method="post">
            <div class="form-group">
              <label for="name">Name</label>
              <input class="form-control" type="text"
              name="name" id="name" placeholder="Name">
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input class="form-control" type="text"
              name="email" id="email" placeholder="email">
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea name="message" id="message" class="form-control" rows="5"></textarea>
            </div>
            <input class="btn btn-success btn-lg" type="submit" value="Send
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
