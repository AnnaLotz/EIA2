/*  Aufgabe: Aufgabe 10 : Canvas Animation
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 22.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace L10_Animation {
    export class Chain {
        x: number;
        y: number;
        r: number; //radius   
        status: string;

        draw(): void {
            crc2.strokeStyle = "rgb(38, 38, 38)";
            crc2.lineWidth = 4.5;

            for (let i: number = 0; i < 30; i++) {
                crc2.beginPath();
                crc2.arc(this.x, this.y - i * 20, 12, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.stroke();
            }
        }

        moveDown(): void {
            this.y += 1;
        }

        moveUp(): void {
            this.y -= 1;
        }


    } //class Chain zu
} //namespace zu