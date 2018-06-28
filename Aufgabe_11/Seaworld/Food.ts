/*  Aufgabe: Aufgabe 11 : Inheritance: Seaworld
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 26.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace L11_SeaworldInheritance {
    export class Food extends MovingObjects {
        size: number;
        speed: number;


        constructor(spawnX: number, spawnY: number) {
            super();
            this.x = spawnX;
            this.y = spawnY;
            this.size = Math.random() * (5 - 4) + 4; // Math.random() * (max - min) + min
            this.speed = this.size;
//            this.checkFoodPosition();
        }

//        checkFoodPosition(): void {
//            let l: number = 610; //Math.random() * (605 - 620) + 620;
//            console.log(l);
//            if (this.y >= l) {
//                this.y = 610;
//            }
//        }



        draw(): void {
            crc2.fillStyle = "rgb(161, 94, 99)";
            crc2.lineWidth = 0.5;
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }

        move(): void {
            let l: number = 660; //Math.random() * (600 - 640) + 640;
            if (this.y >= l) {
                this.y = l;
            } else {
                this.y += this.speed * 0.7;
            }
        }







    } //class Food zu

} //namespace zu