var counter2 = document.getElementById("counter");
var x =0;
// first parameter is a fuction with code to run
// second parameter is the time interval in milliseconds
var myCounter = setInterval(function(){x++; counter2.innerHTML = x;},1000);


// first parameter is a function
// second parameter is the amount of time to wait before executing in ms
var delayedWelcomeMessage = setTimeout(function(){window.alert("Welcome!")},3000);
