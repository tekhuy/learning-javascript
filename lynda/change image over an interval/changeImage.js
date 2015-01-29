var myImage = document.getElementById("mainImage");

var imageArray = ["_images/overlook.jpg", "_images/winery_sign.jpg", "_images/lunch.jpg", "_images/bigSur.jpg"];

var imageIndex = 0;

function changeImage() {
  myImage.setAttribute("src", imageArray[imageIndex]);
  imageIndex++;
  if (imageIndex >= imageArray.length) {
    imageIndex = 0;
  };
};

setInterval(changeImage, 5000);

// if want to stop image from changing with a click on th eimage

myImage.oneclick = function() {
  clearInterval(intervalHandle)
};