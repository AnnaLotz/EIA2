/*  Aufgabe: Aufgabe 11 : Inheritance: Seaworld
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 28.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    Dieser Code wurde zusammen mit Alena Hurst und Franziska Heiß erarbeitet */

namespace L11_SeaworldInheritance {
    export class Food extends MovingObjects {
        size: number;
        speed: number;
        color: string;
        stop: number;


        constructor(spawnX: number, spawnY: number) {
            super();
            this.x = spawnX;
            this.y = spawnY;
            this.size = Math.random() * (5 - 4) + 4; // Math.random() * (max - min) + min
            this.speed = this.size;
            this.setRandomColor();
            this.stop = Math.random() * (550 - 680) + 680;
        }
        
        setRandomColor(): void {
            let c: number = Math.floor(Math.random() * 3);
            switch (c) {
                case 0:
                    this.color = "#A19F30";
                    break;
                case 1:
                    this.color = "#A15A30";
                    break;
                case 2:
                    this.color = "#49854D";
                    break;
            }
        }



        draw(): void {
            crc2.fillStyle = this.color;
            crc2.lineWidth = 0.2;
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }

        move(): void {
            if (this.y >= this.stop) {
                this.y = this.stop;
            } else {
                this.y += this.speed * 0.4;
            }
        }



    } //class Food zu

} //namespace zu