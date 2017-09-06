// use <C+w>10- to rezise this window 10 lines smaller

// window.alert("hello this works")
//
// an object is declared with var and {}
var myPhone = {
    make: "Apple" , 
    model: "iPhone 4",
    warranty: 12,
    colour: "white"
};
window.console.log(myPhone);
/*
 * delete the warranty property by referring to the object and then
 * the name of the property
 */
delete myPhone.warranty;
window.console.log(myPhone);
// to display the model of the object
window.console.log(myPhone.model);
/*
 * this will set myOtherPhone identical to myPhone
 * if we change something in myOtherPhone, it will change in myPhone
 */
var myOtherPhone = myPhone;
window.console.log(myOtherPhone);
myOtherPhone.model = "iPhone 5";
window.console.log(myPhone);
window.console.log(myOtherPhone);
/*
 * when two objects are set equal to each other, any 
 * property that changes in one will change in the other.
 * Objects are like references to the internal properties.
 */
