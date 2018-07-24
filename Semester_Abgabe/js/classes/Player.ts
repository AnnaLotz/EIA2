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

        moveRight(): void {
            if (this.x > canvas.width - 30)
                this.x = canvas.width - 29;
            else
                this.x += 2;
        }

        moveLeft(): void {
            if (this.x < 30)
                this.x = 29;
            else
                this.x -= 2;
        }



        draw(): void {
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
            crc2.fillText("Lives: "+ this.lives, 21, 581); //lives

        }


    } //class player zu

} //namespace zu