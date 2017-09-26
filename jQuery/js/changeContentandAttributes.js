$(function(){
    // to replace everything inside a div with text
    $("#changeFacebook").click(function(){
        $("#facebook").text("This is Facebook");
    });
    // to change html code
    $("#changeApple").click(function(){
        $("#apple").html("<p>This is Apple</p><p>New iOS available</p>");
    });
    //change attributes of inputs
    $("#changeInput").click(function(){
        $("input").val("Sam");
    });
    // change attributes of a link
    $("#changeMicrosoft").click(function(){
        $("#microsoftLink").attr({"href": "http://google.com","title":"Google"});
    });
    // add text to an element
    /*
     * append text
     * $("#addText").click(function(){
     *     $("#microsoft").append("<ul><li>BMW</li><li>Mercedes</li></ul>");
     * });
     * add at beginning
     * $("#addText").click(function(){
     *    $("#microsoft").append("<ul><li>BMW</li><li>Mercedes</li></ul>");
     * });
     */
     // after a paragraph
    $("#addText").click(function(){
        $("#microsoftParagraph").after("<p>New paragraph</p>");
    });
    // can also use .before for the same purpose

});
