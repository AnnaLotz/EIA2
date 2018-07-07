var SpaceInvader;
(function (SpaceInvader) {
    class Laser {
        constructor() {
            console.log("new Laser");
        }
        draw() {
            SpaceInvader.crc2.strokeStyle = "white";
            SpaceInvader.crc2.fillStyle = "white";
            SpaceInvader.crc2.fillRect(this.x, this.y, this.x + 2, this.y - 12);
        }
        move() {
            this.y -= 3;
        }
    }
    SpaceInvader.Laser = Laser; //class laser zu
})(SpaceInvader || (SpaceInvader = {})); //namespace zu
//# sourceMappingURL=Laser.js.map