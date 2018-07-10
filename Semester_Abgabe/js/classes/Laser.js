var SpaceInvader;
(function (SpaceInvader) {
    class Laser {
        constructor() {
            console.log("peng");
            this.x = SpaceInvader.player.x - 1;
            this.y = SpaceInvader.player.y;
        }
        checkPosition() {
            if (this.y <= 0) {
                this.destroyLaser();
            }
        }
        destroyLaser() {
            //console.log("destroy laser");
            //                let index: number = movingObjects.indexOf(player.bullets);
            //                //let index: number = movingObjects.length;
            //                //let index: number = <number>movingObjects[10];
            //                console.log(index);
            //                movingObjects.splice(index, 1);
            //                bullets = 0;
        }
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