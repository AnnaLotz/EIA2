namespace L10_Animation {
    export class Fish {
        x: number;
        y: number;
        color: string;
        size: number;
        speed: number;
        

        moveForward(): void {
            this.x += this.speed * (-3) ;            
        }
        
        moveUpAndDown(): void {
            //this.y += Math.random() * 2 + 50 - Math.random() * 2 - 50;
        }
              

        draw(): void {
            crc2.beginPath();
            crc2.strokeStyle = "rgb( 0, 0, 0)";
            crc2.lineWidth = 2;
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, "#3EFF7A");
            gradient.addColorStop(1, "#84E83A");
            crc2.fillStyle = gradient;
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


    } //class fish zu

} //namespace zu