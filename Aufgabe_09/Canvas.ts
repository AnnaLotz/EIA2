namespace L09_Canvas {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        drawBackground();
        drawStoneBackground();
        drawSand();

        // drawDavidStar(300, 100);
        //drawDavidStar(100, 200);

        /* for (let i: number = 0; i < 100; i++) {
             let x: number = Math.random() * crc2.canvas.width;
             let y: number = Math.random() * crc2.canvas.height;
             drawDavidStar(x, y);
         } */
    }

    function drawBackground(): void {
        crc2.fillStyle = "rgba(0,0,200, 0.65)";
        crc2.fillRect(0, 0, 1000, 700);
    }
    
    function drawStoneBackground(): void {
        crc2.beginPath();
        crc2.moveTo(0, 510);
        crc2.lineTo(50, 425);
        crc2.lineTo(90, 415);
        crc2.lineTo(115, 330);
        crc2.lineTo(130, 365);
        crc2.lineTo(175, 387);
        crc2.lineTo(275, 520);
        crc2.closePath();
        crc2.stroke();
        
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
    }

    function drawSand(): void {

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
} //namespace zu