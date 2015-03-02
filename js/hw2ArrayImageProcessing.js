/* CSCI E-3 Introduction to Web Programming Using Javascript
 *
 *
 * Homework Unit #2
 *
 *
 */

 /********************************************************************
  *
  * Image processing by way of arrays:  This assignment is designed to
  * give you a chance to work with arrays. The fact that we're processing images
  * makes the example interesting, but no prior knowledge of image processing
  * or understanding of the setup for this in hw2ArrayImageProcessingSetup.js
  * is required (though you're welcome to study that if you like!).
  *
  * In each of these functions, you'll be reading the parameter 'original',
  * which is an array of pixel data.  Each array contains four numeric elements to
  * describe each pixel in the image (red, green, blue, alpha).  The
  * data looks like this:
  *   original[0];  // pixel 0 red value
  *   original[1];  // pixel 0 green value
  *   original[2];  // pixel 0 blue value
  *   original[3];  // pixel 0 alpha value
  *   original[4];  // pixel 1 red value
  *   original[5];  // pixel 1 green value
  *   original[6];  // pixel 1 blue value
  *   original[7];  // pixel 1 alpha value
  *     etc...
  *
  * Essentially, your job is to read
  * data from the original array, and copy it to the output array, making
  * certain modifications along the way. It might be a good idea to start by
  * iterating over the original array and coping its data unmodified into the
  * output array. Once you have that working, you can try the data changes
  * required to make the output correct.
  *
  ********************************************************************/



/*
 * makeBlue - Reads data from an image bitmap array and writes new image data to a another array object
 *            The output data contains only blue pixel data, with other color values removed (set to 0).
 *
 *            @original {array} - the source bitmap data, an array of integers from 0-255
 *                         each pixel is represented by four consecutive array elements (r, g, b, a)
 *                         (red, green, blue, alpha), so the array has 4x elements as the image has pixels
 *            @output {array} - the bitmap data array to which the output image is written.
 *
 **/
function makeBlue(original, output){
      // YOUR CODE GOES HERE
      var orig = original, out = output, i = 0, blue_const = 2, 
      blue_count = 0, blue_value = 0, blue_color_value = 0, trans_const = 3,
      trans_count = 0, trans_value = 0, len = orig.length;
      
      for ( ; i < len ; i++ ) {
      	blue_value = blue_const + blue_count * 4;
      	trans_value = trans_const + trans_count * 4;
      	if ( parseInt(blue_value / i ) == 1 && parseInt(blue_value % i) == 0 ){
      		out[i] = 255;
      		blue_color_value = orig[i];
      		blue_count++;
      	} 
      	else if ( parseInt( trans_value / i ) == 1 && parseInt( trans_value % i ) == 0 ) {
      		out[i] = orig[i];
      		trans_count++;
      	}
      	else {
      		out[i] = blue_color_value;
      	}
      	//console.log("i = " + i + " blue_value = " + blue_value +  " out[" + i + "] = " + out[i]);
      }
      return out;
}

/*
 * makeReverse - Reads data from an image bitmap array and writes new image data to another array object
 *               The output data contains pixel data inverted, with every color value its opposite on the scale of 0-255.
 *
 *            @original {array} - the source bitmap data, an array of integers from 0-255
 *                         each pixel is represented by four consecutive array elements (r, g, b, a)
 *                         (red, green, blue, alpha), so the array has 4x elements as the image has pixels
 *            @output {array} - the bitmap data array to which the output image is written.
 *
 **/
function makeReverse(original, output){
      // YOUR CODE GOES HERE
      var orig = original, out = output, i = 0, trans_const = 3,
      trans_count = 0, trans_value = 0, len = orig.length;
       for ( ; i < len ; i++ ) {
      	trans_value = trans_const + trans_count * 4;
      	if ( parseInt( trans_value / i ) == 1 && parseInt( trans_value % i ) == 0 ) {
      		out[i] = orig[i];
      		trans_count++;
      	}
      	else {
      		out[i] = 255 - orig[i];
      	}
      }
      return out;
}

/*
 * makeTransparent - Reads data from an image bitmap array and writes new image data to another array object
 *                   The output data contains pixel data with the transparency (alpha) set to a value representing 50%.
 *
 *            @original {array} - the source bitmap data, an array of integers from 0-255
 *                         each pixel is represented by four consecutive array elements (r, g, b, a)
 *                         (red, green, blue, alpha), so the array has 4x elements as the image has pixels
 *             @output {array} - the bitmap data array to which the output image is written.
 *
 **/

function makeTransparent(original,output){
      // YOUR CODE GOES HERE
      var orig = original, out = output, i = 0, trans_const = 3,
      trans_count = 0, trans_value = 0, factor = 0, len = orig.length;
       for ( ; i < len ; i++ ) {
      	trans_value = trans_const + trans_count * 4;
      	if ( parseInt( trans_value / i ) == 1 && parseInt( trans_value % i ) == 0 ) {
      		factor = parseInt(orig[i] / 2 );
      		out[i] = factor;
      		trans_count++;
      	}
      	else {
      		out[i] = orig[i];
      	}
      }
      return out;
}

/*
 * loadComposite - Reads data from two image bitmap arrays (one a photo, and one a text overlay)
 *                  and writes new image data to another array object
 *                 The output data contains pixel data from the two images summed.
 *                             (note that this works with simple summing because the background of this
 *                             particular second image is transparent)
 *
 *            @original {array} - the source image bitmap data, an array of integers from 0-255
 *                         each pixel is represented by four consecutive array elements (r, g, b, a)
 *                         (red, green, blue, alpha), so the array has 4x elements as the image has pixels
 *            @secondOne {array} - the source text overlay bitmap data, an array of integers from 0-255
 *                         each pixel is represented by four consecutive array elements (r, g, b, a)
 *                         (red, green, blue, alpha), so the array has 4x elements as the image has pixels
 *            @output {array} - the bitmap data array to which the output image is written.
 *
 **/
function loadComposite(original, secondOne, output){
       // YOUR CODE GOES HERE
       var orig = original, sec = secondOne, out = output, i = 0, len = orig.length;
       if ( orig.length == sec.length ) {
       	for ( ; i < len ; i++ ) {
      		out[i] = orig[i] + sec[i];
       	}
       }
      return out;
}