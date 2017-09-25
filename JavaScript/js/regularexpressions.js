// to ensure that the user input contains at least one digit, for example, use a  
// regex


var str = "$10,000.57";
// for a simple global search for the letter 'a':
//var pattern = /a/g; 

//i used for case insensitive search, g for global ( sensitive)

// for any letter between a and z
// var pattern =/[a-z]/g;


// for all characters not in this pattern
// var pattern =/[^atn]/g;

//for digits between 4 and 7
var pattern =/[4-7]/g;

//for any digits
var pattern =/\d/g;

//for any alphanumeric characters
var pattern =/\w/g;

//for all special characters
var pattern =/\W/g;

//for a space
var pattern =/\s/g;

//for 4 digits in a row
var pattern =/\d{4}/g;

//does string have 'A' as  the first character
var pattern = /^A/g;

//for a line break character 
var pattern =/\n/g;

//my test of $ values
var pattern = /\D\d\d$/ 


/*
 * to define pattern with a constructor: 
 * var pattern = new RegExp("a","g");
 */

// use a string search for 'pattern' and return the first position
// where that pattern was found
// window.alert(str.search(pattern));

// window.alert(str.match(pattern));

// using test method

//returns a boolean if the pattern is in str
//window.alert(pattern.test(str));

document.getElementById("string").innerHTML =
    str;
document.getElementById("pattern").innerHTML =
    pattern;
document.getElementById("search").innerHTML =
    str.search(pattern);
document.getElementById("match").innerHTML =
    str.match(pattern);
document.getElementById("test").innerHTML =
    pattern.test(str);
