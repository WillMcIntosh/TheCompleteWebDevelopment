var playing = false;
var score;
var trialsLeft;
$(function(){
    $("#startReset").click(function(){

        // we are playing
        if(playing == true){

            // reload page
            location.reload();
        }else{

            // we are not playing
            playing == true;

            score = 0; // set score to 0
            $("#scoreValue").html(score);

            $("#trialsLeft").show();
            trialsLeft = 3;
            addHearts();

        }

   
    });

});
// functions 

function addHearts(){
    for(i=0; i< trialsLeft; i++){
        $("#trialsLeft").append(' <img src="images/heart.png" class="life"> ');
    }

}


// click on start/ reset
//      are we playing
//          yes: reload page
//          no:
//              show trials left
//              change button to say reset
//              1. create a random fruit
//                  define a random step
//              2. move fruit down by one step
//                  is fruit too low?
//                      no:  repeat 2
//                      yes
//                          any trials left?
//                              yes: remove one heart repeat 1
//                                  
//                              no: game over, change to start game

// slice a fruit
//      play sound
//      explode fruit
