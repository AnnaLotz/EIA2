var SpaceInvader;
(function (SpaceInvader) {
    class Laser {
        constructor() {
            console.log("peng");
            this.x = SpaceInvader.player.x - 1;
            this.y = SpaceInvader.player.y;
            SpaceInvader.player.bullets += 1;
        } //constructor zu
        checkPosition() {
            if (this.y <= 0) {
                this.destroyLaser();
            }
            for (let i = 0; i < SpaceInvader.enemies.length; i++) {
                if (this.y <= SpaceInvader.enemies[i].y + 1 && this.y >= SpaceInvader.enemies[i].y - 1) {
                    if (this.x <= SpaceInvader.enemies[i].x + 12 && this.x >= SpaceInvader.enemies[i].x - 12) {
                        SpaceInvader.enemies[i].givePoints();
                        let index = i;
                        SpaceInvader.enemies.splice(index, 1);
                        this.destroyLaser();
                        console.log(SpaceInvader.score);
                    }
                }
            }
        } //checkPosition zu
        destroyLaser() {
            console.log("destroy laser");
            let index = SpaceInvader.movingObjects.indexOf(this);
            SpaceInvader.movingObjects.splice(index, 1);
            SpaceInvader.player.bullets -= 1;
        } //destroy laser zu
        draw() {
            SpaceInvader.crc2.strokeStyle = "white";
            SpaceInvader.crc2.fillStyle = "white";
            SpaceInvader.crc2.moveTo(this.x, this.y);
            SpaceInvader.crc2.lineTo(this.x + 2, this.y);
            SpaceInvader.crc2.lineTo(this.x + 2, this.y - 16);
            SpaceInvader.crc2.lineTo(this.x, this.y - 16);
            SpaceInvader.crc2.lineTo(this.x, this.y);
            SpaceInvader.crc2.closePath();
            SpaceInvader.crc2.fill();
        }
        move() {
            this.y -= 3;
        }
    }
    SpaceInvader.Laser = Laser; //class laser zu
})(SpaceInvader || (SpaceInvader = {})); //namespace zu
//# sourceMappingURL=Laser.js.map