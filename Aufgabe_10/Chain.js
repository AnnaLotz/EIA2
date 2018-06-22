/*  Aufgabe: Aufgabe 10 : Canvas Animation
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 22.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var L10_Animation;
(function (L10_Animation) {
    class Chain {
        draw() {
            L10_Animation.crc2.strokeStyle = "rgb(38, 38, 38)";
            L10_Animation.crc2.lineWidth = 4.5;
            for (let i = 0; i < 30; i++) {
                L10_Animation.crc2.beginPath();
                L10_Animation.crc2.arc(this.x, this.y - i * 20, 12, 0, 2 * Math.PI);
                L10_Animation.crc2.closePath();
                L10_Animation.crc2.stroke();
            }
        }
        moveDown() {
            this.y += 1;
        }
        moveUp() {
            this.y -= 1;
        }
    }
    L10_Animation.Chain = Chain; //class Chain zu
})(L10_Animation || (L10_Animation = {})); //namespace zu
//# sourceMappingURL=Chain.js.map