//hw2CountWords.js

myWordsToCount.onkeyup = function() {	
	// your code goes here
	var string = document.getElementById("myWordsToCount").value;
	var count = 0, i = 1, arr = []; 
	
	arr = string.split(" ");
	for ( ; i < arr.length ; i++ ) {
		count++;
	}
	console.log(count);
	document.getElementById("wordcount").innerHTML = count;

}

/*
function cnt(w,x){
var y=w.value;
var r = 0;
a=y.replace(/\s/g,' ');
a=a.split(' ');
for (z=0; z<a.length; z++) {if (a[z].length > 0) r++;}
x.value=r;
} */

/*
<!DOCTYPE html>
<html>
<body>

<p>A function is triggered when the user releases a key in the input field. The function outputs the actual key/letter that was released inside the text field.</p>

Enter your name: <input type="text" id="fname" onkeyup="myFunction()">

<p>My name is: <span id="demo"></span></p>

<script>
function myFunction() {
    var x = document.getElementById("fname").value;
    document.getElementById("demo").innerHTML = x;
}
</script>

</body>
</html> */
