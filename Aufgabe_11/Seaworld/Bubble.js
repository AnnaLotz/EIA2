/*  Aufgabe: Aufgabe 11 : Inheritance: Seaworld
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 28.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    Dieser Code wurde zusammen mit Alena Hurst und Franziska Hei� erarbeitet */
var L11_SeaworldInheritance;
(function (L11_SeaworldInheritance) {
    class Bubble extends L11_SeaworldInheritance.MovingObjects {
        constructor() {
            super();
            this.setRandomPosition();
            this.setRandomRadius();
        }
        checkPosition() {
            if (this.y < -50) {
                this.setNewRandomSpawnPoint();
                this.setRandomRadius();
            }
        }
        setRandomPosition() {
            this.x = Math.random() * (750 - 900) + 900;
            this.y = Math.random() * 480;
        }
        setNewRandomSpawnPoint() {
            this.x = Math.random() * (750 - 900) + 900;
            this.y = Math.random() * 10 + 470;
        }
        setRandomRadius() {
            this.radius = Math.random() * 10;
            this.speed = this.radius;
        }
        draw() {
            L11_SeaworldInheritance.crc2.fillStyle = "rgb(204, 238, 255, 0.55)";
            L11_SeaworldInheritance.crc2.lineWidth = 0.5;
            L11_SeaworldInheritance.crc2.beginPath();
            L11_SeaworldInheritance.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            L11_SeaworldInheritance.crc2.closePath();
            L11_SeaworldInheritance.crc2.stroke();
            L11_SeaworldInheritance.crc2.fill();
        }
        move() {
            this.y += -this.speed * 0.06 - 0.5;
        }
    }
    L11_SeaworldInheritance.Bubble = Bubble; //class Bubble zu
})(L11_SeaworldInheritance || (L11_SeaworldInheritance = {})); //namespace zu
//# sourceMappingURL=Bubble.js.map