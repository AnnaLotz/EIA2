var SpaceInvader;
(function (SpaceInvader) {
    function drawBackground() {
        //Black background
        SpaceInvader.crc2.fillStyle = "black";
        SpaceInvader.crc2.fillRect(0, 0, SpaceInvader.canvas.width, SpaceInvader.canvas.height);
        SpaceInvader.crc2.fillStyle = "white";
        //Lines
        SpaceInvader.crc2.fillRect(0, 560, SpaceInvader.canvas.width, 2);
        //Text
        SpaceInvader.crc2.font = "21px Arial";
        SpaceInvader.crc2.fillText("SCORE: " + SpaceInvader.score, 20, 37);
        SpaceInvader.crc2.fillText("3", 21, 581);
        //Test-lines/pixels
        //        crc2.fillRect(10, 10, 1, 580);
        //        crc2.fillRect(20, 20, 10, 10);
        //        crc2.fillRect(50, 50, 1, 1);
    }
    SpaceInvader.drawBackground = drawBackground;
})(SpaceInvader || (SpaceInvader = {}));
//# sourceMappingURL=Background.js.map