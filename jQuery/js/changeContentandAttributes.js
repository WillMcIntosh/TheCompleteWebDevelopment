$(function(){
    // to replace everything inside a div with text
    $("#changeFacebook").click(function(){
        $("#facebook").text("This is Facebook");
    });
    // to change html code
    $("#changeApple").click(function(){
        $("#apple").html("<p>This is Apple</p><p>New iOS available</p>");
    });

});
