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

    $("#fruit1").mouseover(function(){
        score++;
        $("#scoreValue").html(score); //update score

        $("#sliceSound")[0].currentTime = 0;
        // need index 0 for first element of the array in jQ
        $("#sliceSound")[0].play();    

        // stop fruit from falling
        clearInterval(action);

        // hide fruit with an animation (requires jQueryUI)
        $("#fruit1").hide("explode", 500);

        //send new fruit after explosion finishes
        setTimeout(startAction, 500);
    });

// functions 
    
// select a random fruit from the array
function chooseFruit(){
    $("#fruit1").attr('src', 'images/' + fruits[Math.round(Math.random()*8)]
        + '.png');
}

//stop dropping fruits
function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
}

// add the correct number of hearts to the trials left block
function addHearts(){
    $("#trialsLeft").empty();
    for(i=0; i< trialsLeft; i++){
        $("#trialsLeft").append(' <img src="images/heart.png" class="life"> ');
    }
}

// start dropping random fruits
function startAction(){
    $("#fruit1").show();
    chooseFruit(); //choose a random fruit

    // position the fruit above the fruitContainer to start
    $("#fruit1").css({'left': Math.round(550*Math.random()), 'top': -50});
    // each pic has a width of 100 px, setting them at a random horizontal
    // position in the 650 px container, left property is between 0 and 550

    // generate a random step between 1 and 6
    step = 1 + Math.round(5*Math.random());
    console.log(step);
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
                stopAction();
                $("#startReset").html("Start Game"); //change button back
                // show Game Over
                $("#gameOver").show();
                $("#gameOver").html('<p>Game Over!</p><p>Your Score is ' + score 
                    + '</p>');
                $("#trialsLeft").hide();
            }
        }
    },10);
}

//stop dropping fruits

function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
}

});
// slice a fruit
//      play sound
//      explode fruit
