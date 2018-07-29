/*  Aufgabe: Abschlussaufgabe - Space Invaders
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var SpaceInvader;
(function (SpaceInvader) {
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
            for (let i = 0; i < SpaceInvader.enemies.length; i++) {
                if (this.y <= SpaceInvader.enemies[i].y) {
                    this.lost();
                }
            }
        }
        //ein Leben abziehen wenn getroffen wurde
        isHit() {
            this.lives--;
        }
        lost() {
            window.setTimeout(SpaceInvader.showLostScreen, 200);
        }
        won() {
            window.setTimeout(SpaceInvader.showWinScreen, 300);
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
            if (this.x > SpaceInvader.canvas.width - 30)
                this.x = SpaceInvader.canvas.width - 29;
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
            SpaceInvader.crc2.beginPath();
            SpaceInvader.crc2.strokeStyle = "rgba(0,0,0,0)";
            SpaceInvader.crc2.fillStyle = "rgb(255, 255, 255)"; //white
            SpaceInvader.crc2.lineWidth = 1;
            SpaceInvader.crc2.moveTo(this.x, this.y);
            SpaceInvader.crc2.lineTo(this.x + 1, this.y);
            SpaceInvader.crc2.lineTo(this.x + 1, this.y + 2);
            SpaceInvader.crc2.lineTo(this.x + 3, this.y + 2);
            SpaceInvader.crc2.lineTo(this.x + 3, this.y + 7);
            SpaceInvader.crc2.lineTo(this.x + 12, this.y + 7);
            SpaceInvader.crc2.lineTo(this.x + 12, this.y + 9);
            SpaceInvader.crc2.lineTo(this.x + 15, this.y + 9);
            SpaceInvader.crc2.lineTo(this.x + 15, this.y + 18);
            SpaceInvader.crc2.lineTo(this.x - 15, this.y + 18);
            SpaceInvader.crc2.lineTo(this.x - 15, this.y + 9);
            SpaceInvader.crc2.lineTo(this.x - 12, this.y + 9);
            SpaceInvader.crc2.lineTo(this.x - 12, this.y + 7);
            SpaceInvader.crc2.lineTo(this.x - 3, this.y + 7);
            SpaceInvader.crc2.lineTo(this.x - 3, this.y + 2);
            SpaceInvader.crc2.lineTo(this.x - 1, this.y + 2);
            SpaceInvader.crc2.lineTo(this.x - 1, this.y);
            SpaceInvader.crc2.lineTo(this.x, this.y);
            SpaceInvader.crc2.closePath();
            SpaceInvader.crc2.stroke();
            SpaceInvader.crc2.fill();
            SpaceInvader.crc2.font = "21px Arial";
            SpaceInvader.crc2.fillText("SCORE: " + SpaceInvader.score, 20, 37);
            SpaceInvader.crc2.fillText("Lives: " + this.lives, 21, 581); //lives
        }
    }
    SpaceInvader.Player = Player; //class player zu
})(SpaceInvader || (SpaceInvader = {})); //namespace zu
//# sourceMappingURL=Player.js.map