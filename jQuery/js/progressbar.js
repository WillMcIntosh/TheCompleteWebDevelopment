$(function(){
    // create a progress bar
    $("#progressBar").progressbar({
        // set max to 100% so it won't go over
        max: 100,
        // set % progress value 
        value: 0 
    });
    // when button is pressed, fill progress bar
    var x = 0;
    $("#progressButton").click(function(){
        // I tried to make it so the progressBar could be reset
        // every time the button is pressed. This works if the
        // progress is complete, otherwise it speeds up the progress
        x = 0;
        $("#progressBar").progressbar("option", "value", 0);
        $("#progressLabel").text("In progress...");
        //using setInterval keep increasing x and set value of 
        //progress bar to x
        //wait one second to start the % count since it disappear so fast
            var progress = setInterval(function(){
                x++;
                $("#progressBar").progressbar("option", "value", x);
                if(x>99){
                    clearInterval(progress);
                }
                setTimeout(function(){
                    $("#progressLabel").text(x + '%');
                },1000);
            },100);
    });
});
