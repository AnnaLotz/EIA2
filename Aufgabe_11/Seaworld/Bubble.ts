/*  Aufgabe: Aufgabe 11 : Inheritance: Seaworld
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 26.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace L11_SeaworldInheritance {
    export class Bubble {
        x: number;
        y: number;
        r: number;
        speed: number;          

        draw(): void {
            crc2.fillStyle = "rgb(204, 238, 255, 0.55)";
            crc2.lineWidth = 0.5;
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
        
        move(): void {
            this.y += -this.speed * 0.06 - 0.5;
        }


    } //class Bubble zu
} //namespace zu