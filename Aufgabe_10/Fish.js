var L10_Animation;
(function (L10_Animation) {
    class Fish {
        moveForward() {
            this.x += this.speed * (-3);
        }
        moveUpAndDown() {
            //this.y += Math.random() * 2 + 50 - Math.random() * 2 - 50;
        }
        draw() {
            L10_Animation.crc2.beginPath();
            L10_Animation.crc2.strokeStyle = "rgb( 0, 0, 0)";
            L10_Animation.crc2.lineWidth = 2;
            let gradient = L10_Animation.crc2.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, "#3EFF7A");
            gradient.addColorStop(1, "#84E83A");
            L10_Animation.crc2.fillStyle = gradient;
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
    L10_Animation.Fish = Fish; //class fish zu
})(L10_Animation || (L10_Animation = {})); //namespace zu
//# sourceMappingURL=Fish.js.map