namespace SpaceInvader {

    export class Player {
        x: number;
        y: number;
        lives: number;
        movingDirection: number;
        bullets: number;

        constructor() {
            this.x = 250;
            this.y = 506;
            this.lives = 3;
            this.movingDirection = 0;
            this.bullets = 0;
        }

        public checkIfHit(): void {


            for (let i: number = 0; i < enemies.length; i++) {
                if (this.y <= enemies[i].y) {
                    if (this.x <= enemies[i].x + enemies[i].width && this.x >= enemies[i].x - enemies[i].width) {
                        this.lost();
                    }
                }
            }

        }

        public lost(): void {
            this.lives = 0;
            window.alert("Game Over\nPress OK to start again");

            if (window.alert) {
                location.reload();
            }
        }

        public won(): void {
            window.alert("You Won!\nYour score: " + score + "\nPress OK to start again");

            if (window.alert) {
                location.reload();
            }
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