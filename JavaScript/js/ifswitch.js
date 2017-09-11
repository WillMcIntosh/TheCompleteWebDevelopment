function checkSpeed(){
    var speed =document.getElementById("speed").value;
    if(speed > 70){
        window.alert("You are going too fast!");
    }else if(speed < 40){
        window.alert("You are going too slow");
    }else{
        window.alert("Your speed is fine.");
    }
}

function checkSeason(){
    // to recognise user input capitals, change value toLowerCase
    var x = document.getElementById("myInput").value.toLowerCase();
    switch(x){
        case "summer":
            window.alert("It is summer time");
            break;
        case "winter":
            window.alert("It is winter time");
            break;
        case "autumn":
            window.alert("It is autumn");
            break;
        case "spring":
            window.alert("It is spring time");
            break;
        default:
            window.alert("I do not recognise this");
    }
}
