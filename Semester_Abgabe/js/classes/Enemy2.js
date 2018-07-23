var SpaceInvader;
(function (SpaceInvader) {
    class Enemy2 extends SpaceInvader.Enemy {
        constructor() {
            super();
            this.points = 20;
        }
        draw() {
            SpaceInvader.crc2.strokeStyle = "white";
            SpaceInvader.crc2.fillStyle = "white";
            SpaceInvader.crc2.moveTo(this.x, this.y - 6);
            SpaceInvader.crc2.lineTo(this.x + 3, this.y - 6);
            SpaceInvader.crc2.lineTo(this.x + 3, this.y - 9);
            SpaceInvader.crc2.lineTo(this.x + 6, this.y - 6);
            SpaceInvader.crc2.lineTo(this.x + 12, this.y - 6);
            SpaceInvader.crc2.lineTo(this.x + 12, this.y - 3);
            SpaceInvader.crc2.lineTo(this.x + 6, this.y - 3);
            SpaceInvader.crc2.lineTo(this.x + 6, this.y);
            SpaceInvader.crc2.lineTo(this.x + 9, this.y);
            SpaceInvader.crc2.lineTo(this.x + 9, this.y - 9);
            SpaceInvader.crc2.lineTo(this.x + 12, this.y - 9);
            SpaceInvader.crc2.lineTo(this.x + 12, this.y - 15);
            SpaceInvader.crc2.lineTo(this.x + 9, this.y - 15);
            SpaceInvader.crc2.lineTo(this.x + 9, this.y - 18);
            SpaceInvader.crc2.lineTo(this.x + 6, this.y - 18);
            SpaceInvader.crc2.lineTo(this.x + 6, this.y - 21);
            SpaceInvader.crc2.lineTo(this.x + 3, this.y - 21);
            SpaceInvader.crc2.lineTo(this.x + 3, this.y - 24);
            SpaceInvader.crc2.lineTo(this.x - 3, this.y - 24);
            SpaceInvader.crc2.lineTo(this.x - 3, this.y - 21);
            SpaceInvader.crc2.lineTo(this.x - 6, this.y - 21);
            SpaceInvader.crc2.lineTo(this.x - 6, this.y - 18);
            SpaceInvader.crc2.lineTo(this.x - 9, this.y - 18);
            SpaceInvader.crc2.lineTo(this.x - 9, this.y - 15);
            SpaceInvader.crc2.lineTo(this.x - 12, this.y - 15);
            SpaceInvader.crc2.lineTo(this.x - 12, this.y - 9);
            SpaceInvader.crc2.lineTo(this.x - 9, this.y - 9);
            SpaceInvader.crc2.lineTo(this.x - 9, this.y);
            SpaceInvader.crc2.lineTo(this.x - 6, this.y);
            SpaceInvader.crc2.lineTo(this.x - 6, this.y - 3);
            SpaceInvader.crc2.lineTo(this.x - 12, this.y - 3);
            SpaceInvader.crc2.lineTo(this.x - 12, this.y - 6);
            SpaceInvader.crc2.lineTo(this.x - 6, this.y - 6);
            SpaceInvader.crc2.lineTo(this.x - 3, this.y - 9);
            SpaceInvader.crc2.lineTo(this.x - 3, this.y - 6);
            SpaceInvader.crc2.closePath();
            SpaceInvader.crc2.fill();
        }
    }
    SpaceInvader.Enemy2 = Enemy2; //class enemy zu
})(SpaceInvader || (SpaceInvader = {})); //namespace zu
//# sourceMappingURL=Enemy2.js.map