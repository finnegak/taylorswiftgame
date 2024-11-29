// index.js

function startSlideshow(albumName) {
    const slideshowElement = document.getElementById('album_slideshow');
    const imageCount = 6;
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % imageCount;
        slideshowElement.src = `../slideshow/${albumName}/img${currentIndex}.jpg`;
    }, 3000);
}