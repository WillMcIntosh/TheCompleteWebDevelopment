// #<{(|
//  * cookies are pieces of info stored to the user's comp in a text file
//  * which help the web page remember things about the user for when 
//  * they come back to visit the page.
//  |)}>#
//
// // to add a cookie:
// // document.cookie = 'cookie = value';
//
// document.cookie = 'username = Steve';
// document.cookie = "age = 33";
// // window.alert(document.cookie);
//
// var cookie = document.cookie.split(';');
//
// // window.alert(cookie);
//
// for(i =0; i<cookie.length; i++){
//     document.getElementById("myParagraph").innerHTML +=
//         "<br />" + cookie[i];
// }
//
// if all of the above code is commented out, Steve and 33 will still be displayed
//

window.alert(document.cookie);
