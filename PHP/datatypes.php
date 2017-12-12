<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>data types</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <style>
        h1{
            color: purple;
        }
    </style>
    
  </head>
  <body>
    <div class="container-fluid">
      <h1>Strings: </h1>
      <div>
<?php
$name = "Peter";
echo 'Name: ' . $name . '<br>';
$string = "Peter's nice";
echo $string . "<br>";
// can use variables in strings only with double quotes
$string2 = "My friend $name is nice";
echo $string2;
?>
      </div>
      <h1>Integers and Floats: </h1>
      <div>
<?php
$x =7;
echo $x;
// for more info about a variable
echo "<br>";
var_dump($x);
$y = 3;
$z = $x + $y;
echo "<br>";
echo ($z);
// or for hex
$a = 0x1A;
echo "<br>";
var_dump($a);
$w = 0123;
echo "<br>";
var_dump($w);
$floatingNum = 3.7;
echo "<br>";
var_dump($floatingNum);

?>
      </div>
      <h1>Booleans: </h1>
      <div>
<?php
$boolVar1 = (5<6);
$boolVar2 = (5<3);
// will only be true if both are true
$boolVar3 = $boolVar1 && $boolVar2;
// will be true if one or other is true
$boolVar4 = $boolVar1 || $boolVar2;

var_dump($boolVar1);
echo "<br>";
var_dump($boolVar2);
// AND
echo "<br>";
var_dump($boolVar3);
// OR
echo "<br>";
var_dump($boolVar4);
// for a NOR use !
echo "<br>";
var_dump(!$boolVar4);

?>

      </div>
      <h1>Arrays</h1>
      <div>

<?php
// indexed or numeric arrays
$carmakes = array("audi", "bmw", "mercedes");
echo "<p>Car Makes:</p>";
print_r($carmakes);
echo "<br>";
// use [] for index notation
echo $carmakes[1];
// for an array with keys
$shoppingBasket = array("a"=>"bread","b"=>"milk", "c"=>"eggs");
echo "<p>Shopping Basket:</p>";
print_r($shoppingBasket);
echo "<br>";
var_dump($shoppingBasket);
// if you swap elements, the array is still considered equal
$shoppingBasket2 = array("b"=>"milk","a"=>"bread", "c"=>"eggs");
echo "<p> Shopping Basket 1 vs Shopping Basket 2</p>";
var_dump($shoppingBasket == $shoppingBasket2);
echo"<p>Check for === </p>";
// not considered identical
var_dump($shoppingBasket === $shoppingBasket2);
// for not equals you can use <> or !=
// to concatenate use +
?>
      </div>
      <h1>Objects</h1>
      <div>
<?php
// as a template to create objects like a constructor
class car {
  //properties
  public $make = "ford"; // public makes this prop accessible outside the class
  private $status = "off"; // not able to access outside the class
// if you don't specify, by default a property is public  
  
  //methods
  function turn_on(){
    $this -> status = "on";
  }
  // to show a private prop outside the class, we can use a method
  function getStatus(){
    return $this -> status;
  }
}

$myCar = new car;
var_dump($myCar);
echo "<br>";
echo $myCar -> make;
echo "<br>";
// cannot access a private property this way
// echo $myCar -> status;
// to access the private property
echo "<br>";
echo $myCar -> getStatus();
// to access a method
$myCar -> turn_on();
echo "<br>";
var_dump($myCar);
?>
      </div>
      <h1>NULL</h1>
      <div>
<?php
$nothingHere;
var_dump($nothingHere);
echo "<br>";
$nothingHere = 5;
var_dump($nothingHere);
// can empty a variable by setting to null
echo "<br>";
$nothingHere = null;
var_dump($nothingHere);
?>
      </div>
      <h1>Resources:</h1>
      <div>
<?php
?>
      </div>
      <h1>Resources</h1>
      <div>
<?php
$myFile = fopen("sometext.txt", "r");
var_dump($myFile);
echo "<br>";
echo fread($myFile, 20);
// read whole file
echo "<br>";
echo fread($myFile, filesize("sometext.txt"));
?>
      </div>

    </div>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js">
  </script>
  <script src="js/bootstrap.min.js">
  </script>
  </body>
</html>
