$(function(){
    // to start autocomplete when user begins to type
    $("#city").autocomplete({
        source: ["London", 'Paris', 'Tokyo', 'Milan', 'Madrid']
    });
});
