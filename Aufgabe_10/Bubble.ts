namespace L10_Animation {
    export class Bubble {
        x: number;
        y: number;
        r: number;
        speed: number;
        

        move(): void {
            this.y += -0.8;
        }
        

        draw(): void {
            crc2.fillStyle = "rgb(204, 238, 255, 0.55)";
            crc2.lineWidth = 0.5;
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }


    } //class Bubble zu
} //namespace zu