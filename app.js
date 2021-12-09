
$(".projectitem").each(function(i,item){


  let rowline = i + 1;

  $(item).css("grid-row", rowline);

  if(rowline % 2 == 0)
  {
    $(item).css("grid-column", 2);
    $(item).css("justify-self", "start");

  }

  else {
    {
      $(item).css("grid-column", 1);
      $(item).css("justify-self", "end");
    }
  }
});

function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}


AOS.init();
