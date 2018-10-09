/*  Aufgabe: Abschlussaufgabe - Space Invaders
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var SpaceInvader2;
(function (SpaceInvader2) {
    class Enemy1 extends SpaceInvader2.Enemy {
        constructor() {
            super();
            this.points = 10;
            this.width = 18;
        }
        draw() {
            SpaceInvader2.crc2.beginPath();
            SpaceInvader2.crc2.strokeStyle = "rgba(0,0,0,0)";
            SpaceInvader2.crc2.fillStyle = "rgb(247, 0, 252)"; //pink
            SpaceInvader2.crc2.moveTo(this.x - 3, this.y - 6);
            SpaceInvader2.crc2.lineTo(this.x - 3, this.y - 3);
            SpaceInvader2.crc2.lineTo(this.x + 3, this.y - 3);
            SpaceInvader2.crc2.lineTo(this.x + 3, this.y - 6);
            SpaceInvader2.crc2.lineTo(this.x - 3, this.y - 6);
            SpaceInvader2.crc2.lineTo(this.x - 3, this.y - 9);
            SpaceInvader2.crc2.lineTo(this.x + 3, this.y - 9);
            SpaceInvader2.crc2.lineTo(this.x + 3, this.y - 6);
            SpaceInvader2.crc2.lineTo(this.x + 6, this.y - 6);
            SpaceInvader2.crc2.lineTo(this.x + 6, this.y - 3);
            SpaceInvader2.crc2.lineTo(this.x + 12, this.y - 3);
            SpaceInvader2.crc2.lineTo(this.x + 12, this.y);
            SpaceInvader2.crc2.lineTo(this.x + 18, this.y);
            SpaceInvader2.crc2.lineTo(this.x + 18, this.y - 3);
            SpaceInvader2.crc2.lineTo(this.x + 12, this.y - 3);
            SpaceInvader2.crc2.lineTo(this.x + 12, this.y - 6);
            SpaceInvader2.crc2.lineTo(this.x + 12, this.y - 6);
            SpaceInvader2.crc2.lineTo(this.x + 9, this.y - 6);
            SpaceInvader2.crc2.lineTo(this.x + 9, this.y - 9);
            SpaceInvader2.crc2.lineTo(this.x + 18, this.y - 9);
            SpaceInvader2.crc2.lineTo(this.x + 18, this.y - 18);
            SpaceInvader2.crc2.lineTo(this.x + 15, this.y - 18);
            SpaceInvader2.crc2.lineTo(this.x + 15, this.y - 21);
            SpaceInvader2.crc2.lineTo(this.x + 6, this.y - 21);
            SpaceInvader2.crc2.lineTo(this.x + 6, this.y - 24);
            SpaceInvader2.crc2.lineTo(this.x - 6, this.y - 24);
            SpaceInvader2.crc2.lineTo(this.x - 6, this.y - 21);
            SpaceInvader2.crc2.lineTo(this.x - 15, this.y - 21);
            SpaceInvader2.crc2.lineTo(this.x - 15, this.y - 18);
            SpaceInvader2.crc2.lineTo(this.x - 18, this.y - 18);
            SpaceInvader2.crc2.lineTo(this.x - 18, this.y - 9);
            SpaceInvader2.crc2.lineTo(this.x - 9, this.y - 9);
            SpaceInvader2.crc2.lineTo(this.x - 9, this.y - 6);
            SpaceInvader2.crc2.lineTo(this.x - 12, this.y - 6);
            SpaceInvader2.crc2.lineTo(this.x - 12, this.y - 6);
            SpaceInvader2.crc2.lineTo(this.x - 12, this.y - 3);
            SpaceInvader2.crc2.lineTo(this.x - 18, this.y - 3);
            SpaceInvader2.crc2.lineTo(this.x - 18, this.y);
            SpaceInvader2.crc2.lineTo(this.x - 12, this.y);
            SpaceInvader2.crc2.lineTo(this.x - 12, this.y - 3);
            SpaceInvader2.crc2.lineTo(this.x - 6, this.y - 3);
            SpaceInvader2.crc2.lineTo(this.x - 6, this.y - 6);
            SpaceInvader2.crc2.lineTo(this.x - 3, this.y - 6);
            SpaceInvader2.crc2.closePath();
            SpaceInvader2.crc2.stroke();
            SpaceInvader2.crc2.fill();
            SpaceInvader2.crc2.fillStyle = "rgb(0, 0, 0)"; //black
            SpaceInvader2.crc2.fillRect(this.x - 9, this.y - 15, 6, 3);
            SpaceInvader2.crc2.fillRect(this.x + 3, this.y - 15, 6, 3);
        }
    }
    SpaceInvader2.Enemy1 = Enemy1; //class enemy zu
})(SpaceInvader2 || (SpaceInvader2 = {})); //namespace zu
//# sourceMappingURL=Enemy1.js.map