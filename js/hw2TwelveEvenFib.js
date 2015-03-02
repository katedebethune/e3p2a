/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework Unit #2
 *
 *
 */



 /********************************************************************
  *
  * Fourth problem: Sum of first 12 even Fibonacci numbers
  *
  ********************************************************************/
// first we get the HTML for the button
var getFibSum = document.getElementById("sumFib");

//then we set the event handler for when the button is clicked
getFibSum.onclick = function(){
               document.getElementById("sumFibResult").innerHTML = twelveEvenFibonacciSum();
 }

 /*
  *  twelveEvenFibonacciSum - calulates the sum of the first 12 even fibonacci numbers, with 0, 1 being the first two numbers of the sequence
  *
  *            @returns {integer} The sum of the first 12 even Fibonacci numbers
  */

 function twelveEvenFibonacciSum(){
 	//set up function variables; array to hold Fib series.
	var arr = [], sum, counter, i,  limit;
	sum = counter = i = 0;
	limit = 50;

	for ( ; i < limit; i++ ) {
		if ( i == 0 ) {
			arr[i] = 0;
			sum += arr[i];
			counter++;
		} 
		else if ( i == 1 ) {
			arr[i] = 1;
		}
		else {
			arr[i] = ( arr[i-1] + arr[i-2] );
			if ( arr[i] % 2 == 0 && counter < 12 ) {
				sum += arr[i];
				counter++;
			}
		}
	}
	return sum;
}

