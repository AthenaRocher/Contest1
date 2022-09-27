/*setTimeout() method The setTimeout() method executes a function, after waiting a specified number of milliseconds 
with 2 accepted parameters -- 
function : first parameter is a function to be executed
milliseconds : indicates the number of milliseconds before execution takes place.*/

/*
<button onclick="setTimeout(myFunction, 3000)">Try it</button>

<script>
function myFunction() {
  alert('Hello');
}
</script>
*/


/*setInterval() Method The setInterval() method repeats a given function at every given time-interval 
with 2 accepted parameters--
function : first parameter is the function to be executed
milliseconds :indicates the length of the time-interval between each execution.. */

/*
setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
} 
*/


//These time intervals are called timing events.