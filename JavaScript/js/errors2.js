// want to find a way to use the error message to change the value of an HTML element

/*
 * try{
 *     sum(3,4);
 * }
 * catch(err){
 *     document.getElementById("error").innerHTML =
 *         err.message;
 * }
 */


function check(){
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;
    var errorMessage = document.getElementById("error");
    var errorToShow = '';
    try{
        if(password.length<6){
            errorToShow += "<br /> Password is too short.";
            // a throw statment will exit the try statement immediately
            // throw errorToShow;
        }
        if(/[A-Z]/g.test(password) == false){
            errorToShow += "<br /> Password should include at least one capital letter.";
        }
        if(/\d/g.test(password) == false){
            errorToShow += "<br /> Password should include at least one number.";
        }
        if(password != password2){
            errorToShow += "<br /> Passwords do not match.";
        }
        // at the end here will throw the complete error message
        throw errorToShow;
    }
    catch(err){
        /*
         * in the first example, err was an object so we had to use the
         * .message property to properly throw the message. In this case, err is 
         * a string so we can just use err.
         */
        errorMessage.innerHTML = err;

    }
}
