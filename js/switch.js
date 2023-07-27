const image = document.getElementById('myImage');

image.addEventListener('click', function () {
    if (image.getAttribute('src') === 'img/sun-regular-24.png') {
        image.setAttribute('src', 'img/moon-regular-24.png');
        image.setAttribute('alt', 'Imagen 2');
    } else {
        image.setAttribute('src', 'img/sun-regular-24.png');
        image.setAttribute('alt', 'Imagen 1');
    }
});
