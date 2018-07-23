var SpaceInvader;
(function (SpaceInvader) {
    class Enemy {
        constructor() {
            this.health = 1;
            this.speed = 1;
            this.direction = 1;
            console.log("new enemy");
        }
        checkPosition() {
            //ob enemy ganz rechts oder links
            if (this.x > SpaceInvader.canvas.width - 30) {
                //console.log(this.x);
                return true;
            }
            else if (this.x < 30) {
                return true;
            }
            else {
                return false;
            }
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