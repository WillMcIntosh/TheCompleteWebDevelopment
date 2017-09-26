$(function(){
    //fade elements in and out
    $("#fadeOutFacebook").click(function(){
        // fadeOut with "slow" "fast" or duration in ms, callout function
        // that tells the browser what to do once the element has finished
        // fading out.
        $("#facebook").fadeOut(3000,function(){
            window.alert('hi')});
    });
    $("#fadeInFacebook").click(function(){
        $("#facebook").fadeIn();

    });
    $("#fadeToggleFacebook").click(function(){
        $("#facebook").fadeToggle(1000);
    });
    /*
     * $("#animate").click(function(){
     *     $("#facebook").animate({width: '200px', height: '50px', opacity :
     *         '0.5'},1000);
     * });
     */
    $("#animate").click(function(){
        //to create a series on animations just list one after another
        $("#facebook").animate({width:'200px'},'slow');
        $("#facebook").animate({height:'100px'},'slow');
        // to delay an animation in ms
        $("#facebook").delay(3000).animate({width:'300px'},'slow');
     });


});
