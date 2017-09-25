$(function(){
    // select all elements after document is ready and change css font size to 16 px
    $("*").css("font-size",'16px');
    // select all paragraphs
    // $("p").css("text-align", 'center');
    // select all paragraphs that are direct children of divs
    // $(" div > p").css("text-align", 'center');
    // select all paragraphs that are siblings of divs
    // $(" div ~ p").css("text-align", 'center');
    // select all paragraphs that are decesndents of divs 
    $(" div  p").css("text-align", 'center');

//select element by id great
    $("#great").css("background-color", "orange");
// select element by class orange
    $(".orange").css('background-color','orange');
// select divs of class bluebox and change font family
    $("div.bluebox").css('font-family', 'sans-serif');
// select paragraphs that are first children of divs
    // $("p:first-child").css("text-decoration", "underline");
// can do the same for last-child
    //or separate by comma
    $("p:first-child,p:last-child").css("text-decoration", "underline");
    // turn all links with hrefs red
    $("[href]").css("color","red");
    $("li:first-child").css("background-color","#bbf362");
    $("li:last-child").css("background-color","#bbf362");
    // select all even rows of a table
    $("tr:even").css("background-color","#e1d446");
    $("tr:odd").css("background-color","#811c90");
    //access all inputs on page
    $(":input").css("background-color","#811c90");
    //access all buttons of type Submit (capital S)
    $(":Submit").css("background-color","#811c90");
    //select all divs that contain a table 
    $("div:has(table)").css("background-color","rgba( 107,180,198,0.697");
});
