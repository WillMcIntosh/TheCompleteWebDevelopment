// AJAX = Asynchronous JavaScript and XML
// can be used to update wb page without reloading the entire page
// can send/receive data from a server after the page has loaded
// can send data in the background
//

$(function(){
    // load data from external file
    // Note: does not work in chromium
    $("#facebook").load("/jQuery/ajax/somedata.txt");
    // load only the first paragraph
    $("#apple").load("/jQuery/ajax/somedata.txt #paragraph1");
    // this didn't load in chromium and firefox 
    /*
     * $("#button1").click(function(){
     *     $.ajax({
     *         url : "/home/will/Classes/Udemy_webdevjQuery/ajax/somedata.txt", success: function(data){
     *             $("#microsoft").html(data);
     *         }
     *     });
     * });
     */
    // got xml parsing error: junk after document element
    $("#button1").click(function(){
        $.ajax({url : "/jQuery/ajax/somedata.txt"}).done(function(data){
            $("#microsoft").html(data);
        });
            });

});
