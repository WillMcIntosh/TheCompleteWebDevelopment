document.getElementById("myParagraph").innerHTML +=
    "<br />" + 0;
//would need to duplicate this over and over to add from 0 to 100


// for ( starting condition; condition to verify before looping; what happens after each iteration)

for(i =0; i<5; i++){
    document.getElementById("myParagraph").innerHTML +=
        "<br />" + i;
}

for(i=7;i>0;i--){
    document.getElementById("myParagraph").innerHTML +=
        "<br />" + Math.pow(i,2);
}

var shoppingList = ['bread', 'milk', 'eggs'];

// want to add each list item to the paragraph following a line break

for(i=0;i<shoppingList.length;i++){
    document.getElementById("myParagraph").innerHTML += 
        "<br />" + shoppingList[i];
}

var numberList = [1,2,3,4];
// want to increase each number in the list by 10

for(i=0; i<numberList.length; i++){
    numberList[i] +=10;
}

document.getElementById("myParagraph").innerHTML +=
    "<br />" + numberList;

