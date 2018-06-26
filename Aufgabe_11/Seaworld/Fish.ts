/*  Aufgabe: Aufgabe 11 : Inheritance: Seaworld
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 26.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace L11_SeaworldInheritance {
    export class Fish {
        x: number;
        y: number;
        color: string;
        speed: number;              

        draw(): void {
            crc2.beginPath();
            crc2.strokeStyle = "rgb( 0, 0, 0)";
            crc2.lineWidth = 2;
            crc2.fillStyle = this.color;
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
        
        moveForward(): void {
            this.x += this.speed * (-3) ;            
        }


    } //class fish zu

} //namespace zu