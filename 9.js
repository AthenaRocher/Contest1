/* The JavaScript for of statement loops through the values of an iterable object.

It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more
 Syntax : 
for (variable of iterable) {
  // code block to be executed
}

The example below is of à for looping over Array :
*/
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}
