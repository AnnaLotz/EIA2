/*  Aufgabe: Abschlussaufgabe - Space Invaders
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace SpaceInvader {

    export class Player {
        public x: number;
        public y: number;
        public lives: number;
        public movingDirection: number;
        public bullets: number;

        constructor() {
            this.x = 250;
            this.y = 506;
            this.lives = 3;
            this.movingDirection = 0;
            this.bullets = 0;
        }

        public checkIfHit(): void {
            
            //check ob ein Enemy den Spieler bezühlich des y Werts erreicht hat
            for (let i: number = 0; i < enemies.length; i++) {
                if (this.y <= enemies[i].y) {
                    this.lost();
                }
            }
        }
        
        //ein Leben abziehen wenn getroffen wurde
        public isHit(): void {
            this.lives--;
        }

        public lost(): void {
            window.setTimeout(showLostScreen, 200);
        }

        public won(): void {
            window.setTimeout(showWinScreen, 300);
        }

        public move(): void {
            if (this.movingDirection < 0) {
                this.moveLeft();
            } else if (this.movingDirection > 0) {
                this.moveRight();
            }
        }

        private moveRight(): void {
            if (this.x > canvas.width - 30)
                this.x = canvas.width - 29;
            else
                this.x += 2;
        }

        private moveLeft(): void {
            if (this.x < 30)
                this.x = 29;
            else
                this.x -= 2;
        }

        public draw(): void {
            crc2.beginPath();
            crc2.strokeStyle = "rgba(0,0,0,0)";
            crc2.fillStyle = "rgb(255, 255, 255)"; //white
            crc2.lineWidth = 1;
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 1, this.y);
            crc2.lineTo(this.x + 1, this.y + 2);
            crc2.lineTo(this.x + 3, this.y + 2);
            crc2.lineTo(this.x + 3, this.y + 7);
            crc2.lineTo(this.x + 12, this.y + 7);
            crc2.lineTo(this.x + 12, this.y + 9);
            crc2.lineTo(this.x + 15, this.y + 9);
            crc2.lineTo(this.x + 15, this.y + 18);
            crc2.lineTo(this.x - 15, this.y + 18);
            crc2.lineTo(this.x - 15, this.y + 9);
            crc2.lineTo(this.x - 12, this.y + 9);
            crc2.lineTo(this.x - 12, this.y + 7);
            crc2.lineTo(this.x - 3, this.y + 7);
            crc2.lineTo(this.x - 3, this.y + 2);
            crc2.lineTo(this.x - 1, this.y + 2);
            crc2.lineTo(this.x - 1, this.y);
            crc2.lineTo(this.x, this.y);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            crc2.font = "21px Arial";
            crc2.fillText("SCORE: " + score, 20, 37);
            crc2.fillText("Lives: " + this.lives, 21, 581); //lives
        }


    } //class player zu

} //namespace zu