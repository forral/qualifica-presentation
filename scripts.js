var plane = document.querySelector('#plane');
var body = document.querySelector('body');

var movesClasses = ['fromPortugalToAngola', 'fromAngolaToMexico', 'fromMexicoToPortugal'];
var planeRotations = ['firstRotation', 'secondRotation', 'thirdRotation'];
var imageCards = document.querySelectorAll('.imageCard');
var counter = 0;
var imageCardCounter = 0;
var clicksCounter = 0;
var polaroidCounter = 0;

body.addEventListener('keypress', function(e) {

    // if the key is not enter don't do nothing
    if (e.keyCode !== 13) {
        return;
    }

    // change to the end when clicked enter 27 times
    if (clicksCounter === 27) {
        window.location = "end.html";
        return;
    }
    clicksCounter++;

    if (imageCardCounter !== 6) {
        var currentImageCard = imageCards[imageCardCounter];
        currentImageCard.classList.remove('hidden');
        currentImageCard.children[0].children[0].children[0].src= picturesTitles[polaroidCounter].url;
        currentImageCard.children[0].children[1].textContent = picturesTitles[polaroidCounter].title;
        imageCardCounter++;
        polaroidCounter++;
        return;
    }

    plane.className = 'fas fa-plane';
    plane.classList.add(planeRotations[counter])
    plane.classList.add(movesClasses[counter]);

    imageCards.forEach(function(imageCard) {
        imageCard.classList.add('hidden');
    });

    imageCardCounter = 0;
    counter++;

    if (counter > 2) {
        counter = 0;
    }
});