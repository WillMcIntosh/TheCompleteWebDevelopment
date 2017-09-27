$(function(){
    $("#list").selectable({
        //when selection stops
        stop: function(){
            // .each method does the function for each item selected
            $(".ui-selected").each(function(){
                $('<p></p>').text($(this).text()).appendTo("#microsoft");
            });
        }
    });
});
