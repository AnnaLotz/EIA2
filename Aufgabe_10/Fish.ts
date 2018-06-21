namespace L10_Animation {
    export class Fish {
        x: number;
        y: number;
        color: string;
        size: number;
        speed: number;

        move(): void {
            this.x += -5 ;
            
            //bewegung
        }
              

        draw(): void {
            crc2.beginPath();
            crc2.strokeStyle = "rgb( 0, 0, 0)";
            crc2.lineWidth = 1;
            crc2.fillStyle = "rgb(180, 20, 0)";
            crc2.moveTo(this.x, this.y);
            crc2.quadraticCurveTo(this.x + 60, this.y - 60, this.x + 120, this.y + 0);
            crc2.lineTo(this.x + 150, this.y - 25);
            crc2.lineTo(this.x + 150, this.y + 25);
            crc2.lineTo(this.x + 120, this.y);
            crc2.quadraticCurveTo(this.x + 60, this.y + 60, this.x + 0, this.y + 0);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }


    } //close class fish

} //namespace zu