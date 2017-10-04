$(function(){
    $("#slider").slider({
        slide: function(event,ui){
            // display the value of the slider when it moves
            // by default, min 0 max 100
            $("#sliderValue").val(ui.value);
        },
        min: 0,
        max: 25
    });
    // set value of input to 0 at beginning just so it isnt empty
    $("#sliderValue").val(0);

    // create a slider with two handles to represent a range
    $("#rangedSlider").slider({
        range: true,
        min: 0,
        max: 100000,
        step: 1000,
        values: [10000,30000],
        slide: function(event,ui){
            $("#mileageRange").val(
                ui.values[0] + " miles - " + ui.values[1] + " miles"
            );
        }
    });
    $("#mileageRange").val(
        $("#rangedSlider").slider("values",0) + " miles - " +
        $("#rangedSlider").slider("values",1) + " miles"
    );
});
