'use strict';

/**
 * @type {string}
 */

let position = ['75px', '45%', '52%', '90%'],
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
    carBlock.style.left = position[1];

}

/**
 * @param elem
 */

function moveToRightFromTraffic(elem) {

    let clAddArray = ['atRight'];

    elem.classList.remove('atTraffic', 'fromLeft');

    addClassesToElements(clAddArray, elem);

    carBlock.style.left = position[3];

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

    carBlock.style.left = position[2];

}

/**
 * @param elem
 */

function moveToLeftFromTraffic(elem) {

    let clAddArray = ['atLeft'];

    elem.classList.remove('atTraffic', 'fromRight');

    addClassesToElements(clAddArray, elem);

    carBlock.style.left = position[0];

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
    skyBlock.classList.remove('dark');
}

/**
 * Changing car and sky to night mode
 */

function changeToNight() {
    skyBlock.classList.add('dark');
}
