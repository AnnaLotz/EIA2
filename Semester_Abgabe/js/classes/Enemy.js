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
            //enemy ganz rechts oder links
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
        move() {
            this.x += this.speed * this.direction;
        }
        draw() {
            SpaceInvader.crc2.strokeStyle = "white";
            SpaceInvader.crc2.fillStyle = "white";
            SpaceInvader.crc2.moveTo(this.x, this.y - 2);
            SpaceInvader.crc2.lineTo(this.x + 2, this.y - 2);
            SpaceInvader.crc2.lineTo(this.x + 2, this.y - 4);
            SpaceInvader.crc2.lineTo(this.x + 6, this.y - 2);
            SpaceInvader.crc2.closePath();
            SpaceInvader.crc2.fill();
        }
    }
    SpaceInvader.Enemy = Enemy; //class enemy zu
})(SpaceInvader || (SpaceInvader = {})); //namespace zu
//# sourceMappingURL=Enemy.js.map