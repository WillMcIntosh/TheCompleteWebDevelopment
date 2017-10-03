//accordion must be a div
//options>> collapsible: true makes all sections collapsible
//icons: to specify for header when collapsed and active
//can pick icons from jQuery theme roller (no dot)
// with a bunch of content in section 1, the other sections now have that height
// set heightStyle: "content" to stop this

$(function(){
    $("#facebook").accordion({
        collapsible: true,
        icons: {
            header: "ui-icon-circle-arrow-e",
            activeHeader: "ui-icon-circle-arrow-s"
        },
        heightStyle: "fill"

    });
    $("#resizer").resizable({
        resize: function(){
            $("#facebook").accordion("refresh");
        }
    });
});
