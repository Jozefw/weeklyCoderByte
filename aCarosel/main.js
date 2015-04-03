// put images in array to handle the addition of more images in future
var imageArray = [
	'image1.jpg',
	'image2.jpg',
	'image3.jpg'
],

// counter for image index
currentImageindex = 0,
// variables for event handlers
$backward= $('#backward'),
$forward = $('#forward');

// event handlers
$backward.on("click", backClick);
$forward.on("click", forwardClick);

 function backClick(event) {
 // event.preventDefault();
   if ( currentImageindex > 0 ) {
 	    currentImageindex --;
 		  $('#imageContainer').attr('src', imageArray[currentImageindex]);
 	 }
 	console.log("backClick clicked" + currentImageindex);
 }

 function forwardClick(event) {
 	// event.preventDefault;
 	if ( currentImageindex < imageArray.length-1 ) {
 		currentImageindex++;
 		$('#imageContainer').attr('src', imageArray[currentImageindex]);
 	}
 	console.log("forardClick clicked" + currentImageindex);
 }

