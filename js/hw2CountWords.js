/* CSCI E-3 Introduction to Web Programming Using Javascript
 *
 *
 * Homework Unit #2A-5 Counting Words
 *
 * Kate de Bethune, March 19, 2015
 * Please note: my solution does not count extraneous white spaces.
 */

'use strict';

myWordsToCount.onkeyup = function() {	
	//string holds value of the "myWordsToCount" DOM element
	var string = document.getElementById("myWordsToCount").value;
	//counter, loop iterator, array to hold contents of string.split, limit.
	var count = 0, i = 0, arr = [], len = arr.length; 
	
	//split the array on spaces
	arr = string.split(" ");
	//processing loop
	for ( ; i < arr.length ; i++ ) {
		//if the current value of arr is a space, continue
		if ( arr[i].length == 0 ) {
			continue;
		}
		//otherwise increment count at the beginning of the new word.
		else {
			++count;
		}
	}
	//write count to the innerHTML function for the wordcount id.
	document.getElementById("wordcount").innerHTML = count;
}

