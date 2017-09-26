$(function(){
    // change styling of facebook on button press
    // can also use a value instead of 300px (300)
    // math operations (200+100) work as well
    // add a random value between -50 and 50 to the current width
    $("#changeFacebook").click(function(){
        $("#facebook").css("width",100*Math.random()-50 +$('#facebook').width());
        // change class to the microsoft class
        // css style that we just changed (width) will not be changed
        $('#facebook').addClass("greenbox");
        // window.alert($('#facebook').innerHeight());

        // window.alert($('#facebook').outerHeight());
    });

    // remove a class
    $("#changeApple").click(function(){
        $('#apple').removeClass("sans-serif");
    });
    // remove class by clicking on apple div
    /*
     * $("#apple").click(function(){
     *     $('#apple').removeClass("sans-serif");
     * });
     */

    // want to randomly position apple div when it is clicked on. Position needs to be set as absolute
    $("#apple").click(function(){
        $("#apple").css('position', 'absolute');
        $("#apple").css({'top': 200*Math.random(), 'left': 200*Math.random(), 'background-color':'rgb(' + Math.floor(256*Math.random()) + ',' + Math.floor(256*Math.random()) + ',' + Math.floor(256*Math.random())  + ')'});
    });
    // want to toggle the class of the microsoft div on and off
    $("#changeMicrosoft").click(function(){
        $("#microsoft").toggleClass("greenbox");
    });
    // to hide the microsoft div when we click on it. (hide is the same as css
    // display = none
    $("#microsoft").dblclick(function(){
        $(this).hide();
    });
    $("#showMicrosoft").click(function(){
        $("#microsoft").show();
    });
    $("#changeGreat").click(function(){
        $("#great").wrap("<div></div>");


    });

});
