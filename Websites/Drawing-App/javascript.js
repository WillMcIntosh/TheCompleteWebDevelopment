$(function(){
    $("#slider").slider({
        min: 3,
        max: 30,
        slide: function(event, ui){
            $("#circle").height(ui.value);
            $("#circle").width(ui.value);
        }
    });

    // for html5 canvas
    var canvas = document.getElementById("paint");
    var context = canvas.getContext('2d');

    //draw a line

    //declare a new path
    context.beginPath();

    // define line width
    context.lineWidth = 40;
    // define line colour
    context.strokeStyle = '#42e565';

    // set cap to the line (round, butt, square)
    context.lineCap = 'round';
    
    // set line join style like bevel, round, miter
    context.lineJoin = 'round';

    // how far we are from left border, top border
    context.moveTo(50,50);
    // draw a straight line from starting point to a new position
    context.lineTo(200,200);

    //draw another line
    context.lineTo(400,100);

    //make line visible
    context.stroke();
});
