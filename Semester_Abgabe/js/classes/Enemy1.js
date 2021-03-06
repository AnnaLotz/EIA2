/*  Aufgabe: Abschlussaufgabe - Space Invaders
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var SpaceInvader;
(function (SpaceInvader) {
    class Enemy1 extends SpaceInvader.Enemy {
        constructor() {
            super();
            this.points = 10;
            this.width = 18;
        }
        draw() {
            SpaceInvader.crc2.beginPath();
            SpaceInvader.crc2.strokeStyle = "rgba(0,0,0,0)";
            SpaceInvader.crc2.fillStyle = "rgb(247, 0, 252)"; //pink
            SpaceInvader.crc2.moveTo(this.x - 3, this.y - 6);
            SpaceInvader.crc2.lineTo(this.x - 3, this.y - 3);
            SpaceInvader.crc2.lineTo(this.x + 3, this.y - 3);
            SpaceInvader.crc2.lineTo(this.x + 3, this.y - 6);
            SpaceInvader.crc2.lineTo(this.x - 3, this.y - 6);
            SpaceInvader.crc2.lineTo(this.x - 3, this.y - 9);
            SpaceInvader.crc2.lineTo(this.x + 3, this.y - 9);
            SpaceInvader.crc2.lineTo(this.x + 3, this.y - 6);
            SpaceInvader.crc2.lineTo(this.x + 6, this.y - 6);
            SpaceInvader.crc2.lineTo(this.x + 6, this.y - 3);
            SpaceInvader.crc2.lineTo(this.x + 12, this.y - 3);
            SpaceInvader.crc2.lineTo(this.x + 12, this.y);
            SpaceInvader.crc2.lineTo(this.x + 18, this.y);
            SpaceInvader.crc2.lineTo(this.x + 18, this.y - 3);
            SpaceInvader.crc2.lineTo(this.x + 12, this.y - 3);
            SpaceInvader.crc2.lineTo(this.x + 12, this.y - 6);
            SpaceInvader.crc2.lineTo(this.x + 12, this.y - 6);
            SpaceInvader.crc2.lineTo(this.x + 9, this.y - 6);
            SpaceInvader.crc2.lineTo(this.x + 9, this.y - 9);
            SpaceInvader.crc2.lineTo(this.x + 18, this.y - 9);
            SpaceInvader.crc2.lineTo(this.x + 18, this.y - 18);
            SpaceInvader.crc2.lineTo(this.x + 15, this.y - 18);
            SpaceInvader.crc2.lineTo(this.x + 15, this.y - 21);
            SpaceInvader.crc2.lineTo(this.x + 6, this.y - 21);
            SpaceInvader.crc2.lineTo(this.x + 6, this.y - 24);
            SpaceInvader.crc2.lineTo(this.x - 6, this.y - 24);
            SpaceInvader.crc2.lineTo(this.x - 6, this.y - 21);
            SpaceInvader.crc2.lineTo(this.x - 15, this.y - 21);
            SpaceInvader.crc2.lineTo(this.x - 15, this.y - 18);
            SpaceInvader.crc2.lineTo(this.x - 18, this.y - 18);
            SpaceInvader.crc2.lineTo(this.x - 18, this.y - 9);
            SpaceInvader.crc2.lineTo(this.x - 9, this.y - 9);
            SpaceInvader.crc2.lineTo(this.x - 9, this.y - 6);
            SpaceInvader.crc2.lineTo(this.x - 12, this.y - 6);
            SpaceInvader.crc2.lineTo(this.x - 12, this.y - 6);
            SpaceInvader.crc2.lineTo(this.x - 12, this.y - 3);
            SpaceInvader.crc2.lineTo(this.x - 18, this.y - 3);
            SpaceInvader.crc2.lineTo(this.x - 18, this.y);
            SpaceInvader.crc2.lineTo(this.x - 12, this.y);
            SpaceInvader.crc2.lineTo(this.x - 12, this.y - 3);
            SpaceInvader.crc2.lineTo(this.x - 6, this.y - 3);
            SpaceInvader.crc2.lineTo(this.x - 6, this.y - 6);
            SpaceInvader.crc2.lineTo(this.x - 3, this.y - 6);
            SpaceInvader.crc2.closePath();
            SpaceInvader.crc2.stroke();
            SpaceInvader.crc2.fill();
            SpaceInvader.crc2.fillStyle = "rgb(0, 0, 0)"; //black
            SpaceInvader.crc2.fillRect(this.x - 9, this.y - 15, 6, 3);
            SpaceInvader.crc2.fillRect(this.x + 3, this.y - 15, 6, 3);
        }
    }
    SpaceInvader.Enemy1 = Enemy1; //class enemy zu
})(SpaceInvader || (SpaceInvader = {})); //namespace zu
//# sourceMappingURL=Enemy1.js.map