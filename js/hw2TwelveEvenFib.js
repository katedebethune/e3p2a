/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework Unit #2A-4, 12 Even Fib Numbers
 *
 * Kate de Bethune, March 19, 2015
 */



 /********************************************************************
  *
  * Fourth problem: Sum of first 12 even Fibonacci numbers
  *
  ********************************************************************/

'use strict';

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
	var arr = [], sum, fib_counter, i,  loop_limit, fib_limit;
	sum = fib_counter = i = 0;
	loop_limit = 34;
	fib_limit = 12;
	//generate fib numbers and sum first twelve, counting 0 as the first.
	for ( ; i < loop_limit; i++ ) {
		if ( i == 0 ) {
			arr[i] = 0;
			sum += arr[i];
			fib_counter++;
			console.log("counter = " + fib_counter + ", arr[" + i + "] = " + arr[i] + ", sum = " + sum);
		} 
		else if ( i == 1 ) {
			arr[i] = 1;
		}
		else {
			arr[i] = ( arr[i-1] + arr[i-2] );
			if ( arr[i] % 2 == 0 && fib_counter < fib_limit ) {
				sum += arr[i];
				fib_counter++;
				console.log("counter = " + fib_counter + ", arr[" + i + "] = " + arr[i] + ", sum = " + sum);
			}
		}
	}
	return sum;
}

