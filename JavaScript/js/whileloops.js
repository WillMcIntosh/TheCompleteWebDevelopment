var i = 0;
// document.getElementById("myParagraph").innerHTML +=
    // "<br/>" + i;
// want to keep adding to the paragraph while i < 5

while(i<5){
    document.getElementById("myParagraph").innerHTML +=
        "<br/>" + i;
    i++;
}

/*
 * Create a game where we are given a $ balance. We will go to a store and
 * keep buying items randomly until our balance is zero
 */

var balance = 1000;
var itemsBought = 0;
function initiateGame(){
    while(balance > 0){
        var itemPrice = Math.floor(Math.random()*100);
        if(itemPrice <= balance){
            itemsBought++;
            balance -= itemPrice;
            document.getElementById("balance").innerHTML +=
                "<p> Purchase amount: $" + itemPrice + ". New balance: $"
                + balance + ". </p>";
        }
    }
    document.getElementById("balance").innerHTML +=
        "<p> You bought: " + itemsBought + " items. </p>";
}
