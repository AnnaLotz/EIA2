/*  Aufgabe: Aufgabe 10 : Canvas Animation
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 22.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace L10_Animation {
    export class Anchor {
        x: number;
        y: number;        

        draw(): void {
            console.log("draw anchor");
            crc2.beginPath();
            crc2.lineWidth = 6.5;
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
        
        move(): void {
            this.y += 1;
        }


    } //class Bubble zu
} //namespace zu