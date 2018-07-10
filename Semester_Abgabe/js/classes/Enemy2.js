var SpaceInvader;
(function (SpaceInvader) {
    class Enemy2 extends SpaceInvader.Enemy {
        constructor() {
            super();
        }
        draw() {
            SpaceInvader.crc2.strokeStyle = "white";
            SpaceInvader.crc2.fillStyle = "white";
            SpaceInvader.crc2.moveTo(this.x, this.y);
            SpaceInvader.crc2.closePath();
            SpaceInvader.crc2.fill();
        }
    }
    SpaceInvader.Enemy2 = Enemy2; //class enemy zu
})(SpaceInvader || (SpaceInvader = {})); //namespace zu
//# sourceMappingURL=Enemy2.js.map