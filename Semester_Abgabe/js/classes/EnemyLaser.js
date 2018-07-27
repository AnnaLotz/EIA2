var SpaceInvader;
(function (SpaceInvader) {
    class EnemyLaser extends SpaceInvader.EveryLaser {
        constructor() {
            super();
            //
        } //constructor zu
        getToShootFrom(_enemy) {
            this.enemy = _enemy;
            this.x = this.enemy.x - 1;
            this.y = this.enemy.y;
        }
        checkPosition() {
            if (this.y >= SpaceInvader.canvas.height) {
                this.destroyLaser();
            }
            if (this.x <= SpaceInvader.player.x + 16 && this.x >= SpaceInvader.player.x - 16) {
                if (this.y <= SpaceInvader.player.y + 18 && this.y >= SpaceInvader.player.y + 7) {
                    SpaceInvader.player.isHit();
                    this.destroyLaser();
                }
            }
        } //checkPosition zu
        draw() {
            SpaceInvader.crc2.beginPath();
            SpaceInvader.crc2.strokeStyle = "rgba(0,0,0,0)";
            SpaceInvader.crc2.fillStyle = "rgb(255, 255, 255)"; //white
            SpaceInvader.crc2.moveTo(this.x, this.y);
            SpaceInvader.crc2.lineTo(this.x + 2, this.y);
            SpaceInvader.crc2.lineTo(this.x + 2, this.y + 13);
            SpaceInvader.crc2.lineTo(this.x + 5, this.y + 13);
            SpaceInvader.crc2.lineTo(this.x + 5, this.y + 16);
            SpaceInvader.crc2.lineTo(this.x - 3, this.y + 16);
            SpaceInvader.crc2.lineTo(this.x - 3, this.y + 13);
            SpaceInvader.crc2.lineTo(this.x, this.y + 13);
            SpaceInvader.crc2.lineTo(this.x, this.y);
            SpaceInvader.crc2.closePath();
            SpaceInvader.crc2.stroke();
            SpaceInvader.crc2.fill();
        }
        move() {
            this.y += 4;
        }
    }
    SpaceInvader.EnemyLaser = EnemyLaser; //class laser zu
})(SpaceInvader || (SpaceInvader = {})); //namespace zu
//# sourceMappingURL=EnemyLaser.js.map