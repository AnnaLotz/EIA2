var SpaceInvader;
(function (SpaceInvader) {
    class Enemy1 extends SpaceInvader.Enemy {
        constructor() {
            super();
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
            //sollte das Auge geben:
            //            crc2.strokeStyle = "black";
            //            crc2.fillStyle = "black";
            //            crc2.moveTo(this.x + 3, this.y - 12);
            //            crc2.lineTo(this.x + 6, this.y - 12);
            //            crc2.lineTo(this.x + 6, this.y - 15);
            //            crc2.lineTo(this.x + 3, this.y - 15);
            //            crc2.lineTo(this.x + 3, this.y - 12);
            //            crc2.closePath();
            //            crc2.stroke();            
            //            crc2.fill();
        }
    }
    SpaceInvader.Enemy1 = Enemy1; //class enemy zu
})(SpaceInvader || (SpaceInvader = {})); //namespace zu
//# sourceMappingURL=Enemy1.js.map