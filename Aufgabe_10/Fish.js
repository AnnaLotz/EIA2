var L10_Animation;
(function (L10_Animation) {
    class Fish {
        move() {
            this.x += -5;
            //bewegung
        }
        draw() {
            L10_Animation.crc2.beginPath();
            L10_Animation.crc2.strokeStyle = "rgb( 0, 0, 0)";
            L10_Animation.crc2.lineWidth = 1;
            L10_Animation.crc2.fillStyle = "rgb(180, 20, 0)";
            L10_Animation.crc2.moveTo(this.x, this.y);
            L10_Animation.crc2.quadraticCurveTo(this.x + 60, this.y - 60, this.x + 120, this.y + 0);
            L10_Animation.crc2.lineTo(this.x + 150, this.y - 25);
            L10_Animation.crc2.lineTo(this.x + 150, this.y + 25);
            L10_Animation.crc2.lineTo(this.x + 120, this.y);
            L10_Animation.crc2.quadraticCurveTo(this.x + 60, this.y + 60, this.x + 0, this.y + 0);
            L10_Animation.crc2.closePath();
            L10_Animation.crc2.stroke();
            L10_Animation.crc2.fill();
        }
    }
    L10_Animation.Fish = Fish; //close class fish
})(L10_Animation || (L10_Animation = {})); //namespace zu
//# sourceMappingURL=Fish.js.map