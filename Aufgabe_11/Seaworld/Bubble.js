/*  Aufgabe: Aufgabe 11 : Inheritance: Seaworld
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 26.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var L11_Inheritance;
(function (L11_Inheritance) {
    class Bubble {
        draw() {
            L11_Inheritance.crc2.fillStyle = "rgb(204, 238, 255, 0.55)";
            L11_Inheritance.crc2.lineWidth = 0.5;
            L11_Inheritance.crc2.beginPath();
            L11_Inheritance.crc2.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            L11_Inheritance.crc2.closePath();
            L11_Inheritance.crc2.stroke();
            L11_Inheritance.crc2.fill();
        }
        move() {
            this.y += -0.8;
        }
    }
    L11_Inheritance.Bubble = Bubble; //class Bubble zu
})(L11_Inheritance || (L11_Inheritance = {})); //namespace zu
//# sourceMappingURL=Bubble.js.map