var SpaceInvader;
(function (SpaceInvader) {
    class Laser extends SpaceInvader.EveryLaser {
        constructor() {
            super();
            this.x = SpaceInvader.player.x - 1;
            this.y = SpaceInvader.player.y;
            SpaceInvader.player.bullets += 1;
        } //constructor zu
        checkPosition() {
            if (this.y <= 0) {
                this.destroyLaser();
            }
            for (let i = 0; i < SpaceInvader.enemies.length; i++) {
                if (this.y <= SpaceInvader.enemies[i].y + 1 && this.y >= SpaceInvader.enemies[i].y - 24) {
                    if (this.x <= SpaceInvader.enemies[i].x + SpaceInvader.enemies[i].width && this.x >= SpaceInvader.enemies[i].x - SpaceInvader.enemies[i].width) {
                        SpaceInvader.enemies[i].givePoints();
                        let index = i;
                        SpaceInvader.enemies.splice(index, 1);
                        SpaceInvader.totalEnemies--;
                        this.destroyLaser();
                    }
                }
            }
            for (let i = 0; i < SpaceInvader.ufos.length; i++) {
                if (this.y <= SpaceInvader.ufos[i].y && this.y >= SpaceInvader.ufos[i].y - 21) {
                    if (this.x <= SpaceInvader.ufos[i].x + SpaceInvader.ufos[i].width && this.x >= SpaceInvader.ufos[i].x - SpaceInvader.ufos[i].width) {
                        SpaceInvader.ufos[i].givePoints();
                        let index = i;
                        SpaceInvader.ufos.splice(index, 1);
                        this.destroyLaser();
                    }
                }
            }
        } //checkPosition zu
        changeEnemySpeed() {
            for (let j = 0; j < SpaceInvader.enemies.length; j++) {
                SpaceInvader.enemies[j].changeSpeed();
            }
        }
        destroyLaser() {
            let index = SpaceInvader.everyLaser.indexOf(this);
            SpaceInvader.everyLaser.splice(index, 1);
            SpaceInvader.player.bullets -= 1;
        } //destroy laser zu
        draw() {
            SpaceInvader.crc2.beginPath();
            SpaceInvader.crc2.strokeStyle = "rgba(0,0,0,0)";
            SpaceInvader.crc2.fillStyle = "rgb(255, 255, 255)"; //white
            SpaceInvader.crc2.moveTo(this.x, this.y);
            SpaceInvader.crc2.lineTo(this.x + 2, this.y);
            SpaceInvader.crc2.lineTo(this.x + 2, this.y - 16);
            SpaceInvader.crc2.lineTo(this.x, this.y - 16);
            SpaceInvader.crc2.lineTo(this.x, this.y);
            SpaceInvader.crc2.closePath();
            SpaceInvader.crc2.stroke();
            SpaceInvader.crc2.fill();
        }
        move() {
            this.y -= 8;
        }
    }
    SpaceInvader.Laser = Laser; //class laser zu
})(SpaceInvader || (SpaceInvader = {})); //namespace zu
//# sourceMappingURL=Laser.js.map