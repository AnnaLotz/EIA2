var SpaceInvader;
(function (SpaceInvader) {
    class Enemy3 extends SpaceInvader.Enemy {
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
    SpaceInvader.Enemy3 = Enemy3; //class enemy zu
})(SpaceInvader || (SpaceInvader = {})); //namespace zu
//# sourceMappingURL=Enemy3.js.map