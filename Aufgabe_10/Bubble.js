var L10_Animation;
(function (L10_Animation) {
    class Bubble {
        move() {
            this.y += -0.8;
        }
        draw() {
            L10_Animation.crc2.fillStyle = "rgb(204, 238, 255, 0.55)";
            L10_Animation.crc2.lineWidth = 0.5;
            L10_Animation.crc2.beginPath();
            L10_Animation.crc2.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            L10_Animation.crc2.closePath();
            L10_Animation.crc2.stroke();
            L10_Animation.crc2.fill();
        }
    }
    L10_Animation.Bubble = Bubble; //class Bubble zu
})(L10_Animation || (L10_Animation = {})); //namespace zu
//# sourceMappingURL=Bubble.js.map