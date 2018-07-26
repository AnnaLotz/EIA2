var SpaceInvader;
(function (SpaceInvader) {
    class Enemy {
        constructor() {
            this.health = 1;
            this.speed = 0.4;
            this.direction = 1;
        }
        checkPositionLeftOrRight() {
            //check ob enemy ganz rechts ...
            if (this.x > SpaceInvader.canvas.width - 30) {
                return true;
            }
            else if (this.x < 30) {
                return true;
            }
            else {
                return false;
            }
        }
        changeSpeed() {
            this.speed += 0.05;
        }
        givePoints() {
            SpaceInvader.score += this.points;
        }
        move() {
            this.x += this.speed * this.direction;
        }
        draw() {
            //
        }
    }
    SpaceInvader.Enemy = Enemy; //class enemy zu
})(SpaceInvader || (SpaceInvader = {})); //namespace zu
//# sourceMappingURL=Enemy.js.map