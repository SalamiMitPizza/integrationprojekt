'use strict';
//noinspection JSUnresolvedFunction
import {
    Protagonist
} from './protagonist/Protagonist';
import {
    Scene
} from './Scene';
import {
    Level
} from './level/Level';
import {
    Keybindings
} from './Keybindings';
import {
    GUI
} from './GUI';
import {
    Database
} from './Database';

let $ = require('jquery');
let THREE = require('three');
let async = require('async');
let TWEEN = require('tween.js');
let Cookies = require('js-cookie');


//because some three js modules need a global THREE-letiable....
window.THREE = THREE;

let mainScene;
let level = [{},
    new Level(1),
    new Level(2),
    new Level(3),
    new Level(4),
    new Level(5)
];
let currentLevel = 1;
let lastLevel = 1;
let URLpath = '';
window.initMe = 0;

let music = new Audio('/sound/music.mp3');

if (isMusicOn()) music.play();
else GUI.uncheckSoundSwitch();

/**
 * initiates the game with intro
 */
async function gameWithIntro() {
    GUI.startingAnimationFadeIn();
    mainScene.showIntro();
    addLevel();
    await render();
    await Keybindings.keyBind('keydown').first().toPromise();
    await startingAnimation();
    await startLevel();
    await showScreen();
}

/**
 * starts animation on homepage
 * @return {Promise}
 */
function startingAnimation() {
    const fadeTime = 1000;
    GUI.startingAnimationFadeOut(fadeTime);
    return new Promise(resolve => {
        setTimeout(async() => {
            await mainScene.startingAnimation();
            resolve();
        }, fadeTime);
    });

}


/**
 * starts game without intro
 * @return {Promise}
 */
async function gameWithoutIntro() {
    // TODO preload everything
    mainScene.simpleIntro();
    addLevel();
    await render();
    await startLevel();
    showScreen();
}

/**
 * renders game
 */
function render() {
    return new Promise(resolve => {
        requestAnimationFrame(() => {
            render();
            resolve();
        });
        mainScene.render();
        mainScene.turn(level[currentLevel]);
        TWEEN.update();
    });
}

/**
 * adds current level to scene
 */
function addLevel() {
    level[currentLevel].prepare();
    mainScene.addLevel(level[currentLevel]);
}

/**
 * starts current level
 * @return {Promise}
 */
async function startLevel() {
    const subs = [];
    GUI.fadeInScoreboard();
    GUI.fadeInSoundSwitch();
    subs.push(
        Keybindings.keyBind('keydown')
        .subscribe(direction => Scene.startMovingProtagonist(mainScene, direction))
    );
    subs.push(
        Keybindings.keyBind('keyup')
        .subscribe(direction => Scene.stopMovingProtagonist(mainScene, direction))
    );
    //start moving way
    mainScene.move.continue = true;
    const protagonist = mainScene.getProtagonist();
    await level[currentLevel].begin(protagonist);
    mainScene.move.continue = false;
    subs.forEach(sub => sub.unsubscribe());
}

/**
 * shows gameover or successcreen at the end of the level and updates Cookies
 */
async function showScreen() {
    if (!level[currentLevel].gameOver) {
        //success
        await level[currentLevel].storeToDB(true);
        level[currentLevel].showSuccessScreen();
    } else {
        //gameover
        await level[currentLevel].storeToDB(false);
        level[currentLevel].showGameOverScreen();
    }
}

/**
 * checks whether level is allowed to be played, if yes return true
 * @param {number} level
 * @returns {boolean}
 */
function playThisLevel() {
    if (currentLevel === 1) return true;
    return Level.canBePlayed(currentLevel);
}

/**
 * checks in cookies whether sound is on
 * @returns {boolean} - true if sound is on
 */
function isMusicOn() {
    if (Cookies.get('sound') === 'on') return true;
    if (Cookies.get('sound')) {
        level[currentLevel].playSound = false;
        return false;
    }
    setMusicSettings(true);
    return true;

}

/**
 * sets music settings in Cookies
 */
function setMusicSettings(isOn) {
    if (isOn) Cookies.set('sound', 'on');
    else Cookies.set('sound', 'off');
}

/**
 * reloads page
 */
function reloadPage() {
    location.reload();
}

/**
 * calls /cheater - when somebody tries to cheat
 */
function detectedCheating(URL, URLpath) {
  let newURL = URL.replace(URLpath, 'cheater');
  window.location.href = newURL;
}

/**
 * main function for game
 * @return {Promise}
 */
let main = async function() {
    await Database.create();
    let URL = window.location.href;
    URLpath = URL.replace(/http:\/\/.+\//g, '');
    if (URLpath !== '') currentLevel = URLpath.replace('#', '');
    GUI.showLoadingIcon();
    await Protagonist.init();
    let background = level[currentLevel].background();
    mainScene = new Scene(window.innerWidth, window.innerHeight, background);
    document.body.appendChild(mainScene.renderer.domElement);
    GUI.removeLoadingIcon();
    if (URLpath == '') await gameWithIntro();
    else {
        if (await playThisLevel()) gameWithoutIntro();
        else detectedCheating(URL, URLpath);
    }
};

let setLastSuccessfulLevel = async function() {
    await Database.create();
    lastLevel = await Level.lastSuccessfulLevel();
};


/**
 * main function of /
 */
let intro = function() {
    GUI.introFadeIn();
};

// reloads page on resize
$(window).on('resize', function() {
    reloadPage();
});

// reloads page
$(document).on('click', '.button.reload', function() {
    reloadPage();
});

//enables and disables sound
$(document).on('click', '#soundSwitch', function(event) {
    level[currentLevel].playSound = GUI.getSoundSwitch();
    setMusicSettings(level[currentLevel].playSound);
    if (level[currentLevel].playSound) music.play();
    else music.pause();
});

//resets cookies to play game from start
$(document).on('click', '#playagain', function(event) {
    let object = Cookies.get();
    for (let property in object) if (object.hasOwnProperty(property)) Cookies.remove(property);
});

$(document).on('click', '#lastSuccessfulLevel', async function(event) {
  let URL = window.location.href;
  URLpath = URL.replace(/http:\/\/.+\//g, '');
  let newURL = URL.replace(URLpath, '#' + lastLevel);
  window.location.href = newURL;
});

music.addEventListener('ended', function() {
    if (level[currentLevel].playSound) {
        this.currentTime = 0;
        this.play();
    }
}, false);

//store functions to window
window.intro = intro;
window.main = main;
window.setLastSuccessfulLevel = setLastSuccessfulLevel;
