/*  Aufgabe: Aufgabe 11 : Inheritance: Seaworld
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 26.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var L11_SeaworldInheritance;
(function (L11_SeaworldInheritance) {
    class Food extends L11_SeaworldInheritance.MovingObjects {
        constructor(spawnX, spawnY) {
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
        draw() {
            L11_SeaworldInheritance.crc2.fillStyle = "rgb(161, 94, 99)";
            L11_SeaworldInheritance.crc2.lineWidth = 0.5;
            L11_SeaworldInheritance.crc2.beginPath();
            L11_SeaworldInheritance.crc2.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            L11_SeaworldInheritance.crc2.closePath();
            L11_SeaworldInheritance.crc2.stroke();
            L11_SeaworldInheritance.crc2.fill();
        }
        move() {
            let l = 660; //Math.random() * (600 - 640) + 640;
            if (this.y >= l) {
                this.y = l;
            }
            else {
                this.y += this.speed * 0.7;
            }
        }
    }
    L11_SeaworldInheritance.Food = Food; //class Food zu
})(L11_SeaworldInheritance || (L11_SeaworldInheritance = {})); //namespace zu
//# sourceMappingURL=Food.js.map