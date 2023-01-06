var myImages = [...document.getElementsByTagName('img')];
console.log(myImages)

document.addEventListener('scroll', function () {
    for (i=0; i<myImages.length; i++) {
        var imgPos = myImages[i].getBoundingClientRect();
        var thisImage = myImages[i].getAttribute('data-src');

        if (imgPos.top >= 0 &&
        imgPos.left >= 0 &&
        imgPos.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        imgPos.right <= (window.innerWidth || document.documentElement.clientWidth) && 
        thisImage != null) //dont touch images without 'data-src'
        {
            myImages[i].setAttribute('src', thisImage);
            myImages.shift()
            console.log(myImages)
            break;
        }
    }

});