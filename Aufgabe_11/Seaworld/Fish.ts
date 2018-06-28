/*  Aufgabe: Aufgabe 11 : Inheritance: Seaworld
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 28.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    Dieser Code wurde zusammen mit Alena Hurst und Franziska Heiﬂ erarbeitet */

namespace L11_SeaworldInheritance {
    export class Fish extends MovingObjects {
        color: string;
        speed: number;

        constructor() {
            super();
            this.setRandomPosition();
            this.setRandomSpeed();
            this.setRandomColor();
        }

        checkPosition(): void {
            if (this.x < -200) {
                this.setNewRandomSpawnPoint();
                this.setRandomSpeed();
                this.setRandomColor();
            }
        }

        setRandomPosition(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = Math.random() * crc2.canvas.height - 300;
        }

        setNewRandomSpawnPoint(): void {
            this.x = canvas.width + 50;
            this.y = Math.random() * ((crc2.canvas.height - 200) - 50) + 50; // Math.random() * (max - min) + min
        }

        setRandomSpeed(): void {
            this.speed = (Math.random() + 1) * 0.5;
        }

        setRandomColor(): void {
            let c: number = Math.floor(Math.random() * 3);
            switch (c) {
                case 0:
                    this.color = "#A1356B";
                    break;
                case 1:
                    this.color = "#67D431";
                    break;
                case 2:
                    this.color = "#D44831";
                    break;
            }
        }



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

        move(): void {
            this.x += this.speed * (-3);
        }




    } //class fish zu

} //namespace zu