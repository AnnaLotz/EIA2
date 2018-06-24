/*  Aufgabe: Aufgabe 10 : Canvas Animation
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 24.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var L10_Animation;
(function (L10_Animation) {
    class Bubble {
        draw() {
            L10_Animation.crc2.fillStyle = "rgb(204, 238, 255, 0.55)";
            L10_Animation.crc2.lineWidth = 0.5;
            L10_Animation.crc2.beginPath();
            L10_Animation.crc2.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            L10_Animation.crc2.closePath();
            L10_Animation.crc2.stroke();
            L10_Animation.crc2.fill();
        }
        move() {
            this.y += -0.8;
        }
    }
    L10_Animation.Bubble = Bubble; //class Bubble zu
})(L10_Animation || (L10_Animation = {})); //namespace zu
//# sourceMappingURL=Bubble.js.map