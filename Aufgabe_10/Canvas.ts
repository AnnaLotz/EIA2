/*  Aufgabe: Aufgabe 10 : Canvas Animation
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 21.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace L10_Animation {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let fishs: Fish[] = [];
    var imgData: ImageData;
    export let canvas: HTMLCanvasElement;


    function init(_event: Event): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        drawBackground();
        imgData = crc2.getImageData(0, 0, 1000, 700);

        for (let i: number = 0; i < 7; i++) {
            let oneFish: Fish = new Fish();
            oneFish.x = Math.random() * crc2.canvas.width;
            oneFish.y = Math.random() * crc2.canvas.height - 200;
            fishs.push(oneFish);
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

        animate();


    } //init zu

    function animate(): void {
        window.setTimeout(animate, 10);

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        crc2.putImageData(imgData, 0, 0);

        moveObjects();
        drawObjects();
    }

    function moveObjects(): void {
        for (let i: number = 0; i < fishs.length; i++) {
            fishs[i].move();
            
            if (fishs[i].x < -200) {
                fishs[i].x = canvas.width + 50;
                fishs[i].y = Math.random() * crc2.canvas.height - 200;
                }
        }
    }

    function drawObjects(): void {
        for (let i: number = 0; i < fishs.length; i++)
            fishs[i].draw();
    }


} //namespace zu