// use <C+w>10- to rezise this window 10 lines smaller

// window.alert("hello this works")

function greeting1(){
    window.alert('hello');
}

// greeting1();

// window.alert(greeting1) will return the definition of the function

function greeting2(firstName){
    // takes firstName as a parameter
    window.alert('Hello ' + firstName + '!');
}
greeting2('Will');

function sum(a,b){
    return a + b;
}
var x = sum(3,7);
// window.alert(x);
function swap(id1, id2){
    var y = document.getElementById(id1).innerHTML;
    var z = document.getElementById(id2).innerHTML;
    document.getElementById(id2).innerHTML = y;
    document.getElementById(id1).innerHTML = z;
}
