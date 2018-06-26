/*  Aufgabe: Aufgabe 11 : Inheritance: Seaworld
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 26.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace L11_SeaworldInheritance {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    var imgData: ImageData;
    export let canvas: HTMLCanvasElement;

    let fishs: Fish[] = [];
    let bubbles: Bubble[] = [];

    //Neue Objekte erzeugen mit new vom typ der class
    let anchor: Anchor;
    let chain: Chain;
    let sink: boolean = true; //boolean zur bestimmung, ob AnchorAndChain sinken oder steigen sollen


    function init(_event: Event): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        drawBackground();
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
            oneBubble.x = Math.random() * (100 - 300) + 300; // Math.random() * (max - min) + min
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
        anchor = new Anchor();    
        anchor.x = 590;
        anchor.y = -10;
        
        //Kette 
        chain = new Chain();      
        chain.x = 603;
        chain.y = -138;
       

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

        
        
        
        
        //Anker und Kette bewegen           
        
        moveAnchorAndChain();
        
        function moveAnchorAndChain(): void {                        
            
            if (anchor.y <= -10) {
                //sobald du bei -10 bist sollst du nur noch sinken
                sink = true;            
            } else if (anchor.y >= 644) {
                //sobald du bei 644 bist sollst du nur noch steigen
                sink = false;   
            }
            
            if (sink == true) {
                //wenn du sinken sollst, warte 3 sekunden und lasse dann sinken
                window.setTimeout(sinkAnchorAndChain(), 3000);    
            } else {
                //wenn du steigen sollst, dann warte 5 sekunden und pulle dann
                window.setTimeout(pullAnchorAndChain(), 5000);    
            }
            
        } //moveAnchorAndChain zu
        
        function sinkAnchorAndChain(): void {            
            anchor.moveDown();
            chain.moveDown();
        }
        
        function pullAnchorAndChain(): void {
            anchor.moveUp();
            chain.moveUp();
        }

 
        

    } //moveObjects    
    function drawObjects(): void {

        for (let i: number = 0; i < fishs.length; i++)
            fishs[i].draw();
        for (let i: number = 0; i < bubbles.length; i++)
            bubbles[i].draw();

        anchor.draw();
        chain.draw();
        
    } //drawObjects zu


} //namespace zu