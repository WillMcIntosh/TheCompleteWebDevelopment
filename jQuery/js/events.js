//load function
$(function () {
    // js onclick event is just click in jquery

    //change background color of all paragraphs
    /*
     * $("p").click(function(){
     *     $("p").css("background-color", "rgba(206,152,230, 0.697)");
     * });
     */
    // change background color of the paragraph that we clicked using this
    /*
     * $("p").click(function(){
     *       $(this).css("background-color", "rgba(206,152,230, 0.697)");
     *   });
     */
    // change background color on mouseover and go back when the mouse moves
    $("p").mouseover(function(){
        $(this).css("background-color", "rgba(206,152,230, 0.697)")
    });
    $("p").mouseout(function(){
        $(this).css("background-color", "")
    });

    //change input background color when in focus, change back when not (blur)
    $("input").focus(function(){
        $(this).css("background-color", "yellow");
    });
    $("input").blur(function(){
        $(this).css("background-color", "#ffffff");
    });
    // change background color of input when the users starts typing
    $("input").keyup(function(){
        $(this).css("background-color", "rgba(39,190,162,0.697)");
    });
    // when we click on submit, reset value in input
     $("#submit").click(function(){
         $("#input").css("background-color", "#ffffff");
         $("#input").val("");
    });
   



});
