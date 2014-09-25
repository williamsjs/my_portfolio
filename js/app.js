//Problem: User when clicking on image goes to a dead end.
//Solution: Create an overlay w/ the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

 // An image to overlay
$overlay.append($image);

  // A caption
$overlay.append($caption);
// Add overlay
$(".pics-images").append($overlay);


// Capture the click event on a link to an image
$("#gallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  // Update overlay w/ the image linked in the link
  $image.attr("src", imageLocation);
  
  
  // Show the overlay.
    $overlay.show();
  
  // Get child's alt attribute and set caption
var captionText = $(this).children("img").attr("alt");
$caption.text(captionText);
  
  
});

//3. When overlay is clicked
$overlay.click(function() {
     //Hide overlay
  $overlay.hide();
});