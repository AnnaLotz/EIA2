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
            this.setRandomColor();
            this.stop = Math.random() * (550 - 680) + 680;
        }
        setRandomColor() {
            let c = Math.floor(Math.random() * 3);
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
        draw() {
            L11_SeaworldInheritance.crc2.fillStyle = this.color;
            L11_SeaworldInheritance.crc2.lineWidth = 0.2;
            L11_SeaworldInheritance.crc2.beginPath();
            L11_SeaworldInheritance.crc2.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            L11_SeaworldInheritance.crc2.closePath();
            L11_SeaworldInheritance.crc2.stroke();
            L11_SeaworldInheritance.crc2.fill();
        }
        move() {
            if (this.y >= this.stop) {
                this.y = this.stop;
            }
            else {
                this.y += this.speed * 0.4;
            }
        }
    }
    L11_SeaworldInheritance.Food = Food; //class Food zu
})(L11_SeaworldInheritance || (L11_SeaworldInheritance = {})); //namespace zu
//# sourceMappingURL=Food.js.map