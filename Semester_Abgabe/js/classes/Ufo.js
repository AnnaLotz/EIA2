var SpaceInvader;
(function (SpaceInvader) {
    class Ufo extends SpaceInvader.Enemy {
        constructor() {
            super();
            this.x = SpaceInvader.canvas.width + 25;
            this.y = 90;
            this.setPoints();
            this.width = 24; //noch �ndern
        }
        setPoints() {
            let p = Math.floor(Math.random() * 3);
            switch (p) {
                case 0:
                    this.points = 50;
                    break;
                case 1:
                    this.points = 100;
                    break;
                case 2:
                    this.points = 150;
                    break;
            }
        }
        checkPosition() {
            if (this.x <= -25) {
                this.destroyUfo();
            }
        }
        destroyUfo() {
            let index = SpaceInvader.movingObjects.indexOf(this);
            SpaceInvader.ufos.splice(index, 1);
        }
        draw() {
            SpaceInvader.crc2.beginPath();
            SpaceInvader.crc2.strokeStyle = "rgba(0,0,0,0)";
            SpaceInvader.crc2.fillStyle = "rgb(255, 0, 0)"; //white
            SpaceInvader.crc2.lineWidth = 1;
            SpaceInvader.crc2.moveTo(this.x, this.y - 3);
            SpaceInvader.crc2.lineTo(this.x + 6, this.y - 3);
            SpaceInvader.crc2.lineTo(this.x + 6, this.y - 6);
            SpaceInvader.crc2.lineTo(this.x + 9, this.y - 6);
            SpaceInvader.crc2.lineTo(this.x + 9, this.y - 3);
            SpaceInvader.crc2.lineTo(this.x + 12, this.y - 3);
            SpaceInvader.crc2.lineTo(this.x + 12, this.y);
            SpaceInvader.crc2.lineTo(this.x + 15, this.y);
            SpaceInvader.crc2.lineTo(this.x + 15, this.y - 3);
            SpaceInvader.crc2.lineTo(this.x + 18, this.y - 3);
            SpaceInvader.crc2.lineTo(this.x + 18, this.y - 6);
            SpaceInvader.crc2.lineTo(this.x + 24, this.y - 6);
            SpaceInvader.crc2.lineTo(this.x + 24, this.y - 9);
            SpaceInvader.crc2.lineTo(this.x + 21, this.y - 9);
            SpaceInvader.crc2.lineTo(this.x + 21, this.y - 12);
            SpaceInvader.crc2.lineTo(this.x + 18, this.y - 12);
            SpaceInvader.crc2.lineTo(this.x + 18, this.y - 15);
            SpaceInvader.crc2.lineTo(this.x + 12, this.y - 15);
            SpaceInvader.crc2.lineTo(this.x + 12, this.y - 18);
            SpaceInvader.crc2.lineTo(this.x + 6, this.y - 18);
            SpaceInvader.crc2.lineTo(this.x + 6, this.y - 21);
            SpaceInvader.crc2.lineTo(this.x - 6, this.y - 21);
            SpaceInvader.crc2.lineTo(this.x - 6, this.y - 18);
            SpaceInvader.crc2.lineTo(this.x - 12, this.y - 18);
            SpaceInvader.crc2.lineTo(this.x - 12, this.y - 15);
            SpaceInvader.crc2.lineTo(this.x - 18, this.y - 15);
            SpaceInvader.crc2.lineTo(this.x - 18, this.y - 12);
            SpaceInvader.crc2.lineTo(this.x - 21, this.y - 12);
            SpaceInvader.crc2.lineTo(this.x - 21, this.y - 9);
            SpaceInvader.crc2.lineTo(this.x - 24, this.y - 9);
            SpaceInvader.crc2.lineTo(this.x - 24, this.y - 6);
            SpaceInvader.crc2.lineTo(this.x - 18, this.y - 6);
            SpaceInvader.crc2.lineTo(this.x - 18, this.y - 3);
            SpaceInvader.crc2.lineTo(this.x - 15, this.y - 3);
            SpaceInvader.crc2.lineTo(this.x - 15, this.y);
            SpaceInvader.crc2.lineTo(this.x - 12, this.y);
            SpaceInvader.crc2.lineTo(this.x - 12, this.y - 3);
            SpaceInvader.crc2.lineTo(this.x - 9, this.y - 3);
            SpaceInvader.crc2.lineTo(this.x - 9, this.y - 6);
            SpaceInvader.crc2.lineTo(this.x - 6, this.y - 6);
            SpaceInvader.crc2.lineTo(this.x - 6, this.y - 3);
            SpaceInvader.crc2.lineTo(this.x, this.y - 3);
            SpaceInvader.crc2.closePath();
            SpaceInvader.crc2.stroke();
            SpaceInvader.crc2.fill();
            SpaceInvader.crc2.fillStyle = "rgb(0, 0, 0)"; //black
            SpaceInvader.crc2.fillRect(this.x - 15, this.y - 12, 3, 3);
            SpaceInvader.crc2.fillRect(this.x - 6, this.y - 12, 3, 3);
            SpaceInvader.crc2.fillRect(this.x + 3, this.y - 12, 3, 3);
            SpaceInvader.crc2.fillRect(this.x + 12, this.y - 12, 3, 3);
        }
        move() {
            this.x -= 2.8;
        }
    }
    SpaceInvader.Ufo = Ufo; //class enemy zu
})(SpaceInvader || (SpaceInvader = {})); //namespace zu
//# sourceMappingURL=Ufo.js.map