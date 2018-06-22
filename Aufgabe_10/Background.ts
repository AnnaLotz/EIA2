namespace L10_Animation {

    export function drawBackground(): void {

        drawWater();

        drawSeaGrass(275, 400);
        drawSeaGrass(290, 425);
        drawSeaGrass(150, 390);
        // Save und den restored wieder skalieren
        crc2.scale(0.5, 0.5);
        drawSeaGrass(480, 780);
        drawSeaGrass(410, 800);
        drawSeaGrass(375, 790);
        crc2.setTransform(1.0, 0, 0, 1.0, 0, 0);
        drawSeaGrass(75, 460);

        drawStoneBackground();
        drawSand();

        crc2.scale(0.5, 0.5);
        drawSeaGrass(395, 1180);
        drawSeaGrass(360, 1200);
        drawSeaGrass(415, 1230);
        drawSeaGrass(450, 1210);
        crc2.scale(2, 2);

        drawStoneA(200, 575);
        drawStoneB(680, 620);
        drawChest(750, 460);

    }

    function drawWater(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, "#63B4FF");
        gradient.addColorStop(1, "#3C68E8");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 1000, 700);
    }

    function drawStoneBackground(): void {

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

    function drawSand(): void {

        crc2.beginPath();
        crc2.fillStyle = "rgba(237, 192, 44, 1)";
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 550, 0, 700);
        gradient.addColorStop(0, "#F5DC32");
        gradient.addColorStop(1, "#D1B15A");
        crc2.fillStyle = gradient;

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

    function drawChest(_x: number, _y: number): void {
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


    function drawStoneA(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.strokeStyle = "rgb(77, 77, 77)";
        crc2.fillStyle = "rgb(166, 166, 166)";
        crc2.lineTo(_x + 35, _y + 20);
        crc2.lineTo(_x + 30, _y + 50);
        crc2.lineTo(_x + 10, _y + 60);
        crc2.lineTo(_x - 20, _y + 55);
        crc2.lineTo(_x - 30, _y + 50);
        crc2.lineTo(_x - 40, _y + 25);
        crc2.lineTo(_x, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }

    function drawStoneB(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(166, 166, 166)";
        crc2.lineTo(_x - 20, _y + 20);
        crc2.lineTo(_x - 60, _y + 25);
        crc2.lineTo(_x - 90, _y + 18);
        crc2.lineTo(_x - 80, _y - 20);
        crc2.lineTo(_x - 50, _y - 40);
        crc2.lineTo(_x - 10, _y - 25);
        crc2.lineTo(_x, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }


    function drawSeaGrass(_x: number, _y: number): void {
        crc2.strokeStyle = "rgb(34, 51, 0)";
        crc2.lineWidth = 1;
        crc2.fillStyle = "rgb(51, 77, 0)";
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x - 25, _y - 40, _x - 5, _y - 75);
        crc2.quadraticCurveTo(_x + 10, _y - 100, _x, _y - 125);
        crc2.quadraticCurveTo(_x + 20, _y - 100, _x + 10, _y - 75);
        crc2.quadraticCurveTo(_x - 5, _y - 40, _x + 18, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }

} //namespace