/*  Aufgabe: Abschlussaufgabe - Space Invaders
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var SpaceInvader2;
(function (SpaceInvader2) {
    class Laser extends SpaceInvader2.EveryLaser {
        constructor() {
            super();
            this.x = SpaceInvader2.player.x - 1;
            this.y = SpaceInvader2.player.y;
            SpaceInvader2.player.bullets += 1;
        } //constructor zu
        checkPosition() {
            if (this.y <= 0) {
                this.destroyLaser();
            }
            //alle Gegner durchgehen, ob einer den x und y Werten ( + bestimmten Radius) des Lasers entspricht. Dann Punkte vergeben, Enemy und laser zerst�ren
            for (let i = 0; i < SpaceInvader2.enemies.length; i++) {
                if (this.y <= SpaceInvader2.enemies[i].y + 1 && this.y >= SpaceInvader2.enemies[i].y - 24) {
                    if (this.x <= SpaceInvader2.enemies[i].x + SpaceInvader2.enemies[i].width && this.x >= SpaceInvader2.enemies[i].x - SpaceInvader2.enemies[i].width) {
                        SpaceInvader2.enemies[i].givePoints();
                        let index = i;
                        SpaceInvader2.enemies.splice(index, 1);
                        SpaceInvader2.totalEnemies--;
                        this.destroyLaser();
                        this.changeEnemySpeed(); //erzeugt manchmal noch gamebreaking bugs 
                    }
                }
            }
            //Gleiches f�r das Ufo durchgehen
            for (let i = 0; i < SpaceInvader2.ufos.length; i++) {
                if (this.y <= SpaceInvader2.ufos[i].y && this.y >= SpaceInvader2.ufos[i].y - 21) {
                    if (this.x <= SpaceInvader2.ufos[i].x + SpaceInvader2.ufos[i].width && this.x >= SpaceInvader2.ufos[i].x - SpaceInvader2.ufos[i].width) {
                        SpaceInvader2.ufos[i].givePoints();
                        let index = i;
                        SpaceInvader2.ufos.splice(index, 1);
                        this.destroyLaser();
                    }
                }
            }
        } //checkPosition zu
        changeEnemySpeed() {
            for (let j = 0; j < SpaceInvader2.enemies.length; j++) {
                SpaceInvader2.enemies[j].changeSpeed();
            }
        }
        destroyLaser() {
            let index = SpaceInvader2.everyLaser.indexOf(this);
            SpaceInvader2.everyLaser.splice(index, 1);
            SpaceInvader2.player.bullets -= 1;
        } //destroy laser zu
        draw() {
            SpaceInvader2.crc2.beginPath();
            SpaceInvader2.crc2.strokeStyle = "rgba(0,0,0,0)";
            SpaceInvader2.crc2.fillStyle = "rgb(255, 255, 255)"; //white
            SpaceInvader2.crc2.moveTo(this.x, this.y);
            SpaceInvader2.crc2.lineTo(this.x + 2, this.y);
            SpaceInvader2.crc2.lineTo(this.x + 2, this.y - 16);
            SpaceInvader2.crc2.lineTo(this.x, this.y - 16);
            SpaceInvader2.crc2.lineTo(this.x, this.y);
            SpaceInvader2.crc2.closePath();
            SpaceInvader2.crc2.stroke();
            SpaceInvader2.crc2.fill();
        }
        move() {
            this.y -= 11;
        }
    }
    SpaceInvader2.Laser = Laser; //class laser zu
})(SpaceInvader2 || (SpaceInvader2 = {})); //namespace zu
//# sourceMappingURL=Laser.js.map