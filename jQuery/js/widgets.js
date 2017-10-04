$(function(){
    $("#mySpinnerInput").spinner({
        min: 0,
        max: 100,
        //default step is 1
        step: 3
    });
    $("#apple").tabs({
        collapsible: true,
        //show content on mouseover
        // event: "mouseover"
    });
    //make tabs sortable
    $("#apple").tabs().find(".ui-tabs-nav").sortable({
        axis: "x"
    });
    // add a tooltip on hover (uses title of input)
    $("#mySpinnerInput").tooltip({
        //animations
        show: {effect: "slideDown"}
    });
    //add a tooltip to every element with a title
    $(document).tooltip();
});
