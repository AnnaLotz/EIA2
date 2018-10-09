/*  Aufgabe: Abschlussaufgabe - Space Invaders
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var SpaceInvader2;
(function (SpaceInvader2) {
    class EnemyLaser extends SpaceInvader2.EveryLaser {
        constructor() {
            super();
        } //constructor zu
        //Ursprungsposition des gegnerischen Lasers definieren �ber den mitgegebenen enemy aus dem array
        getToShootFrom(_enemy) {
            this.enemy = _enemy;
            this.x = this.enemy.x - 1;
            this.y = this.enemy.y;
        }
        checkPosition() {
            if (this.y >= SpaceInvader2.canvas.height) {
                this.destroyLaser();
            }
            //abfrage ob Spieler getroffen wird
            if (this.x <= SpaceInvader2.player.x + 16 && this.x >= SpaceInvader2.player.x - 16) {
                if (this.y <= SpaceInvader2.player.y + 18 && this.y >= SpaceInvader2.player.y + 7) {
                    SpaceInvader2.player.isHit();
                    this.destroyLaser();
                }
            }
        } //checkPosition zu
        draw() {
            SpaceInvader2.crc2.beginPath();
            SpaceInvader2.crc2.strokeStyle = "rgba(0,0,0,0)";
            SpaceInvader2.crc2.fillStyle = "rgb(255, 255, 255)"; //white
            SpaceInvader2.crc2.moveTo(this.x, this.y);
            SpaceInvader2.crc2.lineTo(this.x + 2, this.y);
            SpaceInvader2.crc2.lineTo(this.x + 2, this.y + 13);
            SpaceInvader2.crc2.lineTo(this.x + 5, this.y + 13);
            SpaceInvader2.crc2.lineTo(this.x + 5, this.y + 16);
            SpaceInvader2.crc2.lineTo(this.x - 3, this.y + 16);
            SpaceInvader2.crc2.lineTo(this.x - 3, this.y + 13);
            SpaceInvader2.crc2.lineTo(this.x, this.y + 13);
            SpaceInvader2.crc2.lineTo(this.x, this.y);
            SpaceInvader2.crc2.closePath();
            SpaceInvader2.crc2.stroke();
            SpaceInvader2.crc2.fill();
        }
        move() {
            this.y += 7;
        }
    }
    SpaceInvader2.EnemyLaser = EnemyLaser; //class laser zu
})(SpaceInvader2 || (SpaceInvader2 = {})); //namespace zu
//# sourceMappingURL=EnemyLaser.js.map