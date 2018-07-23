var SpaceInvader;
(function (SpaceInvader) {
    class Player {
        constructor() {
            this.x = 250;
            this.y = 506;
            this.lives = 3;
            this.movingDirection = 0;
            this.bullets = 0;
        }
        moveRight() {
            if (this.x > SpaceInvader.canvas.width - 30)
                this.x = SpaceInvader.canvas.width - 29;
            else
                this.x += 2;
        }
        moveLeft() {
            if (this.x < 30)
                this.x = 29;
            else
                this.x -= 2;
        }
        draw() {
            SpaceInvader.crc2.beginPath();
            SpaceInvader.crc2.strokeStyle = "white";
            SpaceInvader.crc2.fillStyle = "white";
            SpaceInvader.crc2.lineWidth = 1;
            SpaceInvader.crc2.moveTo(this.x, this.y);
            SpaceInvader.crc2.lineTo(this.x + 1, this.y);
            SpaceInvader.crc2.lineTo(this.x + 1, this.y + 2);
            SpaceInvader.crc2.lineTo(this.x + 3, this.y + 2);
            SpaceInvader.crc2.lineTo(this.x + 3, this.y + 7);
            SpaceInvader.crc2.lineTo(this.x + 12, this.y + 7);
            SpaceInvader.crc2.lineTo(this.x + 12, this.y + 9);
            SpaceInvader.crc2.lineTo(this.x + 15, this.y + 9);
            SpaceInvader.crc2.lineTo(this.x + 15, this.y + 18);
            SpaceInvader.crc2.lineTo(this.x - 15, this.y + 18);
            SpaceInvader.crc2.lineTo(this.x - 15, this.y + 9);
            SpaceInvader.crc2.lineTo(this.x - 12, this.y + 9);
            SpaceInvader.crc2.lineTo(this.x - 12, this.y + 7);
            SpaceInvader.crc2.lineTo(this.x - 3, this.y + 7);
            SpaceInvader.crc2.lineTo(this.x - 3, this.y + 2);
            SpaceInvader.crc2.lineTo(this.x - 1, this.y + 2);
            SpaceInvader.crc2.lineTo(this.x - 1, this.y);
            SpaceInvader.crc2.lineTo(this.x, this.y);
            SpaceInvader.crc2.stroke();
            SpaceInvader.crc2.fill();
            SpaceInvader.crc2.closePath();
            SpaceInvader.crc2.font = "21px Arial";
            SpaceInvader.crc2.fillText("SCORE: " + SpaceInvader.score, 20, 37);
            SpaceInvader.crc2.fillText("3", 21, 581); //lives
        }
    }
    SpaceInvader.Player = Player; //class player zu
})(SpaceInvader || (SpaceInvader = {})); //namespace zu
//# sourceMappingURL=Player.js.map