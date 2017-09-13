// want to find a way to use the error message to change the value of an HTML element

try{
    sum(3,4);
}
catch(err){
    document.getElementById("error").innerHTML =
        err.message;
}



