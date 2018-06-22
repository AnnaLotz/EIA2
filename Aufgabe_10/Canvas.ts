/*  Aufgabe: Aufgabe 10 : Canvas Animation
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 22.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace L10_Animation {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    var imgData: ImageData;
    export let canvas: HTMLCanvasElement;

    let fishs: Fish[] = [];
    let bubbles: Bubble[] = [];
    let anchors: Anchor[] = [];
    let chains: Chain[] = [];


    function init(_event: Event): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        drawBackground();
        window.setTimeout(makeAnchor, 10);
        window.setTimeout(makeChain, 10);
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        //Fische
        for (let i: number = 0; i < 8; i++) {
            let oneFish: Fish = new Fish();
            oneFish.x = Math.random() * crc2.canvas.width;
            oneFish.y = Math.random() * crc2.canvas.height - 200;
            oneFish.speed = (Math.random() + 1) * 0.5;
            fishs.push(oneFish);
        }

        //Bubbles links
        for (let i: number = 0; i < 12; i++) {
            let oneBubble: Bubble = new Bubble();
            oneBubble.x = Math.random() * (100 - 300) + 300;
            oneBubble.y = Math.random() * 325;
            oneBubble.r = (Math.random() + 0.1) * 6;
            bubbles.push(oneBubble);
        }

        //Bubbles rechts
        for (let i: number = 0; i < 20; i++) {
            let oneBubble: Bubble = new Bubble();
            oneBubble.x = Math.random() * (750 - 900) + 900;
            oneBubble.y = Math.random() * 480;
            oneBubble.r = Math.random() * 10;
            bubbles.push(oneBubble);
        }

        //Anker

        function makeAnchor(): void {
            for (let i: number = 0; i < 1; i++) {
                console.log("anker");
                let oneAnchor: Anchor = new Anchor();
                oneAnchor.x = 590;
                oneAnchor.y = -10;
                anchors.push(oneAnchor);
            }
        }

        //Kette       
        function makeChain(): void {
            for (let i: number = 0; i < 1; i++) {
                let oneChain: Chain = new Chain();
                oneChain.x = 603;
                oneChain.y = -138;
                chains.push(oneChain);
            }
        }


        animate();

    } //init zu

    function animate(): void {
        window.setTimeout(animate, 10);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);

        moveObjects();
        drawObjects();
    } //animate zu

    function moveObjects(): void {

        //Fische
        for (let i: number = 0; i < fishs.length; i++) {
            fishs[i].moveForward();
            //um die fische neu zu spawnen, wenn sie aus dem Bild schwimmen
            if (fishs[i].x < -200) {
                fishs[i].x = canvas.width + 50;
                fishs[i].y = Math.random() * crc2.canvas.height - 200;
            }
        }

        //Luftblasen
        for (let i: number = 0; i < bubbles.length; i++) {
            bubbles[i].move();
            //Luftblasen links:
            if (bubbles[i].x < 500 && bubbles[i].y < -50) {
                bubbles[i].x = Math.random() * (100 - 300) + 300;
                bubbles[i].y = Math.random() * 100 + 325;
            }
            //Luftblasen rechts
            if (bubbles[i].x > 500 && bubbles[i].y < -50) {
                bubbles[i].x = Math.random() * (750 - 900) + 900;
                bubbles[i].y = Math.random() * 10 + 470;
            }
        }

        //Anker               
        for (let i: number = 0; i < anchors.length; i++) {
            window.setTimeout(sinkAnchor, 3000);

            function sinkAnchor(): void {
                if (anchors[i].y == 644) { //Anhalten/Aufschlagen
                    anchors[i].x = 590;
                    anchors[i].y = 644;

                } else {
                    anchors[i].moveDown();
                }
            }
        }

        //Kette
        for (let i: number = 0; i < chains.length; i++) {
            window.setTimeout(sinkChain, 3000);
//            window.setTimeout(pullChain, 40000);

            function sinkChain(): void {
                if (chains[i].y == 517 + i) {
                    chains[i].y = 517 + i;
                } else {
                    chains[i].moveDown();
                }
            }
            
//            function pullChain(): void {
//                if (chains[i].y == -10 + i) {
//                    chains[i].y = -10 + i;
//                } else {
//                    chains[i].moveUp();
//                }
//            }
        }



    } //moveObjects zu

    function drawObjects(): void {
        for (let i: number = 0; i < fishs.length; i++)
            fishs[i].draw();
        for (let i: number = 0; i < bubbles.length; i++)
            bubbles[i].draw();
        for (let i: number = 0; i < anchors.length; i++)
            anchors[i].draw();
        for (let i: number = 0; i < chains.length; i++)
            chains[i].draw();
    } //drawObjects zu


} //namespace zu