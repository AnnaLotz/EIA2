/*  Aufgabe: Aufgabe 11 : Inheritance: Seaworld
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 26.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var L11_Inheritance;
(function (L11_Inheritance) {
    class Anchor {
        draw() {
            //console.log("draw anchor");
            L11_Inheritance.crc2.beginPath();
            L11_Inheritance.crc2.lineWidth = 6.5;
            L11_Inheritance.crc2.strokeStyle = "rgb(38, 38, 38)";
            L11_Inheritance.crc2.moveTo(this.x, this.y); //A
            L11_Inheritance.crc2.lineTo(this.x + 10, this.y - 90); //D
            L11_Inheritance.crc2.arc(this.x + 12, this.y - 107, 15, 1.5, 15 * Math.PI);
            L11_Inheritance.crc2.moveTo(this.x - 5, this.y - 72); //F
            L11_Inheritance.crc2.lineTo(this.x + 20, this.y - 68); //E
            L11_Inheritance.crc2.moveTo(this.x - 40, this.y - 45); //C
            L11_Inheritance.crc2.quadraticCurveTo(this.x - 38, this.y - 5, this.x, this.y);
            L11_Inheritance.crc2.quadraticCurveTo(this.x + 35, this.y + 5, this.x + 48, this.y - 33);
            L11_Inheritance.crc2.stroke();
            L11_Inheritance.crc2.closePath();
        }
        moveDown() {
            this.y += 1;
        }
        moveUp() {
            this.y -= 1;
        }
    }
    L11_Inheritance.Anchor = Anchor; //class Bubble zu
})(L11_Inheritance || (L11_Inheritance = {})); //namespace zu
//# sourceMappingURL=Anchor.js.map