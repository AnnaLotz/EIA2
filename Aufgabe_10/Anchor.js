var L10_Animation;
(function (L10_Animation) {
    class Anchor {
        move() {
            this.y += 1;
        }
        draw() {
            L10_Animation.crc2.beginPath();
            L10_Animation.crc2.lineWidth = 4;
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
    }
    L10_Animation.Anchor = Anchor; //class Bubble zu
})(L10_Animation || (L10_Animation = {})); //namespace zu
//# sourceMappingURL=Anchor.js.map