/*  Aufgabe: Aufgabe 10 : Canvas Animation
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 24.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var L10_Animation;
(function (L10_Animation) {
    class Anchor {
        draw() {
            //console.log("draw anchor");
            L10_Animation.crc2.beginPath();
            L10_Animation.crc2.lineWidth = 6.5;
            L10_Animation.crc2.strokeStyle = "rgb(38, 38, 38)";
            L10_Animation.crc2.moveTo(this.x, this.y); //A
            L10_Animation.crc2.lineTo(this.x + 10, this.y - 90); //D
            L10_Animation.crc2.arc(this.x + 12, this.y - 107, 15, 1.5, 15 * Math.PI);
            L10_Animation.crc2.moveTo(this.x - 5, this.y - 72); //F
            L10_Animation.crc2.lineTo(this.x + 20, this.y - 68); //E
            L10_Animation.crc2.moveTo(this.x - 40, this.y - 45); //C
            L10_Animation.crc2.quadraticCurveTo(this.x - 38, this.y - 5, this.x, this.y);
            L10_Animation.crc2.quadraticCurveTo(this.x + 35, this.y + 5, this.x + 48, this.y - 33);
            L10_Animation.crc2.stroke();
            L10_Animation.crc2.closePath();
        }
        moveDown() {
            this.y += 1;
        }
        moveUp() {
            this.y -= 1;
        }
    }
    L10_Animation.Anchor = Anchor; //class Bubble zu
})(L10_Animation || (L10_Animation = {})); //namespace zu
//# sourceMappingURL=Anchor.js.map