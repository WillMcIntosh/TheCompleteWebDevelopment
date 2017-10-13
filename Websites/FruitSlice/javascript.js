var playing = false;
var score;
var trialsLeft;
var fruits = ['apple', 'banana', 'cherries', 'grapes', 'mango', 'orange',
    'peach', 'pear', 'watermelon'];
var step;
var action; //used in setInterval function for steps
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

            //hide game over box
            $("#gameOver").hide();

            //change button text to reset game
            $("#startReset").html("Reset Game");

            // start sending fruits
            startAction();

        }

   
    });

});
// functions 

function addHearts(){
    $("#trialsLeft").empty();
    for(i=0; i< trialsLeft; i++){
        $("#trialsLeft").append(' <img src="images/heart.png" class="life"> ');
    }

}
function startAction(){
    //fruit from openclipart.com
    // $("#fruitContainer").append('<img src="images/apple.png" class="fruit">');
    /*
     * adding a new HTML element to the fruitContainer is not the best way of
     * doing this because every time we add a new element it will require more
     * memory, and we are adding elements constantly for the game.
     */
    $("#fruit1").show();
    chooseFruit(); //choose a random fruit

    // position the fruit above the fruitContainer to start
    $("#fruit1").css({'left': Math.round(550*Math.random()), 'top': -50});
    // each pic has a width of 100 px, setting them at a random horizontal
    // position in the 650 px container, left property is between 0 and 550

    // generate a random step between 1 and 6
    step = 1 + Math.round(5*Math.random());
    // move fruit down by one step every 10ms
    action = setInterval(function(){
        // access the top property by accessing .position() which is an
        // object with the property top. New top is original plus step
        $("#fruit1").css('top', $("#fruit1").position().top + step);
    
        //check if fruit is too low
        if($("#fruit1").position().top > $("#fruitContainer").height()){
            // check if we have any trials left
            if(trialsLeft > 1){
                // generate a new fruit, etc.
                $("#fruit1").show();
                chooseFruit(); //choose a random fruit

                // position the fruit above the fruitContainer to start
                $("#fruit1").css({'left': Math.round(550*Math.random()),
                    'top': -50});

                // generate a random step between 1 and 6
                step = 1 + Math.round(5*Math.random());

                // reduce trials by one
                trialsLeft--;

                //populate trials left box
                addHearts();

            }else{
                //game over
                playing = false;
                $("#startReset").html("Start Game"); //change button back
                // show Game Over
                $("#gameOver").show();
                $("gameOver").html('<p>Game Over!</p><p>Your Score is ' + score 
                    + '</p>');
                $("#trialsLeft").hide();
                stopAction();
            }
        }
    },10);
}
function chooseFruit(){
    $("#fruit1").attr('src', 'images/' + fruits[Math.round(Math.random()*8)]
        + '.png');
}
//stop dropping fruits
function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
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

