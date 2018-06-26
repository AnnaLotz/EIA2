/*  Aufgabe: Aufgabe 11 : Inheritance: Seaworld
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 26.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var L11_Inheritance;
(function (L11_Inheritance) {
    class Fish {
        draw() {
            L11_Inheritance.crc2.beginPath();
            L11_Inheritance.crc2.strokeStyle = "rgb( 0, 0, 0)";
            L11_Inheritance.crc2.lineWidth = 2;
            let gradient = L11_Inheritance.crc2.createLinearGradient(0, 325, 0, 200);
            gradient.addColorStop(0, "#E12623");
            gradient.addColorStop(1, "#C5234A");
            L11_Inheritance.crc2.fillStyle = gradient;
            L11_Inheritance.crc2.moveTo(this.x, this.y);
            L11_Inheritance.crc2.quadraticCurveTo(this.x + 60, this.y - 60, this.x + 120, this.y + 0);
            L11_Inheritance.crc2.lineTo(this.x + 150, this.y - 25);
            L11_Inheritance.crc2.lineTo(this.x + 150, this.y + 25);
            L11_Inheritance.crc2.lineTo(this.x + 120, this.y);
            L11_Inheritance.crc2.quadraticCurveTo(this.x + 60, this.y + 60, this.x + 0, this.y + 0);
            L11_Inheritance.crc2.closePath();
            L11_Inheritance.crc2.stroke();
            L11_Inheritance.crc2.fill();
        }
        moveForward() {
            this.x += this.speed * (-3);
        }
    }
    L11_Inheritance.Fish = Fish; //class fish zu
})(L11_Inheritance || (L11_Inheritance = {})); //namespace zu
//# sourceMappingURL=Fish.js.map