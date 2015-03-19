/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework Unit #2A-1 - Convert Temp
 *
 * Kate de Bethune, March 19, 2015
 */

 /********************************************************************
  *
  * First problem: temperature conversion
  *
  * If the values entered by the user aren't numbers (or convertible to numbers),
  * return nothing (or, more specifically, leave the output field blank)
  *
  ********************************************************************/
  
'use strict';

 var convertCtoF = document.getElementById("degC");
 convertCtoF.onchange = function(){  //onchange means that every time the value in the input box changes, this function will run
        var degreesC = document.getElementById("degC").value; // this is the value from the form field

        // your calculations go here. You'll start with the variable degreesC, convert it to Fahrenheit
        //  and place the result in the variable 'degreesF'
        if (!isNaN(parseInt(degreesC))) {
			var degreesF = degreesC * 9/5 + 32;
			var degF = degreesF.toFixed(0);
            document.getElementById("degFOut").innerHTML = degF;
		} 
		//if the input is not a valid integer, then the text box & output are set to empty.
		else {
			document.getElementById("degC").value = "";
			document.getElementById("degFOut").innerHTML = "";
		}
 }

 var convertFtoC = document.getElementById("degF");
 convertFtoC.onchange = function(){  //onchange means that every time the value in the input box changes, this function will run
        var degreesF = document.getElementById("degF").value; // this is the value from the form field
                
        // your calculations go here. You'll start with the variable degreesF, convert it to Celsius
        //  and place the result in the variable 'degreesC'
		if (!isNaN(parseInt(degreesF))) {
            var degreesC =  (degreesF - 32) * 5/9;
			var degC = degreesC.toFixed(0);
            // now we write the result to the page
			document.getElementById("degCOut").innerHTML = degC;
		} 
		//if the input is not a valid integer, then the text box & output are set to empty.
		else {
			document.getElementById("degF").value = "";
			document.getElementById("degCOut").innerHTML = "";
		}
 }
