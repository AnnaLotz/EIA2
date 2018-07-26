namespace SpaceInvader {

    export class Ufo extends Enemy {

        constructor() {
            super();
            this.x = canvas.width + 25;
            this.y = 90;
            this.setPoints();
            this.width = 24; //noch �ndern

        }

        setPoints(): void {
            let p: number = Math.floor(Math.random() * 3);
            switch (p) {
                case 0:
                    this.points = 50;
                    break;
                case 1:
                    this.points = 100;
                    break;
                case 2:
                    this.points = 150;
                    break;
            }
        }

        checkPosition(): void {
            if (this.x <= - 25) {
                this.destroyUfo();
            }
        }

        destroyUfo(): void {
            let index: number = movingObjects.indexOf(this);
            ufos.splice(index, 1);
        }


        draw(): void {
            crc2.beginPath();
            crc2.strokeStyle = "rgba(0,0,0,0)";
            crc2.fillStyle = "rgb(255, 0, 0)"; //white
            crc2.lineWidth = 1;
            crc2.moveTo(this.x, this.y - 3);
            crc2.lineTo(this.x + 6, this.y - 3);
            crc2.lineTo(this.x + 6, this.y - 6);
            crc2.lineTo(this.x + 9, this.y - 6);
            crc2.lineTo(this.x + 9, this.y - 3);
            crc2.lineTo(this.x + 12, this.y - 3);
            crc2.lineTo(this.x + 12, this.y);
            crc2.lineTo(this.x + 15, this.y);
            crc2.lineTo(this.x + 15, this.y - 3);
            crc2.lineTo(this.x + 18, this.y - 3);
            crc2.lineTo(this.x + 18, this.y - 6);
            crc2.lineTo(this.x + 24, this.y - 6);
            crc2.lineTo(this.x + 24, this.y - 9);
            crc2.lineTo(this.x + 21, this.y - 9);
            crc2.lineTo(this.x + 21, this.y - 12);
            crc2.lineTo(this.x + 18, this.y - 12);
            crc2.lineTo(this.x + 18, this.y - 15);
            crc2.lineTo(this.x + 12, this.y - 15);
            crc2.lineTo(this.x + 12, this.y - 18);
            crc2.lineTo(this.x + 6, this.y - 18);
            crc2.lineTo(this.x + 6, this.y - 21);
            crc2.lineTo(this.x - 6, this.y - 21);
            crc2.lineTo(this.x - 6, this.y - 18);
            crc2.lineTo(this.x - 12, this.y - 18);
            crc2.lineTo(this.x - 12, this.y - 15);
            crc2.lineTo(this.x - 18, this.y - 15);
            crc2.lineTo(this.x - 18, this.y - 12);
            crc2.lineTo(this.x - 21, this.y - 12);
            crc2.lineTo(this.x - 21, this.y - 9);
            crc2.lineTo(this.x - 24, this.y - 9);
            crc2.lineTo(this.x - 24, this.y - 6);
            crc2.lineTo(this.x - 18, this.y - 6);
            crc2.lineTo(this.x - 18, this.y - 3);
            crc2.lineTo(this.x - 15, this.y - 3);
            crc2.lineTo(this.x - 15, this.y);
            crc2.lineTo(this.x - 12, this.y);
            crc2.lineTo(this.x - 12, this.y - 3);
            crc2.lineTo(this.x - 9, this.y - 3);
            crc2.lineTo(this.x - 9, this.y - 6);
            crc2.lineTo(this.x - 6, this.y - 6);
            crc2.lineTo(this.x - 6, this.y - 3);
            crc2.lineTo(this.x, this.y - 3);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            
            crc2.fillStyle = "rgb(0, 0, 0)"; //black
            crc2.fillRect(this.x - 15, this.y - 12 , 3, 3);
            crc2.fillRect(this.x - 6, this.y - 12 , 3, 3);
            crc2.fillRect(this.x + 3, this.y - 12 , 3, 3);
            crc2.fillRect(this.x + 12, this.y - 12 , 3, 3);
        }

        move(): void {
            this.x -= 2.8;
        }


    } //class enemy zu

} //namespace zu