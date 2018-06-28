/*  Aufgabe: Aufgabe 11 : Inheritance: Seaworld
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 26.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var L11_SeaworldInheritance;
(function (L11_SeaworldInheritance) {
    class BubblesLeft extends L11_SeaworldInheritance.Bubble {
        constructor() {
            super();
            this.setRandomRadius();
        }
        setRandomPosition() {
            this.x = Math.random() * (100 - 300) + 300; // Math.random() * (max - min) + min
            this.y = Math.random() * 325;
        }
        setNewRandomSpawnPoint() {
            this.x = Math.random() * (100 - 300) + 300;
            this.y = Math.random() * 100 + 325;
        }
        setRandomRadius() {
            this.radius = (Math.random() + 0.1) * 6;
            this.speed = this.radius;
        }
    }
    L11_SeaworldInheritance.BubblesLeft = BubblesLeft; //class BubblesLeft zu
})(L11_SeaworldInheritance || (L11_SeaworldInheritance = {})); //namespace zu
//# sourceMappingURL=BubblesLeft.js.map