namespace L10_Animation {
    export class Anchor {
        x: number;
        y: number;

        move(): void {
            this.y += 1;
        }

        draw(): void {
            console.log("draw anchor");
            crc2.beginPath();
            crc2.lineWidth = 4;
            crc2.strokeStyle = "rgb(38, 38, 38)";
            crc2.moveTo(this.x, this.y); //A
            crc2.lineTo(this.x + 10, this.y - 90); //D
            crc2.arc(this.x + 12, this.y - 107, 15, 1.5, 15 * Math.PI);
            crc2.moveTo(this.x - 5, this.y - 72); //F
            crc2.lineTo(this.x + 20, this.y - 68); //E
            crc2.moveTo(this.x - 40, this.y - 45); //C
            crc2.quadraticCurveTo(this.x - 38, this.y - 5, this.x, this.y);
            crc2.quadraticCurveTo(this.x + 35, this.y + 5, this.x + 48, this.y - 33);
            crc2.stroke();
            crc2.closePath();
        }


    } //class Bubble zu
} //namespace zu