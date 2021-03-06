/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework Unit #2A-3, Splitting a String
 *
 * Kate de Bethune, March 19, 2015
 */


 /********************************************************************
  *
  * Third problem: Splitting a String
  *
  ********************************************************************/

'use strict';

var splitName = document.getElementById("splitName");
splitName.onclick = function(){

    var fullname = document.getElementById("fullName").value;

   /*
	*  We've gotten the fullname from the HTML form field.
	*  Your job is to use the String.slice(), String.substring() or String.substr() functions
	*  to divide your name into separate first and last name strings and assign
	*  them to the variables provided. You may
	*  need String.indexOf() as well.
	*
	*  You may not hardcode the position of where to split the string. Your code should
	*  work for anyone's first and last name. If the user enters a name without any whitespace
	*  return that as firstname and leave lastname blank.
	*
	*  If a name has more than one whitespace (as in, using one or more middle names),
	*  make the first name 'firstname' and assign the rest to 'lastname'
	*
	**/
			
   var firstname, lastname;
   var n = fullname.indexOf(" ");
   //if no space was found in the fullname string, assign it to firstname entirely.
   if ( n == -1 ) {
		firstname = fullname;
   }
   //otherwise, slice on the location of the first space and assign to firstname
   //assign the remainder to lastname.
   else {
		firstname = fullname.slice(0,n);
		lastname = fullname.slice(n);
   }
   //write to the correct DOM elements.
   document.getElementById("firstname").innerHTML = firstname;
   document.getElementById("lastname").innerHTML = lastname;
}
