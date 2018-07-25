namespace SpaceInvader {

    export class Enemy1 extends Enemy {


        constructor() {
            super();
            this.points = 10;
            this.width = 18;
        }

        draw(): void {
            crc2.beginPath();
            crc2.strokeStyle = "rgba(0,0,0,0)";
            crc2.fillStyle = "rgb(247, 0, 252)"; //pink
            crc2.moveTo(this.x - 3, this.y - 6);
            crc2.lineTo(this.x - 3, this.y - 3);
            crc2.lineTo(this.x + 3, this.y - 3);
            crc2.lineTo(this.x + 3, this.y - 6);
            crc2.lineTo(this.x - 3, this.y - 6);
            crc2.lineTo(this.x - 3, this.y - 9);
            crc2.lineTo(this.x + 3, this.y - 9);
            crc2.lineTo(this.x + 3, this.y - 6);
            crc2.lineTo(this.x + 6, this.y - 6);
            crc2.lineTo(this.x + 6, this.y - 3);
            crc2.lineTo(this.x + 12, this.y - 3);
            crc2.lineTo(this.x + 12, this.y);
            crc2.lineTo(this.x + 18, this.y);
            crc2.lineTo(this.x + 18, this.y - 3);
            crc2.lineTo(this.x + 12, this.y - 3);
            crc2.lineTo(this.x + 12, this.y - 6);
            crc2.lineTo(this.x + 12, this.y - 6);
            crc2.lineTo(this.x + 9, this.y - 6);
            crc2.lineTo(this.x + 9, this.y - 9);
            crc2.lineTo(this.x + 18, this.y - 9);
            crc2.lineTo(this.x + 18, this.y - 18);
            crc2.lineTo(this.x + 15, this.y - 18);
            crc2.lineTo(this.x + 15, this.y - 21);
            crc2.lineTo(this.x + 6, this.y - 21);
            crc2.lineTo(this.x + 6, this.y - 24);
            crc2.lineTo(this.x - 6, this.y - 24);
            crc2.lineTo(this.x - 6, this.y - 21);
            crc2.lineTo(this.x - 15, this.y - 21);
            crc2.lineTo(this.x - 15, this.y - 18);
            crc2.lineTo(this.x - 18, this.y - 18);
            crc2.lineTo(this.x - 18, this.y - 9);
            crc2.lineTo(this.x - 9, this.y - 9);
            crc2.lineTo(this.x - 9, this.y - 6);
            crc2.lineTo(this.x - 12, this.y - 6);
            crc2.lineTo(this.x - 12, this.y - 6);
            crc2.lineTo(this.x - 12, this.y - 3);
            crc2.lineTo(this.x - 18, this.y - 3);
            crc2.lineTo(this.x - 18, this.y);
            crc2.lineTo(this.x - 12, this.y);
            crc2.lineTo(this.x - 12, this.y - 3);
            crc2.lineTo(this.x - 6, this.y - 3);
            crc2.lineTo(this.x - 6, this.y - 6);
            crc2.lineTo(this.x - 3, this.y - 6);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

        }


    } //class enemy zu

} //namespace zu