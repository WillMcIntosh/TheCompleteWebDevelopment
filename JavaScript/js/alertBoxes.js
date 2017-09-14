// window.alert("Hello");

var acceptCookies = window.confirm('Please confirm that you accept these free cookies');

// window.alert(acceptCookies);

if (acceptCookies == true){
    window.alert("You have confirmed that you accept cookies");
} else {
    window.alert("You do not accept cookies.");
}

var visitor = prompt('Please enter your name.');
window.alert('Hello ' + visitor.toUpperCase() + ', we hope you have a great day.');
