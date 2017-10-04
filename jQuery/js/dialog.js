$(function(){
    $("#myDialog").dialog({
        autoOpen: false
    });
    $("#open").click(function(){
        $("#myDialog").dialog("open");
    });
    $("button").button();
    // create a go to previous page button and confirm when the user 
    // clicks that they want to go to previous page
    $("#confirmation").dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            "Go to Previous Page" : function(){
                window.history.back();
            },
            Cancel : function(){
                $(this).dialog("close");
            }
        }
    });
    $("#leavePage").click(function(){
        $("#confirmation").dialog("open");
    });
});
