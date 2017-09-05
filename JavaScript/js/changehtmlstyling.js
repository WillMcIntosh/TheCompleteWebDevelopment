// use <C+w>10- to rezise this window 10 lines smaller

// window.alert("hello this works")

// something isn't working with it this way. I'll study more after this lesson
// EDIT: 9/6/17 onClick was the issue. JS is case sensitive. It should be
// onclick

document.getElementById("button1").onclick =
    function(){
        document.getElementById("facebook").style.width = '200px';
        document.getElementById("facebook").style.backgroundColor = 'rgba( 26,203,135,0.922)';
    }
document.getElementById("button2").ondblclick =
    function(){
         document.getElementById("apple").style.fontFamily = 'monospace';
         document.getElementById("apple").style.fontSize = '3em';
    }
