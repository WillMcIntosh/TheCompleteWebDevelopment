// use <C+w>10- to rezise this window 10 lines smaller

// window.alert("hello this works")

/*
 * Constructors are useful for creating multiple objects with the 
 * same properties and methods.
 */

/*
 * this is a constructor. It's convention to capitalise the
 * name of constructors to distinguish them from regular functions
 */

function Phone(make, model, warranty, color){
    // JavaScript this refers to the object in question
    // can define properties inside of the function with this. 
    this.make = make;
    this.model = model;
    this.warranty = warranty;
    this.color = color;
    // can also define methods inside of the constructor
    this.extendWarranty = function (x){
        // equivalent to "this.warranty = this.warranty + x"
        this.warranty += x;
    }
}

// to invoke the function to create a new object, need the 'new' syntax
var myPhone = new phone('apple', 'iPhone 5s', 12, 'white');
window.console.log(myPhone);
myPhone.extendWarranty(12);
window.console.log(myPhone.warranty);

// to add a new property to an object
myPhone.condition = "like new";
window.console.log(myPhone);
// displays the object like before and doesn't show new property
window.console.log(myPhone.condition);
// this now displays the property
var myBrothersPhone = new phone('apple', 'iPhone 4', 6, 'black');
window.console.log(myBrothersPhone);
window.console.log(myBrothersPhone.condition);
/*
 * if we want to add a new property, it needs to be added
 * to the prototype. By default, the condition of object phone will now
 * be 'new'
 */
phone.prototype.condition = 'new';
window.console.log(myBrothersPhone.condition);

window.console.log(myPhone.condition);
