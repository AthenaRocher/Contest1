/*For-Loop for Javascript can be described from it's syntax as follows---

for (initialExpression; condition; updateExpression) 
{
    // for loop body
}

here, 
1. The initialExpression initializes and/or declares variables and executes only once.
2. The condition is evaluated.
   * If the condition is false, the for loop is terminated.
   * If the condition is true, the block of code inside of the for loop is executed.
3. The updateExpression updates the value of initialExpression when the condition is true.
4. The condition is evaluated again. This process continues until the condition is false.

The following program shall act as an example:
*/
//Writing a program to Display Numbers from 1 to 5--------Here we will be using for loop to avoid the unnessasry usage of program lines.

const n = 5;
for (let i = 1; i <= n; i++) {
    console.log(i); 
}

// in line 21 we witness the looping from i = 1 to 5 and in each iteration, i is increased by 1 