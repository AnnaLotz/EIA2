var L10_Animation;
(function (L10_Animation) {
    function drawBubble(_x, _y, _r) {
        L10_Animation.crc2.fillStyle = "rgb(204, 238, 255, 0.55)";
        L10_Animation.crc2.lineWidth = 0.5;
        L10_Animation.crc2.beginPath();
        L10_Animation.crc2.arc(_x, _y, _r, 0, 2 * Math.PI);
        L10_Animation.crc2.closePath();
        L10_Animation.crc2.stroke();
        L10_Animation.crc2.fill();
    }
    L10_Animation.drawBubble = drawBubble;
})(L10_Animation || (L10_Animation = {})); //namespace zu
//# sourceMappingURL=Bubble.js.map