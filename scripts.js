var plane = document.querySelector('#plane');
var body = document.querySelector('body');

var movesClasses = ['fromPortugalToAngola', 'fromAngolaToMexico', 'fromMexicoToPortugal'];
var planeRotations = ['firstRotation', 'secondRotation', 'thirdRotation'];
var imageCards = document.querySelectorAll('.imageCard');
var counter = 0;
var imageCardCounter = 0;
var clicksCounter = 0;

body.addEventListener('keypress', function(e) {

    if (e.keyCode !== 13) {
        return;
    }

    if (clicksCounter === 28) {
        window.location = "end.html";
        return;
    }
    clicksCounter++;

    if (imageCardCounter !== 6) {
        imageCards[imageCardCounter].classList.remove('hidden');
        imageCardCounter++;
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