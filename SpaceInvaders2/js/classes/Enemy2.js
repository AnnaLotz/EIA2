/*  Aufgabe: Abschlussaufgabe - Space Invaders
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var SpaceInvader2;
(function (SpaceInvader2) {
    class Enemy2 extends SpaceInvader2.Enemy {
        constructor() {
            super();
            this.points = 20;
            this.width = 18;
        }
        draw() {
            SpaceInvader2.crc2.beginPath();
            SpaceInvader2.crc2.strokeStyle = "rgba(0,0,0,0)";
            SpaceInvader2.crc2.fillStyle = "rgb(0, 252, 247)"; //blue
            SpaceInvader2.crc2.moveTo(this.x, this.y);
            SpaceInvader2.crc2.lineTo(this.x, this.y - 3);
            SpaceInvader2.crc2.lineTo(this.x - 6, this.y - 3);
            SpaceInvader2.crc2.lineTo(this.x - 6, this.y - 6);
            SpaceInvader2.crc2.lineTo(this.x + 9, this.y - 6);
            SpaceInvader2.crc2.lineTo(this.x + 9, this.y - 3);
            SpaceInvader2.crc2.lineTo(this.x + 3, this.y - 3);
            SpaceInvader2.crc2.lineTo(this.x + 3, this.y);
            SpaceInvader2.crc2.lineTo(this.x + 9, this.y);
            SpaceInvader2.crc2.lineTo(this.x + 9, this.y - 3);
            SpaceInvader2.crc2.lineTo(this.x + 12, this.y - 3);
            SpaceInvader2.crc2.lineTo(this.x + 12, this.y - 9);
            SpaceInvader2.crc2.lineTo(this.x + 15, this.y - 9);
            SpaceInvader2.crc2.lineTo(this.x + 15, this.y - 3);
            SpaceInvader2.crc2.lineTo(this.x + 18, this.y - 3);
            SpaceInvader2.crc2.lineTo(this.x + 18, this.y - 12);
            SpaceInvader2.crc2.lineTo(this.x + 15, this.y - 12);
            SpaceInvader2.crc2.lineTo(this.x + 15, this.y - 15);
            SpaceInvader2.crc2.lineTo(this.x + 12, this.y - 15);
            SpaceInvader2.crc2.lineTo(this.x + 12, this.y - 18);
            SpaceInvader2.crc2.lineTo(this.x + 9, this.y - 18);
            SpaceInvader2.crc2.lineTo(this.x + 9, this.y - 21);
            SpaceInvader2.crc2.lineTo(this.x + 12, this.y - 21);
            SpaceInvader2.crc2.lineTo(this.x + 12, this.y - 24);
            SpaceInvader2.crc2.lineTo(this.x + 9, this.y - 24);
            SpaceInvader2.crc2.lineTo(this.x + 9, this.y - 21);
            SpaceInvader2.crc2.lineTo(this.x + 6, this.y - 21);
            SpaceInvader2.crc2.lineTo(this.x + 6, this.y - 18);
            SpaceInvader2.crc2.lineTo(this.x - 3, this.y - 18);
            SpaceInvader2.crc2.lineTo(this.x - 3, this.y - 21);
            SpaceInvader2.crc2.lineTo(this.x - 6, this.y - 21);
            SpaceInvader2.crc2.lineTo(this.x - 6, this.y - 24);
            SpaceInvader2.crc2.lineTo(this.x - 9, this.y - 24);
            SpaceInvader2.crc2.lineTo(this.x - 9, this.y - 21);
            SpaceInvader2.crc2.lineTo(this.x - 6, this.y - 21);
            SpaceInvader2.crc2.lineTo(this.x - 6, this.y - 18);
            SpaceInvader2.crc2.lineTo(this.x - 9, this.y - 18);
            SpaceInvader2.crc2.lineTo(this.x - 9, this.y - 15);
            SpaceInvader2.crc2.lineTo(this.x - 12, this.y - 15);
            SpaceInvader2.crc2.lineTo(this.x - 12, this.y - 12);
            SpaceInvader2.crc2.lineTo(this.x - 15, this.y - 12);
            SpaceInvader2.crc2.lineTo(this.x - 15, this.y - 3);
            SpaceInvader2.crc2.lineTo(this.x - 12, this.y - 3);
            SpaceInvader2.crc2.lineTo(this.x - 12, this.y - 9);
            SpaceInvader2.crc2.lineTo(this.x - 9, this.y - 9);
            SpaceInvader2.crc2.lineTo(this.x - 9, this.y - 3);
            SpaceInvader2.crc2.lineTo(this.x - 6, this.y - 3);
            SpaceInvader2.crc2.lineTo(this.x - 6, this.y);
            SpaceInvader2.crc2.lineTo(this.x, this.y);
            SpaceInvader2.crc2.closePath();
            SpaceInvader2.crc2.stroke();
            SpaceInvader2.crc2.fill();
            SpaceInvader2.crc2.fillStyle = "rgb(0, 0, 0)"; //black
            SpaceInvader2.crc2.fillRect(this.x - 6, this.y - 15, 3, 3);
            SpaceInvader2.crc2.fillRect(this.x + 6, this.y - 15, 3, 3);
        }
    }
    SpaceInvader2.Enemy2 = Enemy2; //class enemy zu
})(SpaceInvader2 || (SpaceInvader2 = {})); //namespace zu
//# sourceMappingURL=Enemy2.js.map