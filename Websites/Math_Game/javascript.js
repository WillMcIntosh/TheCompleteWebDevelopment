// if we click on the start/reset button
//      if we are playing
//          reload page
//      if we are not playing
//          set score to 0
//          show countdown box
//          start reducing time by 1s in loops
//          if there is time left
//              yes--> continue
//              no--> game over
//          change button to reset
//          generate a new question and multiple answers

// if we click on an answer box
//      if we are playing
//          correct?
//              yes--> 
//                  increase score by one
//                  show correct box for 1s
//                  generate new Q&A
//              no--> 
//                  show try again for one sec
var gameCounter;
var gameTimeLeft;
var score = 0;
var gameOn = false;
function startReset(){
    if (gameOn == true){
        window.location.reload(false);
    }else{
        document.getElementById("scoreValue").innerHTML = score;
        document.getElementById("timeRemaining").style.display = 'block'; 
        document.getElementById("startReset").innerHTML = "Reset";
        var countLeft = 60;
        gameCounter = setInterval(function(){countLeft--; timeRemainingValue.innerHTML = countLeft;},1000);
        gameTimeLeft = setTimeout(gameOver, 60000);
        gameOn = true;
        generateQA();
    }
}

function gameOver(){
    window.clearInterval(gameCounter);
    document.getElementById("timeRemaining").style.display = 'none';
    document.getElementById("gameOver").style.display = 'block';
    document.getElementById("scoreNumber").innerHTML = score;
    document.getElementById("startReset").innerHTML = "Start Game";
    gameOn = false;
}


function generateQA(){
    /*
     * var answers = [];
     * for (var i =0; i=144; i++){
     *     answers.push(i);
     * }
     */
    var firstNumber = Math.floor(Math.random()*13);
    var secondNumber = Math.floor(Math.random()*13);
    var correctAnswer = firstNumber * secondNumber;
    var correctAnswerIndex = answers.indexOf(correctAnswer);
    window.alert(correctAnswer);
    window.alert(answers);
    if (correctAnswerIndex > -1){
        answers.splice(correctAnswerIndex,1)
    }
    window.alert(answers);
    document.getElementById("box1").innerHTML = correctAnswer;
    document.getElementById("question").innerHTML = firstNumber + 'x' + secondNumber;

}
