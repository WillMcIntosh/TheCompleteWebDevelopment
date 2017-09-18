/*
 * Game Logic from class: 
 * if we click on the start/reset button
 *      if we are playing
 *          reload page
 *      if we are not playing
 *          set score to 0
 *          show countdown box
 *          start reducing time by 1s in loops
 *          if there is time left
 *              yes--> continue
 *              no--> game over
 *          change button to reset
 *          generate a new question and multiple answers
 * 
 * if we click on an answer box
 *      if we are playing
 *          correct?
 *              yes--> 
 *                  increase score by one
 *                  show correct box for 1s
 *                  generate new Q&A
 *              no--> 
 *                  show try again for one sec
 */

var gameCounter;
var gameTimeLeft;
var score;
var gameOn = false;
document.getElementById("startReset").onclick = function() {
    // if we click on the start/reset button
    // if we are playing
    if (gameOn === true){
        // reload page
        window.location.reload(false);
    // if we are not playing
    }else{
        // set score to 0
        score = 0;
        document.getElementById("scoreValue").innerHTML = score;
        document.getElementById("instruction").innerHTML = "Click on the correct answer.";
        // show countdown box
        var countLeft = 60;
        document.getElementById("timeRemainingValue").innerHTML = countLeft;
        show("timeRemaining");
        // make sure gameOver message is not showing
        hide("gameOver");
        document.getElementById("startReset").innerHTML = "Reset";
        // start reducing time by 1s in loops
        gameCounter = setInterval(function(){countLeft--; timeRemainingValue.innerHTML = countLeft;},1000);
        // if there is time left
        // yes--> continue
        // no--> game over (call gameOver function after 60 sec)
        gameTimeLeft = setTimeout(gameOver, 60000);
        // set gameOn to true for use in other functions
        gameOn = true;
        // generate a new question and multiple answers
        generateQA();
    }
};

// functions to show and hide elements
function hide(elementId){
    document.getElementById(elementId).style.display = 'none';
}
function show(elementId){
    document.getElementById(elementId).style.display = 'block';
}

function gameOver(){
    window.clearInterval(gameCounter);
    hide("timeRemaining");
    show("gameOver");
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
        answers.splice(correctAnswerIndex,1);
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
    for(var k =1; k<5;k++){
        document.getElementById("box"+k).innerHTML = boxAnswers[k -1];
    }
    document.getElementById("question").innerHTML = firstNumber + 'x' + secondNumber;
}
// changed to this for loop for each answer box with an onclick here in js instead
// of inline HTML

// if we click on an answer box
for(b=1;b<5; b++){
    document.getElementById("box"+b).onclick = function() {
        // if we are playing
        if (gameOn === true){
        // correct?
        // yes--> 
            if(this.innerHTML == correctAnswer){
            // increase score by one
                score++;
                document.getElementById("scoreValue").innerHTML = score;
            // show correct box for 1s
                show("correct");
                setTimeout(function(){
                    hide("correct");
                },700);
            // generate new Q&A
                generateQA();
            // no--> 
            }else {
            // show try again for one sec
                show("wrong");
                setTimeout(function(){
                    hide("wrong");
                },700);
            }
        }
    };
}

