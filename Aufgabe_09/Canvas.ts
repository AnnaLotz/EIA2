namespace L09_Canvas {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        drawBackground();

        drawSeaGrass(275, 400);
        drawSeaGrass(290, 425);
        drawSeaGrass(150, 390);
        crc2.scale(0.5, 0.5);
        drawSeaGrass(480, 780);
        drawSeaGrass(410, 800);
        drawSeaGrass(375, 790);
        crc2.scale(2, 2);
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
        drawStoneB(825, 625);
        drawChest(750, 460);
        drawAnchor(570, 670);



        for (let i: number = 0; i < 7; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height - 200;
            drawFish(x, y);
        }

        for (let i: number = 0; i < 20; i++) {
            let x: number = Math.random() * (750 - 900) + 900;
            let y: number = Math.random() * 480;
            let r: number = Math.random() * 10;
            drawBubble(x, y, r);
        }

        for (let i: number = 0; i < 12; i++) {
            let x: number = Math.random() * (100 - 300) + 300;
            let y: number = Math.random() * 325;
            let r: number = Math.random() * 5;
            drawBubble(x, y, r);
        }


    } //init zu

    function drawBackground(): void {
        crc2.fillStyle = "rgba(0,0,200, 0.65)";
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

    function drawAnchor(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.lineWidth = 4;
        crc2.strokeStyle = "rgb(38, 38, 38)";
        crc2.moveTo(_x, _y); //A
        crc2.lineTo(_x + 10, _y - 90); //D
        crc2.arc(_x + 12, _y - 107, 15, 1.5, 15 * Math.PI);
        crc2.moveTo(_x - 5, _y - 72); //F
        crc2.lineTo(_x + 20, _y - 68); //E
        crc2.moveTo(_x - 40, _y - 45); //C
        crc2.quadraticCurveTo(_x - 38, _y - 5, _x, _y);
        crc2.quadraticCurveTo(_x + 35, _y + 5, _x + 48, _y - 33);

        crc2.stroke();
        crc2.closePath();
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

    function drawFish(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.strokeStyle = "rgb( 0, 0, 0)";
        crc2.lineWidth = 1;
        crc2.fillStyle = "rgb(180, 20, 0)";
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x + 60, _y - 60, _x + 120, _y + 0);
        crc2.lineTo(_x + 150, _y - 25);
        crc2.lineTo(_x + 150, _y + 25);
        crc2.lineTo(_x + 120, _y);
        crc2.quadraticCurveTo(_x + 60, _y + 60, _x + 0, _y + 0);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }


    function drawBubble(_x: number, _y: number, _r: number): void {

        crc2.fillStyle = "rgb(204, 238, 255, 0.55)";
        crc2.lineWidth = 0.5;
        crc2.beginPath();
        crc2.arc(_x, _y, _r, 0, 2 * Math.PI);
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



} //namespace zu