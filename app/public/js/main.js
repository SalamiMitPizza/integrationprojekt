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
    Powerups
} from './level/Powerups';
import {
    GUI
} from './GUI';
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
    render();
    addLevel();
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
    render();
    addLevel();
    await startLevel();
    showScreen();
}

/**
 * renders game
 */
function render() {
    requestAnimationFrame(render);
    mainScene.render();
    mainScene.turn(level[currentLevel]);
    TWEEN.update();
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
function showScreen() {
    if (!level[currentLevel].gameOver) {
        //success
        level[currentLevel].setCookie(true);
        level[currentLevel].showSuccessScreen();
    } else {
        //gameover
        level[currentLevel].setCookie(false);
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
    if (Cookies.get('sound') === "on") return true;
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
 * main function for game
 * @return {Promise}
 */
let main = async function() {
    let URL = window.location.href;
    URLpath = URL.replace(/http:\/\/.+\//g, '');
    if (URLpath !== "") currentLevel = URLpath.replace('#', '');
    GUI.showLoadingIcon();
    await Protagonist.init();
    let background = level[currentLevel].background();
    mainScene = new Scene(window.innerWidth, window.innerHeight, background);
    document.body.appendChild(mainScene.renderer.domElement);
    GUI.removeLoadingIcon();
    if (URLpath == "") await gameWithIntro();
    else {
        if (playThisLevel()) gameWithoutIntro();
        else {
            let newURL = URL.replace(URLpath, '');
            window.location.href = newURL;
        }
    }
};

/**
 * main function of /
 */
let intro = function() {
    GUI.introFadeIn();
};

//reloads page
$(document).on('click', '.button.reload', function() {
    location.reload();
});

//buys powerup on click
$(document).on('click', '.powerup .button', function(event) {
    if (GUI.buttonIsEnabled($(this))) {
        let powerup = GUI.getPowerupIdFromButton(event);
        let total = Powerups.buy(powerup);
        level[currentLevel].updateShopScreen();
        if (Level.canBePlayed(parseInt(currentLevel) + 1)) GUI.updateNextLevelButton();
    }
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
    for (let property in object) {
        if (object.hasOwnProperty(property)) {
            Cookies.remove(property);
        }
    }
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
