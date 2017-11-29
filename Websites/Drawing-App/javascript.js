$(function(){
    $("#slider").slider({
        min: 3,
        max: 30,
        slide: function(event, ui){
            $("#circle").height(ui.value);
            $("#circle").width(ui.value);
        }
    });
    
    //declare variables
    var paint       = false;        // paintingerasing or not    
    var paint_erase = "paint";      // painting or erasing
    
    //get the canvas and context
    var canvas = 
        document.getElementById("paint");    
    var ctx    = canvas.getContext("2d"); 
    
    //get the canvas container
    var container = $("#container");   
        
    //mouse position is an object
    var mouse = {x: 0, y: 0};
    
    //onload load saved work from localStorage
    
    //set drawing parameters (lineWidth, lineJoin, lineCap)
    ctx.lineWidth = 3;
    ctx.lineJoin  = "round";
    ctx.lineCap   = "round";
    
    //click inside container
    container.mousedown(function(){
        paint = true;
    });
    
    //move the mouse while holding mouse key
    
                //get color input   
                
                //white color 
                
    //mouse up->we are not paintingerasing anymore
    
    //if we leave the container we are not paintingerasing anymore
    
    //click on the reset button
    
    //click on save button
    
    //click on the erase button
    
    //change color input
    
    //change lineWidth using slider
});
