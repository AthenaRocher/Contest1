/* The map() method in JavaScript creates an array by calling a specific function on each element present in the parent array. It is a non-mutating method. Generally map() method is used to iterate over an array and calling function on every element of array.
Syntax:

array.map(function(currentValue, index, arr), thisValue)

This method accepts two parameters as described below:

  function(currentValue, index, arr): It is required parameter and it runs on each element of array. It contains three parameters which are listed below:
        currentValue: It is required parameter and it holds the value of current element.
        index: It is optional parameter and it holds the index of current element.
        arr: It is optional parameter and it holds the array.
  thisValue: It is optional parameter and used to hold the value of passed to the function.

  In the below example we use array map() method and return the square of array element.
 */
  var el = document.getElementById('root');
  var arr = [2, 5, 6, 3, 8, 9];
    
  var newArr = arr.map(function(val, index){
      return {key:index, value:val*val};
  })
    
  console.log(newArr)
    
  el.innerHTML = JSON.stringify(newArr);

/* The ternary operator assigns a value to the variable based on a condition provided to it. The statement the if is the only operator in JavaScript that takes three operands. The working of this operator is the same as the if-else conditional statement.
 We can say that it is the shortcut of the if-else.
This operator includes three operands: a condition followed by a question mark (?) sign, and two expressions separated by the colon (:).
The first expression is executed when the condition is true, and the second expression is executed when the condition is false.
Syntax
var a = (condition) ? expr1 : expr2;  

The below example can further help to describe
 */
let a = 358;  
let val = ( a % 2 == 0) ? 'Even Number' : 'Odd Number';  
alert(val);  

