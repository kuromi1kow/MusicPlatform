
document.addEventListener("keypress", function (event) {
    if (event.key === '1' ) {
      window.location.href = 'index.html#start';
    } else if (event.key === '2') {
      window.location.href = 'index.html#middle';
    } else if (event.key === '3') {
      window.location.href = 'index.html#end';
    }
  });
  function changeImage() {
    var image = document.getElementById('rio');
    var imageSources = [
        'img/80538dc.jpg',
        'img/pharaoh.jpg'
    ];

    var currentSrc = image.getAttribute('src');

    var currentIndex = imageSources.indexOf(currentSrc);

    if (currentIndex === imageSources.length - 1) {
        image.setAttribute('src', imageSources[0]);
    } else {
        image.setAttribute('src', imageSources[currentIndex + 1]);
    }
}
function changeImage() {
    var image = document.getElementById('rio');
    var imageSources = [
        'img/80538dc.jpg',
        'img/pharaoh.jpg'
    ];

    var currentSrc = image.getAttribute('src');

    var currentIndex = imageSources.indexOf(currentSrc);

    if (currentIndex === imageSources.length - 1) {
        image.setAttribute('src', imageSources[0]);
    } else {
        image.setAttribute('src', imageSources[currentIndex + 1]);
    }
}
function changeImage2() {
    var image = document.getElementById('second');
    var imageSources = [
        "img/second.jpg",
        'img/asap.jpg'
    ];

    var currentSrc = image.getAttribute('src');

    var currentIndex = imageSources.indexOf(currentSrc);

    if (currentIndex === imageSources.length - 1) {
        image.setAttribute('src', imageSources[0]);
    } else {
        image.setAttribute('src', imageSources[currentIndex + 1]);
    }
}
function changeImage3() {
    var image = document.getElementById('third');
    var imageSources = [
        "img/платина-platina-and-og-buda-сладких-снов-Cover-Art.jpg",
        'img/asasp2.jpg'
    ];

    var currentSrc = image.getAttribute('src');

    var currentIndex = imageSources.indexOf(currentSrc);

    if (currentIndex === imageSources.length - 1) {
        image.setAttribute('src', imageSources[0]);
    } else {
        image.setAttribute('src', imageSources[currentIndex + 1]);
    }
}