/*  Aufgabe: Aufgabe 11 : Inheritance: Seaworld
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 26.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var L11_Inheritance;
(function (L11_Inheritance) {
    class Chain {
        draw() {
            L11_Inheritance.crc2.strokeStyle = "rgb(38, 38, 38)";
            L11_Inheritance.crc2.lineWidth = 4.5;
            for (let i = 0; i < 30; i++) {
                L11_Inheritance.crc2.beginPath();
                L11_Inheritance.crc2.arc(this.x, this.y - i * 20, 12, 0, 2 * Math.PI);
                L11_Inheritance.crc2.closePath();
                L11_Inheritance.crc2.stroke();
            }
        }
        moveDown() {
            this.y += 1;
        }
        moveUp() {
            this.y -= 1;
        }
    }
    L11_Inheritance.Chain = Chain; //class Chain zu
})(L11_Inheritance || (L11_Inheritance = {})); //namespace zu
//# sourceMappingURL=Chain.js.map