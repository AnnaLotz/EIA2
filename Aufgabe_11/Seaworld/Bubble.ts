/*  Aufgabe: Aufgabe 11 : Inheritance: Seaworld
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 28.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    Dieser Code wurde zusammen mit Alena Hurst und Franziska Heiﬂ erarbeitet */

namespace L11_SeaworldInheritance {
    export class Bubble extends MovingObjects {
        radius: number;
        speed: number;

        constructor() {
            super();
            this.setRandomPosition();
            this.setRandomRadius();
        }

        checkPosition(): void {
            if (this.y < -50) {
                this.setNewRandomSpawnPoint();
                this.setRandomRadius();
            }
        }

        setRandomPosition(): void {
            this.x = Math.random() * (750 - 900) + 900;
            this.y = Math.random() * 480;
        }

        setNewRandomSpawnPoint(): void {
            this.x = Math.random() * (750 - 900) + 900;
            this.y = Math.random() * 10 + 470;
        }

        setRandomRadius(): void {
            this.radius = Math.random() * 10;
            this.speed = this.radius;
        }



        draw(): void {
            crc2.fillStyle = "rgb(204, 238, 255, 0.55)";
            crc2.lineWidth = 0.5;
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }

        move(): void {
            this.y += -this.speed * 0.06 - 0.5;
        }




    } //class Bubble zu
} //namespace zu