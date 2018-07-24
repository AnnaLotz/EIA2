var SpaceInvader;
(function (SpaceInvader) {
    class Enemy3 extends SpaceInvader.Enemy {
        constructor() {
            super();
        }
        draw() {
            //            crc2.strokeStyle = "white";
            //            crc2.fillStyle = "white";
            //            crc2.moveTo(this.x, this.y);
            //
            //            crc2.closePath();
            //            crc2.fill();
        }
    }
    SpaceInvader.Enemy3 = Enemy3; //class enemy zu
})(SpaceInvader || (SpaceInvader = {})); //namespace zu
//# sourceMappingURL=Enemy3.js.map