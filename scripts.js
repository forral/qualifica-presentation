var plane = document.querySelector('#plane');
var body = document.querySelector('body');

var movesClasses = ['fromPortugalToAngola', 'fromAngolaToMexico', 'fromMexicoToPortugal'];
var planeRotations = ['firstRotation', 'secondRotation', 'thirdRotation'];
var counter = 0;

body.addEventListener('keypress', function(e) {

    if (e.keyCode !== 13) {
        return;
    }

    plane.className = 'fas fa-plane';
    plane.classList.add(planeRotations[counter])
    plane.classList.add(movesClasses[counter]);
    counter++;

    if (counter > 2) {
        counter = 0;
    }
});