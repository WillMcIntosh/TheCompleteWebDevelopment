var message =["Please!", "Leave me alone!", "Drop me!"];
$(function(){
    $("#facebook").draggable();
    // make draggable only following y axis
    $("#apple").draggable({
        axis: 'y'
    });
    // go back to original spot when dropped
    /*
     * $("#microsoft").draggable({
     *     revert :true
     * });
     */

    /*
     * want to execute code when we start dragging an element,
     *     while we're dragging, and also when we stop dragging
     */
    $("#microsoft").draggable({
        revert: true,
        start: function(){
            $("#facebook").css("background-color","#43c8d4");
        },
        drag: function(){
            $("#microsoft").css("background-color", 'rgb(' + Math.floor(
                256*Math.random()) + ',' + Math.floor(256*Math.random()) + ','
                + Math.floor(256*Math.random()) + ')');
            $("#microsoft").find("p").html(message[Math.floor(4*Math.random())]);
        },
        stop: function(){
            $("#apple").css("background-color","#b1e269");
            $("#microsoft").html('<p>Thanks!</p>');
        }
    });
    // an element is droppable if we are able to drag and drop anothe element
    // inside of it
    $("#droppable").droppable({
        drop: function(event, ui){
            $(this).css("background-color", "#21dd85");
            // remove the info paragraph
            $(this).find("p").remove();
            // get the text of the ui draggable element and append it to
            // the droppable element in an empty div
            $("<div></div>").text(ui.draggable.text()).appendTo(this);
        },
        accept: "#list li"
    });
    // find the list items in #list and drag copies of them
    $("#list").find("li").draggable({
        helper: "clone",
        appendTo: "body"
    });
});
