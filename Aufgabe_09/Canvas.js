var L09_Canvas;
(function (L09_Canvas) {
    window.addEventListener("load", init);
    let crc2;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        drawBackground();
        drawStoneBackground();
        drawSand();
        drawChest(750, 460);
        drawAnchor(725, 670);
        /* for (let i: number = 0; i < 100; i++) {
             let x: number = Math.random() * crc2.canvas.width;
             let y: number = Math.random() * crc2.canvas.height;
             drawDavidStar(x, y);
         } */
    }
    function drawBackground() {
        crc2.fillStyle = "rgba(0,0,200, 0.65)";
        crc2.fillRect(0, 0, 1000, 700);
    }
    function drawStoneBackground() {
        crc2.beginPath();
        crc2.fillStyle = "rgb(166, 166, 166)";
        crc2.moveTo(0, 510);
        crc2.lineTo(50, 425);
        crc2.lineTo(90, 415);
        crc2.lineTo(115, 330);
        crc2.lineTo(130, 365);
        crc2.lineTo(175, 387);
        crc2.lineTo(275, 520);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "rgb(179, 179, 179)";
        crc2.moveTo(150, 470);
        crc2.lineTo(180, 395);
        crc2.lineTo(215, 385);
        crc2.lineTo(225, 360);
        crc2.lineTo(248, 390);
        crc2.lineTo(275, 380);
        crc2.lineTo(320, 420);
        crc2.lineTo(330, 480);
        crc2.lineTo(425, 660);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    function drawSand() {
        crc2.beginPath();
        crc2.fillStyle = "rgba(237, 192, 44, 1)";
        crc2.moveTo(0, 475);
        crc2.quadraticCurveTo(50, 475, 85, 440);
        crc2.quadraticCurveTo(175, 380, 255, 460);
        crc2.quadraticCurveTo(375, 540, 470, 480);
        crc2.quadraticCurveTo(560, 430, 645, 480);
        crc2.quadraticCurveTo(730, 530, 780, 480);
        crc2.quadraticCurveTo(800, 450, 1000, 450);
        crc2.lineTo(1000, 700);
        crc2.lineTo(0, 700);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    function drawChest(_x, _y) {
        crc2.lineWidth = 1;
        crc2.strokeStyle = "rgb(0, 0, 0)";
        crc2.beginPath();
        crc2.fillStyle = "rgb(102, 51, 0)";
        crc2.moveTo(_x, _y); //A
        crc2.lineTo(_x, _y + 50); //B
        crc2.lineTo(_x + 100, _y + 100); //C
        crc2.lineTo(_x + 100, _y + 50); //D
        crc2.lineTo(_x, _y); //A
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(_x, _y); //A
        crc2.lineTo(_x + 50, _y); //G
        crc2.lineTo(_x + 150, _y + 50); //E
        crc2.lineTo(_x + 100, _y + 50); //D 
        crc2.lineTo(_x, _y); //A
        crc2.fill();
        crc2.stroke();
        crc2.moveTo(_x + 100, _y + 100); //C
        crc2.lineTo(_x + 150, _y + 100); //F
        crc2.lineTo(_x + 150, _y + 50); //E
        crc2.lineTo(_x + 100, _y + 50); //D
        crc2.fill();
        crc2.stroke();
        crc2.moveTo(_x + 50, _y); //G
        crc2.lineTo(_x + 25, _y - 45); //H
        crc2.lineTo(_x + 125, _y + 5); //I
        crc2.lineTo(_x + 150, _y + 50); //E
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        /*
         crc2.moveTo(_x, _y); //A
         crc2.lineTo(_x , _y + 50); //B
         crc2.lineTo(_x + 100, _y + 100); //C
         crc2.lineTo(_x + 100, _y + 50); //D
         crc2.lineTo(_x + 150, _y + 50); //E
         crc2.lineTo(_x + 150, _y + 150); //F
         crc2.lineTo(_x + 50, _y); //G
         crc2.lineTo(_x + 25, _y - 45); //H
         crc2.lineTo(_x + 125, _y + 5); //I
         crc2.lineTo(_x + 135, _y + 15); //J
         crc2.lineTo(_x + 35, _y - 35); //K
         crc2.closePath();
         crc2.stroke(); */
    }
    function drawAnchor(_x, _y) {
        crc2.beginPath();
        crc2.lineWidth = 2;
        crc2.strokeStyle = "rgb(77, 77, 77)";
        crc2.moveTo(_x, _y); //A
        crc2.lineTo(_x + 10, _y - 90); //D
        crc2.stroke();
        crc2.closePath();
    }
})(L09_Canvas || (L09_Canvas = {})); //namespace zu
//# sourceMappingURL=Canvas.js.map