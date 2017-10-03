$(function(){
    //buttons will have hover and click styles accoring to jQ theme
    $("#button1").button();
    $("#button2").button({
        // specify primary (left) or secondary (right) icon
        icons: {
            primary: "ui-icon-folder-open"
        },
        // remove text from button
        text: false
    });
    $("#button3").button({
        icons: {primary: "ui-icon-mail-closed", secondary: "ui-icon-carat-1-e"}
    }
    );
    // to style the checkbox
    $("#myCheckbox").button();
    // to style a set of buttons instead of just one
    $("#checkboxes").buttonset();
    $("#radioBoxes").buttonset();
});
