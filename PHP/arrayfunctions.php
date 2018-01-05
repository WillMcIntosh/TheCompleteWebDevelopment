<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Array Functions</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <style>
        h1{
            color: purple;
        }
    </style>
    
  </head>
  <body>
    <div class="container-fluid">
      <h1>Array Functions:</h1>
        <div>
<?php
$shoppingBasket1 = array("bread", "milk", "eggs", "bread");
$shoppingBasket2 = array("apple", "orange", "banana");
$shoppingBasket = array_merge($shoppingBasket1, $shoppingBasket2);
echo "<p>Shopping Basket</p>";
print_r($shoppingBasket);
echo "<p>Number of items: </p>" . count($shoppingBasket);
// count occurances of each value
$count = array_count_values($shoppingBasket);
echo "<p>Basket count: </p>";
print_r($count);
echo " <p>number of breads: </p>" . $count["bread"];
// check if array contains a value
if(in_array("bread", $shoppingBasket)) {
    echo "<p>There is bread in the basket</p>";
} else {
    echo "<p>There is no bread</p>";
}
// add yogurt to basket
array_push($shoppingBasket, "yogurt");
echo "<p>After adding yogurt: </p>";
print_r($shoppingBasket);

// add user items from form to basket
if($_GET["submit"]) {
    if($_GET["item"]) {
        array_push($shoppingBasket,$_GET["item"]);
    }
}

echo "<p>Shopping Basket: </p>";
print_r($shoppingBasket);

// remove or add items to an array
array_splice($shoppingBasket,0,2,array("mango", "kiwi"));
echo "<p>Shopping Basket: </p>";
print_r($shoppingBasket);

// sort in ascending order
sort($shoppingBasket);
echo "<p>Shopping Basket sorted ascending: </p>";
print_r($shoppingBasket);

// sort in decending order
rsort($shoppingBasket);
echo "<p>Shopping Basket sorted decending: </p>";
print_r($shoppingBasket);

$carmakes = array("BMW" => "X5","Audi" => "A6","Mercedes" => "CLS");
echo "<p>Car makes: </p>";
print_r($carmakes);

// sort in ascending order by value
asort($carmakes);
echo "<p>Car makes sorted in ascending order by val: </p>";
print_r($carmakes);
// sort in ascending order by keys
ksort($carmakes);
echo "<p>Car makes sorted in ascending order by key: </p>";
print_r($carmakes);
// can also use arsort and krsort for reverse orders
?>
            <form method="get">
              <label for="item"> Add to basket</label>
              <input type="text" name="item" id="item">
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
