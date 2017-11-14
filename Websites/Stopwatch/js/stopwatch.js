//stopwatch.js
$(function(){
    //variables
    var mode = 0;//App mode
    var timeCounter = 0; //time counter
    var lapCounter = 0; //lap counter
    var action;//variable for setInterval
    var lapNumber;//Number of Laps
        
        //minutes,seconds,centiseconds for time and lap
    var timeMinutes, timeSeconds, timeCentiseconds, lapMinutes, lapSeconds,
        lapCentiseconds

    //On App load show start and lap buttons
    hideshowButtons("#startButton", "#lapButton");
    //click on startButton
    $("#startButton").click(function(){
        //mode on
        mode = 1;
        //show stop and lap buttons
        hideshowButtons("#stopButton", "#lapButton");
        //start counter
        startAction();
    });

    
    //click on stopButton
        //show resume and reset buttons
        //stop counter
    
    //click on resumeButton
        //show stop and lap buttons
        //start counter
    
    //click on resetButton
        //reload the page
    
    //click on lapButton
        //if mode is ON
            //stop action
            //resetLap and print lap details
            //start action
    
    //functions
    //hideshowButtons function shows two buttons
    function hideshowButtons(x,y){
        $(".control").hide();
        $(x).show();
        $(y).show();
    }
    
    //start the counter
    function startAction(){
        // increase both counters by one every 10ms
        action = setInterval(function(){
            timeCounter++;
            lapCounter++;
            updateTime();
        },10);
    }
    
    //updateTime: converts counters to min,sec,centisec
    function updateTime(){

        //1min=60*100centiseconds=6000centiseconds
        timeMinutes = Math.floor(timeCounter/6000);
        //1sec=100centiseconds
        timeSeconds = Math.floor((timeCounter%6000)/100);
        timeCentiseconds =(timeCounter%6000)%100 ;
        //update display
        $("#timeminute").text(timeMinutes);
        $("#timesecond").text(timeSeconds);
        $("#timecentisecond").text(timeCentiseconds);


        // same thing for lap times
        lapMinutes = Math.floor(lapCounter/6000);
        lapSeconds = Math.floor((lapCounter%6000)/100);
        lapCentiseconds =(lapCounter%6000)%100 ;

        $("#lapminute").text(lapMinutes);
        $("#lapsecond").text(lapSeconds);
        $("#lapcentisecond").text(lapCentiseconds);

    }
        
        //1min=60*100centiseconds=6000centiseconds
        //1sec=100centiseconds
            
    //format numbers
    
    //addLap function: print lap details inside the lap box
});
