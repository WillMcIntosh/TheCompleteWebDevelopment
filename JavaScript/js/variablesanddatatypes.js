// use <C+w>10- to rezise this window 10 lines smaller

// window.alert("hello this works")

var x = 3;
// writes the value to the console from F12 developer tools
window.console.log(x);
// just another way of declaring a variable and then a value later
var y;
y = 5;
var z;
z = x + y;
window.console.log("the value of z is " + z);
window.console.log("the type of z is " + typeof(z));
z = x + " a " + y;
window.console.log("the value of z is " + z);
var greeting = "hello";
var firstname = "John";
var message = greeting + " " + firstname;
window.console.log("the value of message is " + message);

window.console.log("the type of message is " + typeof(message));
// check if x is equal to 3, which returns true
var check = (x==3);
window.console.log("the value of check is " + check);
window.console.log("the type of check is " + typeof(check));

var myArray = [1,2,3];
window.console.log(myArray);
window.console.log("the type of myArray is " + typeof(myArray));
