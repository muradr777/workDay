/**
 * @type {string}
 */

let leftPoint = '60px',
    rightPoint = '88.5%',
    trafficLeftPoint = '45%',
    trafficRightPoint = '52%',
    carMorning = 'img/sedan-512.png',
    carNight = 'img/sedan-512-night.png',
    carImg = document.querySelector('.carBlock img'),
    skyBlock = document.querySelector('.skyLine'),
    toggleBtn = document.querySelector('.toggleBtn'),
    carBlock = document.querySelector('.carBlock');

toggleBtn.addEventListener('click', function() {
    slideSquare(this);
});

// -- Functions --

/**
 * @param elem
 * @returns {boolean}
 */

function slideSquare(elem) {

    if (elem.classList.contains('atLeft')) {

        changeToMorning();
        moveToTrafficFromLeft(elem);

    } else if (elem.classList.contains('atTraffic') && elem.classList.contains('fromLeft')) {

        moveToRightFromTraffic(elem);

    } else if (elem.classList.contains('atRight')) {

        changeToNight();
        moveToTrafficFromRight(elem);

    } else if (elem.classList.contains('atTraffic') && elem.classList.contains('fromRight')) {

        moveToLeftFromTraffic(elem);
    }

    return false;
}

/**
 * @param elem
 */

function moveToTrafficFromLeft(elem) {

    let clAddArray = ['atTraffic', 'fromLeft'];

    elem.classList.remove('atLeft');
    addClassesToElements(clAddArray, elem);
    carBlock.style.left = trafficLeftPoint;

}

/**
 * @param elem
 */

function moveToRightFromTraffic(elem) {

    let clAddArray = ['atRight'];

    elem.classList.remove('atTraffic', 'fromLeft');

    addClassesToElements(clAddArray, elem);

    carBlock.style.left = rightPoint;

    setTimeout(function() {
        carBlock.style.transform = 'rotateY(-180deg)';
    }, 3000);

}

/**
 * @param elem
 */

function moveToTrafficFromRight(elem) {

    let clAddArray = ['atTraffic', 'fromRight'];

    elem.classList.remove('atRight');

    addClassesToElements(clAddArray, elem);

    carBlock.style.left = trafficRightPoint;

}

/**
 * @param elem
 */

function moveToLeftFromTraffic(elem) {

    let clAddArray = ['atLeft'];

    elem.classList.remove('atTraffic', 'fromRight');

    addClassesToElements(clAddArray, elem);

    carBlock.style.left = leftPoint;

    setTimeout(function() {
        carBlock.style.transform = 'rotateY(0)';

        changeToMorning();
    }, 3000);

}

/**
 * @param arrayClasses
 * @param element
 */

function addClassesToElements(arrayClasses, element) {

    arrayClasses.forEach(function (classItem) {
        element.classList.add(classItem);
    });

}

/**
 * Changing car and sky to morning mode
 */

function changeToMorning() {
    carImg.setAttribute("src", carMorning);
    skyBlock.style.backgroundColor = '#82D7E8';
}

/**
 * Changing car and sky to night mode
 */

function changeToNight() {
    carImg.setAttribute("src", carNight);
    skyBlock.style.backgroundColor = '#000888';
}
