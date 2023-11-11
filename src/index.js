import "simpledotcss";

import Img1 from "./img/img1.jpg";
import Img2 from "./img/img2.jpg";

var myImages = [...document.getElementsByTagName("img")];

document.addEventListener("scroll", function lazyLoad() {
  for (let i = 0; i < myImages.length; i++) {
    var imgPos = myImages[i].getBoundingClientRect();
    var thisImage = myImages[i].getAttribute("data-src");

    if (imgPos.top >= 0 && imgPos.left >= 0 && imgPos.bottom <= (window.innerHeight || document.documentElement.clientHeight) && imgPos.right <= (window.innerWidth || document.documentElement.clientWidth) && thisImage != null) {
      //dont touch images without 'data-src'
      myImages[i].setAttribute("src", thisImage);
      myImages.splice(i, 1);
      break;
    }
  }

  if (myImages.length == 0) {
    document.removeEventListener("scroll", lazyLoad);
  }
});
