/*  Aufgabe: Abschlussaufgabe - Space Invaders
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var SpaceInvader2;
(function (SpaceInvader2) {
    class Ufo extends SpaceInvader2.Enemy {
        constructor() {
            super();
            this.x = SpaceInvader2.canvas.width + 25;
            this.y = 90;
            this.setPoints();
            this.width = 24;
        }
        //random Punkte vergeben
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
            let index = SpaceInvader2.ufos.indexOf(this);
            SpaceInvader2.ufos.splice(index, 1);
        }
        draw() {
            SpaceInvader2.crc2.beginPath();
            SpaceInvader2.crc2.strokeStyle = "rgba(0,0,0,0)";
            SpaceInvader2.crc2.fillStyle = "rgb(255, 0, 0)"; //red
            SpaceInvader2.crc2.lineWidth = 1;
            SpaceInvader2.crc2.moveTo(this.x, this.y - 3);
            SpaceInvader2.crc2.lineTo(this.x + 6, this.y - 3);
            SpaceInvader2.crc2.lineTo(this.x + 6, this.y - 6);
            SpaceInvader2.crc2.lineTo(this.x + 9, this.y - 6);
            SpaceInvader2.crc2.lineTo(this.x + 9, this.y - 3);
            SpaceInvader2.crc2.lineTo(this.x + 12, this.y - 3);
            SpaceInvader2.crc2.lineTo(this.x + 12, this.y);
            SpaceInvader2.crc2.lineTo(this.x + 15, this.y);
            SpaceInvader2.crc2.lineTo(this.x + 15, this.y - 3);
            SpaceInvader2.crc2.lineTo(this.x + 18, this.y - 3);
            SpaceInvader2.crc2.lineTo(this.x + 18, this.y - 6);
            SpaceInvader2.crc2.lineTo(this.x + 24, this.y - 6);
            SpaceInvader2.crc2.lineTo(this.x + 24, this.y - 9);
            SpaceInvader2.crc2.lineTo(this.x + 21, this.y - 9);
            SpaceInvader2.crc2.lineTo(this.x + 21, this.y - 12);
            SpaceInvader2.crc2.lineTo(this.x + 18, this.y - 12);
            SpaceInvader2.crc2.lineTo(this.x + 18, this.y - 15);
            SpaceInvader2.crc2.lineTo(this.x + 12, this.y - 15);
            SpaceInvader2.crc2.lineTo(this.x + 12, this.y - 18);
            SpaceInvader2.crc2.lineTo(this.x + 6, this.y - 18);
            SpaceInvader2.crc2.lineTo(this.x + 6, this.y - 21);
            SpaceInvader2.crc2.lineTo(this.x - 6, this.y - 21);
            SpaceInvader2.crc2.lineTo(this.x - 6, this.y - 18);
            SpaceInvader2.crc2.lineTo(this.x - 12, this.y - 18);
            SpaceInvader2.crc2.lineTo(this.x - 12, this.y - 15);
            SpaceInvader2.crc2.lineTo(this.x - 18, this.y - 15);
            SpaceInvader2.crc2.lineTo(this.x - 18, this.y - 12);
            SpaceInvader2.crc2.lineTo(this.x - 21, this.y - 12);
            SpaceInvader2.crc2.lineTo(this.x - 21, this.y - 9);
            SpaceInvader2.crc2.lineTo(this.x - 24, this.y - 9);
            SpaceInvader2.crc2.lineTo(this.x - 24, this.y - 6);
            SpaceInvader2.crc2.lineTo(this.x - 18, this.y - 6);
            SpaceInvader2.crc2.lineTo(this.x - 18, this.y - 3);
            SpaceInvader2.crc2.lineTo(this.x - 15, this.y - 3);
            SpaceInvader2.crc2.lineTo(this.x - 15, this.y);
            SpaceInvader2.crc2.lineTo(this.x - 12, this.y);
            SpaceInvader2.crc2.lineTo(this.x - 12, this.y - 3);
            SpaceInvader2.crc2.lineTo(this.x - 9, this.y - 3);
            SpaceInvader2.crc2.lineTo(this.x - 9, this.y - 6);
            SpaceInvader2.crc2.lineTo(this.x - 6, this.y - 6);
            SpaceInvader2.crc2.lineTo(this.x - 6, this.y - 3);
            SpaceInvader2.crc2.lineTo(this.x, this.y - 3);
            SpaceInvader2.crc2.closePath();
            SpaceInvader2.crc2.stroke();
            SpaceInvader2.crc2.fill();
            SpaceInvader2.crc2.fillStyle = "rgb(0, 0, 0)"; //black
            SpaceInvader2.crc2.fillRect(this.x - 15, this.y - 12, 3, 3);
            SpaceInvader2.crc2.fillRect(this.x - 6, this.y - 12, 3, 3);
            SpaceInvader2.crc2.fillRect(this.x + 3, this.y - 12, 3, 3);
            SpaceInvader2.crc2.fillRect(this.x + 12, this.y - 12, 3, 3);
        }
        move() {
            this.x -= 2.8;
        }
    }
    SpaceInvader2.Ufo = Ufo; //class enemy zu
})(SpaceInvader2 || (SpaceInvader2 = {})); //namespace zu
//# sourceMappingURL=Ufo.js.map