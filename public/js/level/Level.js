module.exports = (function (THREE, COLOR, Way, level1, CollisionDetector, Obstacle, $, successScreen, gameoverScreen) {

    var levels = [
        level1
    ];

    /**
     * Represents Level
     * @param {number} current - number starting at 1 representing current level
     * @param {number} speed - speed in milliseconds
     * @constructor
     */
    function Level(current, speed) {
        this.current = current;
        this.way = null;
        this.speed = speed;
        this.collisionDetector = null;
        this.gameOver = false;
        this.score = 0;
    }

    /**
     * generates and positions meshes for the current level
     */
    Level.prototype.prepare = function () {
        var self = this;
        var current = levels[self.current - 1];

        this.way = new Way(current.way.length, current.speed);
        this.way.addObstacles(current.way.obstacles);

        //var obstacles = Obstacle.prepareForCollisionDetection(this.way.radius, current.way.obstacles);
        this.collisionDetector = new CollisionDetector(this.way.obstacles);

        this.way.position();
    };

    /**
     * starts level
     * @param {function} cb - callback function
     */
    Level.prototype.begin = function (cb, protagonist) {
        var self = this;
        var t = self.way.length - 80;
        var animate = function () {
            t--;
            //move way and obstacles
            self.way.moveForwardTillEnd();
            //check whether collision
            self.way.currentPosition.height = protagonist.position.y;
            var collObj = self.collisionDetector.collision(self.way.currentPosition);
            if (collObj.collision) {
                switch (collObj.type) {
                    case "box":
                    case "ring":
                        self.gameOver = true;
                        cb();
                        break;
                    case "diamond":
                        //TODO let diamond fly away
                        self.score++;
                        console.log('aaaaa'+ self.score);
                        if (t > 0) {
                            setTimeout(function () {
                                animate();
                            }, self.speed);
                        } else {
                            cb();
                        }
                        break;
                    default:
                        console.log('Level.prototype.begin(): Obstacle type is unknown.');
                        break;
                }
            } else {
                if (t > 0) {
                    setTimeout(function () {
                        animate();
                    }, self.speed);
                } else {
                    cb();
                }
            }
        };
        animate();
    };

    /**
     * renders hogan tempalte success.mustache and adds it to html-body
     */
    Level.prototype.showSuccessScreen = function () {
        var obj = {
            score: this.score,
            level: this.current,
            next: this.current + 1
        };
        var html = successScreen.render(obj);
        $('body').append(html);
        var marginTop = ($(document).height() - $('#successScreen div').height())/2;
        $('#successScreen div').css('marginTop',marginTop);
    };

    /**
     * renders hogan tempalte gameover.mustache and adds it to html-body
     */
    Level.prototype.showGameOverScreen = function () {
        var obj = {
            score: this.score,
            level: this.current
        };
        var html = gameoverScreen.render(obj);
        $('body').append(html);
        var marginTop = ($(document).height() - $('#gameoverScreen div').height())/2;
        $('#gameoverScreen div').css('marginTop',marginTop);
    };

    return Level;
})(
    require('three'),
    require('../COLOR'),
    require('../way/Way'),
    require('./level1'),
    require('../protagonist/CollisionDetector'),
    require('../way/obstacles/Obstacle'),
    require('jquery'),
    require('../templates/success.mustache'),
    require('../templates/gameover.mustache')
);