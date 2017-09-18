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
        score = 0;
        document.getElementById("scoreValue").innerHTML = score;
        document.getElementById("instruction").innerHTML = "Click on the correct answer.";
        document.getElementById("timeRemaining").style.display = 'block'; 
        document.getElementById("gameOver").style.display = 'none';
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
//globally declare correctAnswer so it can be used in multiple functions
var correctAnswer;

function generateQA(){
/*
 * generate the question, correct answer, and then 3 false answers.
 * add the four box answers to the boxes in random order.
 */
    
// create an empty array and then populate it with 0 through 144
    var answers = [];
    for (var i =0; i<145; i++){
        answers.push(i);
    }
// create the random first and second number, and then the correctAnswer 
    var firstNumber = Math.floor(Math.random()*13);
    var secondNumber = Math.floor(Math.random()*13);
    // assign value to correctAnswer
    correctAnswer = firstNumber * secondNumber; 
// find the index of correctAnswer and remove it from the array of possible answers
    var correctAnswerIndex = answers.indexOf(correctAnswer);
    if (correctAnswerIndex > -1){
        answers.splice(correctAnswerIndex,1)
    }
// create an array of answer choices, including the correctAnswer
// first, use the Fisher-Yates Shuffle algorithm
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

        // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
        }

        return array;
    }
// next, shuffle the answers array and take the first 3 elements and add to new array
    shuffle(answers);
    var boxAnswers =[correctAnswer];
    for(var j =0; j<3;j++){
        boxAnswers.push(answers[j]);
    }
    shuffle(boxAnswers);
// shuffling the new boxAnswers array now allows the elements to be added to the boxes
    for(var i =1; i<5;i++){
        document.getElementById("box"+i).innerHTML = boxAnswers[i -1];
    }
    document.getElementById("question").innerHTML = firstNumber + 'x' + secondNumber;
}

function answerBoxClick(boxNum){
    var correctMessage = document.getElementById("correct");
    var incorrectMessage = document.getElementById("wrong");
    var boxAnswer = document.getElementById(boxNum).innerHTML;
    if (gameOn == true){
        if(document.getElementById(boxNum).innerHTML == correctAnswer){
            score++
            document.getElementById("scoreValue").innerHTML = score;
            correctMessage.style.display = 'block';
            var correctAway = setTimeout(function(){correctMessage.style.display = 'none'},700);
            generateQA();
        }else {
            incorrectMessage.style.display = 'block';
            var incorrectAway = setTimeout(function(){incorrectMessage.style.display = 'none'},700);
        }
    }
}

