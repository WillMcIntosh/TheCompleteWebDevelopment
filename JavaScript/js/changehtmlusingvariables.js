// use <C+w>10- to rezise this window 10 lines smaller

// window.alert("hello this works")

var color = 'rgb(18,149,68)';
document.getElementById("button1").onclick =
    function(){
        document.getElementById("facebook").style.backgroundColor = color;
    }
var x;
/*
 * the method random gives a value from 0 to < 1
 * multiplying by 256 gives a value between 0 and 255
 * math.round makes it a round number
 */
x = Math.round(Math.random()*256);
window.console.log(x);

var r ,g, b, appleColour;

document.getElementById("button2").onclick =
    /*
     * set each variable to a random round number between 0 and 255 
     * then assign the colours to the apple div. 
     */
    function(){
        r = Math.round(Math.random()*256);
        g = Math.round(Math.random()*256);
        b = Math.round(Math.random()*256);
        appleColour = 'rgb(' + r + ', ' + g + ', ' + b + ')';
        document.getElementById("apple").style.backgroundColor = appleColour;
        // using <p> tags keeps the formatting of the apple div
        document.getElementById("apple").innerHTML = '<p>' + appleColour + '</p>';
    }
