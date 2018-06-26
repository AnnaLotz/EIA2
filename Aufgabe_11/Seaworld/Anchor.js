/*  Aufgabe: Aufgabe 11 : Inheritance: Seaworld
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 26.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var L11_SeaworldInheritance;
(function (L11_SeaworldInheritance) {
    class Anchor {
        draw() {
            L11_SeaworldInheritance.crc2.beginPath();
            L11_SeaworldInheritance.crc2.lineWidth = 6.5;
            L11_SeaworldInheritance.crc2.strokeStyle = "rgb(38, 38, 38)";
            L11_SeaworldInheritance.crc2.moveTo(this.x, this.y); //A
            L11_SeaworldInheritance.crc2.lineTo(this.x + 10, this.y - 90); //D
            L11_SeaworldInheritance.crc2.arc(this.x + 12, this.y - 107, 15, 1.5, 15 * Math.PI);
            L11_SeaworldInheritance.crc2.moveTo(this.x - 5, this.y - 72); //F
            L11_SeaworldInheritance.crc2.lineTo(this.x + 20, this.y - 68); //E
            L11_SeaworldInheritance.crc2.moveTo(this.x - 40, this.y - 45); //C
            L11_SeaworldInheritance.crc2.quadraticCurveTo(this.x - 38, this.y - 5, this.x, this.y);
            L11_SeaworldInheritance.crc2.quadraticCurveTo(this.x + 35, this.y + 5, this.x + 48, this.y - 33);
            L11_SeaworldInheritance.crc2.stroke();
            L11_SeaworldInheritance.crc2.closePath();
            L11_SeaworldInheritance.crc2.lineWidth = 4.5;
            for (let i = 0; i < 30; i++) {
                L11_SeaworldInheritance.crc2.beginPath();
                L11_SeaworldInheritance.crc2.arc(this.x + 12, this.y - 128 - i * 20, 12, 0, 2 * Math.PI);
                L11_SeaworldInheritance.crc2.closePath();
                L11_SeaworldInheritance.crc2.stroke();
            }
        }
        moveDown() {
            this.y += 1;
        }
        moveUp() {
            this.y -= 1;
        }
    }
    L11_SeaworldInheritance.Anchor = Anchor; //class Anchor zu
})(L11_SeaworldInheritance || (L11_SeaworldInheritance = {})); //namespace zu
//# sourceMappingURL=Anchor.js.map