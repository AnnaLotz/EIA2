/*  Aufgabe: Abschlussaufgabe - Space Invaders
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var SpaceInvader2;
(function (SpaceInvader2) {
    class Player {
        constructor() {
            this.x = 250;
            this.y = 506;
            this.lives = 3;
            this.movingDirection = 0;
            this.bullets = 0;
        }
        checkIfHit() {
            //check ob ein Enemy den Spieler bez�hlich des y Werts erreicht hat
            for (let i = 0; i < SpaceInvader2.enemies.length; i++) {
                if (this.y <= SpaceInvader2.enemies[i].y) {
                    this.lost();
                }
            }
        }
        //ein Leben abziehen wenn getroffen wurde
        isHit() {
            this.lives--;
        }
        lost() {
            window.setTimeout(SpaceInvader2.showLostScreen, 200);
        }
        move() {
            if (this.movingDirection < 0) {
                this.moveLeft();
            }
            else if (this.movingDirection > 0) {
                this.moveRight();
            }
        }
        moveRight() {
            if (this.x > SpaceInvader2.canvas.width - 30)
                this.x = SpaceInvader2.canvas.width - 29;
            else
                this.x += 2;
        }
        moveLeft() {
            if (this.x < 30)
                this.x = 29;
            else
                this.x -= 2;
        }
        draw() {
            SpaceInvader2.crc2.beginPath();
            SpaceInvader2.crc2.strokeStyle = "rgba(0,0,0,0)";
            SpaceInvader2.crc2.fillStyle = "rgb(255, 255, 255)"; //white
            SpaceInvader2.crc2.lineWidth = 1;
            SpaceInvader2.crc2.moveTo(this.x, this.y);
            SpaceInvader2.crc2.lineTo(this.x + 1, this.y);
            SpaceInvader2.crc2.lineTo(this.x + 1, this.y + 2);
            SpaceInvader2.crc2.lineTo(this.x + 3, this.y + 2);
            SpaceInvader2.crc2.lineTo(this.x + 3, this.y + 7);
            SpaceInvader2.crc2.lineTo(this.x + 12, this.y + 7);
            SpaceInvader2.crc2.lineTo(this.x + 12, this.y + 9);
            SpaceInvader2.crc2.lineTo(this.x + 15, this.y + 9);
            SpaceInvader2.crc2.lineTo(this.x + 15, this.y + 18);
            SpaceInvader2.crc2.lineTo(this.x - 15, this.y + 18);
            SpaceInvader2.crc2.lineTo(this.x - 15, this.y + 9);
            SpaceInvader2.crc2.lineTo(this.x - 12, this.y + 9);
            SpaceInvader2.crc2.lineTo(this.x - 12, this.y + 7);
            SpaceInvader2.crc2.lineTo(this.x - 3, this.y + 7);
            SpaceInvader2.crc2.lineTo(this.x - 3, this.y + 2);
            SpaceInvader2.crc2.lineTo(this.x - 1, this.y + 2);
            SpaceInvader2.crc2.lineTo(this.x - 1, this.y);
            SpaceInvader2.crc2.lineTo(this.x, this.y);
            SpaceInvader2.crc2.closePath();
            SpaceInvader2.crc2.stroke();
            SpaceInvader2.crc2.fill();
            SpaceInvader2.crc2.font = "21px Arial";
            SpaceInvader2.crc2.fillText("SCORE: " + SpaceInvader2.score, 20, 37);
            SpaceInvader2.crc2.fillText("Lives: " + this.lives, 21, 581); //lives
        }
    }
    SpaceInvader2.Player = Player; //class player zu
})(SpaceInvader2 || (SpaceInvader2 = {})); //namespace zu
//# sourceMappingURL=Player.js.map