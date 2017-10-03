$(function(){
    $("#departure").datepicker({
        showAnim: "slideDown",
        // show year dropdown
        changeYear: true,
        // for more than one month
        numberOfMonths: 2,
        // for date format
        dateFormat: "mm/dd/yy", //default
        showOn: "button",
        buttonImage: "images/calendar.png",
        buttonImageOnly: true, // to show only the image as a button
        buttonText: "Choose your departure date.", // for hover over text
        minDate: +1, // today plus one
        maxDate: "+12M +10D", // today plus one year and 10 days
        //so that the return date cannot be before the departure date
        onClose: function(selectedDate){
            $("#return").datepicker ("option", "minDate", selectedDate)
        },
        // if you want week number
        showWeek: true
    });
    $("#return").datepicker();
});
