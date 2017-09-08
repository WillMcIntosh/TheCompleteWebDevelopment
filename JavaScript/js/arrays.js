// use <C+w>10- to rezise this window 10 lines smaller

// window.alert("hello this works")

var shoppingList = ['bread', 'eggs', 'milk'];

//to add the array to the end of the paragraph
document.getElementById('myParagraph').innerHTML += ' <br />' + shoppingList;

// to call a single item from an array
document.getElementById('myParagraph').innerHTML += '<br />' + shoppingList[0];

// to make the code more readable, we can just create a function 
function showResult(x){
    document.getElementById('myParagraph').innerHTML += '<br />' + x;
}

// both of the previous examples can be replaced by: 
showResult(shoppingList);
showResult(shoppingList[0]);

// to change a single item in an array
shoppingList[1] = 'yogurt';
showResult(shoppingList);

//to delete an item
delete shoppingList[1];
showResult(shoppingList);
//this leaves the index in place, but now it is undefined
// window.alert(shoppingList[1]);

// Splice
// to delete the item completely:
shoppingList[1] = 'yogurt';
showResult(shoppingList);
// starting at index 1, delete 2 items and remove that index
shoppingList.splice(1,2);
showResult(shoppingList);
// starting at index 0, add these two items and delete none
shoppingList.splice(0,0,'orange','apple');
showResult(shoppingList);

// sort method
//
// alphabetical order
shoppingList.sort();
showResult(shoppingList);

// to reverse the order
shoppingList.reverse();
showResult(shoppingList);

var myString = 'ABCDEFG';
// get an array of elements from each character in the string including spaces
var myArray = myString.split('');

var secondString = 'what is the weather like?';
// will give an array of elements made up of the words separated by spaces
// maximum of two items from the 2 argument after the ' '
var secondArray = secondString.split(' ', 2);
// sort works with numbers too
var derpList = [3 , 4 , 5, 6, 1];

var orderedDerpList = derpList.sort();

showResult(orderedDerpList);
// arrays are a type of object, so there is a constructor to create arrays
// It is better to use the first way to avoid using constructors(?)

// var shoppingList2 = new Array('bread','bacon','milk');

// document.getElementById('myParagraph').innerHTML = shoppingList2;
