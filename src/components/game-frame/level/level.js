import * as Way from '../way/way';
import * as CollisionDetector from '../protagonist/CollisionDetector';
import * as Sound from '../Sound';
import * as Protagonist from '../protagonist/protagonist';
const THREE = require('three');


import level1 from './level1';
import level2 from './level2';
import level3 from './level3';
import level4 from './level4';
import level5 from './level5';
const levels = [
    level1,
    level2,
    level3,
    level4,
    level5
];

/**
 * Represents Level
 */
class Level {
    /**
     * Represents Level
     * @param {number} id - number starting at 1 representing current level
     * @constructor
     */
    constructor(id) {
        this.id = id;
        this.currentLevel = levels.find(level => level.id === this.id);
        this.way =  Way.create(
            this.currentLevel.way.length,
            this.currentLevel.speed,
            this.currentLevel.way.color
        );
        this.speed = 1;
        this.gameOver = false;
        this.diamonds = 0;
        this.lastDiamond = null;
        this.opacityHelper = -375;
        this.playSound = true;
        this.instruction = this.currentLevel.instruction || '';
        this.requiredDiamonds = this.currentLevel.requiredDiamonds || 0;

        this.way.addObstacles(this.currentLevel.way.obstacles);
        this.way.position();

        this.collisionDetector = CollisionDetector.create(this.way.obstacles);
    }


    /**
     * calls collision detector and returns true if game needs to be ended
     * @param {THREE.Object3D} protagonist
     * @returns {boolean} - true if gameover (collision with box or ring)
     */
    checkCollision(protagonist) {
        this.checkCollisionDetection = false;
        let currentPosition = this.getCurrentPosition(protagonist);
        let collObj = this.getCollisionObject(currentPosition);
        switch (collObj.type) {
            case 'box':
            case 'ring':
            case 'cone':
                this.hitObstacle();
                return true;
            case 'diamond':
                this.hitDiamond(collObj);
                return false;
            default:
                return false;
        }
    };

    /**
     * is called when obstacle (except diamond) was hit
     */
    hitObstacle() {
        this.gameOver = true;
        Sound.play('hitObstacle');
    };

    /**
     * increases score on diamond hit and removes it
     * @param {Obstacle} collObj - diamond whitch which the collision happened
     */
    hitDiamond(collObj) {
        if (this.lastDiamond && collObj.mesh.id === this.lastDiamond.mesh.id)
            return;
        Sound.play('hitDiamond');
        this.lastDiamond = collObj;
        this.diamonds++;
        this.lastDiamond.mesh.visible = false;
//        GUI.setDiamondsInScoreBoard(this.diamonds);
    };

    /**
     * gets current position of protagonist
     * @param {Protagonist} protagonist
     * @return {Way.currentPosition}
     */
    getCurrentPosition(protagonist) {
        this.way.currentPosition.height = protagonist.position.y;
        return this.way.currentPosition;
    };

    /**
     * gets collision object
     * @return {Object}
     */
    getCollisionObject(currentPosition) {
        return this.collisionDetector.collision(currentPosition);
    }

    /**
     * sets transparency of protagonist
     * @param {THREE.Object3D} protagonist
     * @param {number} opacity
     */
    makeProtagonistTransparent(protagonist, opacity) {
        Protagonist.makeGroupTransparent(protagonist, opacity);
    }

    /**
     * moves protagonist to position (body and legs)
     * @param {THREE.Object3D} protagonist
     * @param {THREE.clock} clock
     */
    moveProtagonist(protagonist, clock) {
        let position = Math.sin(clock.getElapsedTime() * 10) * 1;
        Protagonist.get().move(protagonist, position);
    };

    /**
     * starts level
     * @param {THREE.Object3D} protagonist - group of meshes of protagonist
     */
    async begin(protagonist) {
        //reset diamonds
        this.lastDiamond = null;
        this.diamonds = 0;
        //reset way
        let t = this.way.length - 80;
        const speedMulti = 2;
        const clock = new THREE.Clock(true);
        while (t > 0 && !this.checkCollision(protagonist)) {
            t -= speedMulti;
            this.moveProtagonist(protagonist.group, clock);
            this.way.moveForwardTillEnd(this.speed * speedMulti);
            await new Promise(res => setTimeout(res, this.speed));
        }
        // GUI.hideInstruction();
    };

    /**
     * renders hogan tempalte success.mustache and adds it to html-body
     */
    async showSuccessScreen() {
        let last = '';
        let canNotBePlayed, disableNextLevel, showOutro;
        if (this.id === levels.length) {
            last = 'gone';
            showOutro = 'true';
        }
        if (!Level.canBePlayed(this.id + 1)) {
            canNotBePlayed = 'true';
            disableNextLevel = 'disabled';
        }
      /*  await GUI.showSuccessScreen({
            score: this.diamonds,
            level: this.id,
            next: this.id + 1,
            last,
            canNotBePlayed,
            disableNextLevel,
            showOutro
        });*/
    };

    /**
     * renders hogan template gameover.mustache and adds it to html-body
     */
    async showGameOverScreen() {
/*        await GUI.showGameOverScreen({
            score: this.diamonds,
            level: this.id
        });*/
    };


}

export function getById(id) {
    const ret = new Level(parseInt(id, 10));
    return ret;
}
