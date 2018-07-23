var SpaceInvader;
(function (SpaceInvader) {
    class Laser {
        constructor() {
            console.log("peng");
            this.x = SpaceInvader.player.x - 1;
            this.y = SpaceInvader.player.y;
            this.hitbox = 10;
        } //constructor zu
        checkPosition() {
            /**if (this.y <= 0) {
                this.destroyLaser();
            }*/
            for (let i = 0; i < SpaceInvader.enemies.length; i++) {
                if (this.y <= SpaceInvader.enemies[i].y + 1 && this.y >= SpaceInvader.enemies[i].y - 1) {
                    if (this.x <= SpaceInvader.enemies[i].x + 12 && this.x >= SpaceInvader.enemies[i].x - 12) {
                        let index = i;
                        console.log("enemy " + index + " hit");
                        SpaceInvader.enemies.splice(index, 1);
                    }
                }
            }
        } //checkPosition zu
        destroyLaser() {
            //console.log("destroy laser");
            //                let index: number = movingObjects.indexOf(player.bullets);
            //                //let index: number = movingObjects.length;
            //                //let index: number = <number>movingObjects[10];
            //                console.log(index);
            //                movinice(index, 1);
            //                bullets = 0;
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