var links = document.querySelectorAll('a');
var images = document.querySelectorAll('img');

// Replace all images with images of kittens
images.forEach((image) => {
    image.src = 'http://placekitten.com/' + image.width + '/' + image.height;
});

// Every third link becomes a Rick Roll
links.forEach((link, i) => {
    if(i % 3 === 0){
        link.href = "https://www.youtube.com/watch?v=QtBDL8EiNZo";
    }
});