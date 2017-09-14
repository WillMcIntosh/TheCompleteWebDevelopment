
//for compatibilty with all browsers
var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
// window.alert(windowHeight);

// for width of users screen (not only browser)
var screenWidth = window.screen.width;
// window.alert(screenWidth);

//available height of screen (height minus task bar)

var availableScreenHeight = window.screen.availHeight;
// window.alert(availableScreenHeight);

/*
 * Using innerHeight and innerWidth, style the 4 divs in the html file to fill 1/4 of the screen's 
 * available width and 1/4th of the screen's available height
 */
for(i=1; i<5; i++){
    document.getElementById("div"+i).style.width = window.innerWidth/4-10 + 'px';
    document.getElementById("div" +i).style.height = window.innerHeight/4-10 + 'px';
}
