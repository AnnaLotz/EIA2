/*  Aufgabe: Abschlussaufgabe - Space Invaders
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace SpaceInvader2 {

    export class Enemy3 extends Enemy {

        constructor() {
            super();
            this.points = 30;
            this.width = 12;
        }

        public draw(): void {
            crc2.beginPath();
            crc2.strokeStyle = "rgba(0,0,0,0)";
            crc2.fillStyle = "rgb(8, 252, 0)"; //green
            crc2.moveTo(this.x, this.y - 6);
            crc2.lineTo(this.x + 3, this.y - 6);
            crc2.lineTo(this.x + 3, this.y - 9);
            crc2.lineTo(this.x + 6, this.y - 6);
            crc2.lineTo(this.x + 12, this.y - 6);
            crc2.lineTo(this.x + 12, this.y - 3);
            crc2.lineTo(this.x + 6, this.y - 3);
            crc2.lineTo(this.x + 6, this.y);
            crc2.lineTo(this.x + 9, this.y);
            crc2.lineTo(this.x + 9, this.y - 9);
            crc2.lineTo(this.x + 12, this.y - 9);
            crc2.lineTo(this.x + 12, this.y - 15);
            crc2.lineTo(this.x + 9, this.y - 15);
            crc2.lineTo(this.x + 9, this.y - 18);
            crc2.lineTo(this.x + 6, this.y - 18);
            crc2.lineTo(this.x + 6, this.y - 21);
            crc2.lineTo(this.x + 3, this.y - 21);
            crc2.lineTo(this.x + 3, this.y - 24);
            crc2.lineTo(this.x - 3, this.y - 24);
            crc2.lineTo(this.x - 3, this.y - 21);
            crc2.lineTo(this.x - 6, this.y - 21);
            crc2.lineTo(this.x - 6, this.y - 18);
            crc2.lineTo(this.x - 9, this.y - 18);
            crc2.lineTo(this.x - 9, this.y - 15);
            crc2.lineTo(this.x - 12, this.y - 15);
            crc2.lineTo(this.x - 12, this.y - 9);
            crc2.lineTo(this.x - 9, this.y - 9);
            crc2.lineTo(this.x - 9, this.y);
            crc2.lineTo(this.x - 6, this.y);
            crc2.lineTo(this.x - 6, this.y - 3);
            crc2.lineTo(this.x - 12, this.y - 3);
            crc2.lineTo(this.x - 12, this.y - 6);
            crc2.lineTo(this.x - 6, this.y - 6);
            crc2.lineTo(this.x - 3, this.y - 9);
            crc2.lineTo(this.x - 3, this.y - 6);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            
            crc2.fillStyle = "rgb(0, 0, 0)"; //black
            crc2.fillRect(this.x - 6, this.y - 15 , 3, 3);
            crc2.fillRect(this.x + 3, this.y - 15 , 3, 3);
        }

    } //class enemy zu

} //namespace zu