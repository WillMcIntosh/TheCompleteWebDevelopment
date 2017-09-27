$(function(){
    //resizable has options inside of {} such as max height, etc
    $("#facebook").resizable({
        maxHeight: 200,
        minHeight: 50,
        minWidth : 100,
        maxWidth: 300,
        aspectRatio: 4/3,
        // have a ghost of final element while resizing
        ghost: true,
        alsoResize: "#microsoft"
    });
    $("#apple").resizable({
        containment: "#container",
        animate: true
    });
});
