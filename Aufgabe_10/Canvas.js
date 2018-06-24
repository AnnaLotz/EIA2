/*  Aufgabe: Aufgabe 10 : Canvas Animation
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 24.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var L10_Animation;
(function (L10_Animation) {
    window.addEventListener("load", init);
    var imgData;
    let fishs = [];
    let bubbles = [];
    //Neue Objekte erzeugen mit new vom typ der class
    let anchor = new L10_Animation.Anchor();
    let chain = new L10_Animation.Chain();
    let sink = true; //boolean zur bestimmung, ob AnchorAndChain sinken oder steigen sollen
    function init(_event) {
        L10_Animation.canvas = document.getElementsByTagName("canvas")[0];
        L10_Animation.crc2 = L10_Animation.canvas.getContext("2d");
        console.log(L10_Animation.crc2);
        L10_Animation.drawBackground();
        imgData = L10_Animation.crc2.getImageData(0, 0, L10_Animation.canvas.width, L10_Animation.canvas.height);
        //Fische
        for (let i = 0; i < 8; i++) {
            let oneFish = new L10_Animation.Fish();
            oneFish.x = Math.random() * L10_Animation.crc2.canvas.width;
            oneFish.y = Math.random() * L10_Animation.crc2.canvas.height - 200;
            oneFish.speed = (Math.random() + 1) * 0.5;
            fishs.push(oneFish);
        }
        //Bubbles links
        for (let i = 0; i < 12; i++) {
            let oneBubble = new L10_Animation.Bubble();
            oneBubble.x = Math.random() * (100 - 300) + 300;
            oneBubble.y = Math.random() * 325;
            oneBubble.r = (Math.random() + 0.1) * 6;
            bubbles.push(oneBubble);
        }
        //Bubbles rechts
        for (let i = 0; i < 20; i++) {
            let oneBubble = new L10_Animation.Bubble();
            oneBubble.x = Math.random() * (750 - 900) + 900;
            oneBubble.y = Math.random() * 480;
            oneBubble.r = Math.random() * 10;
            bubbles.push(oneBubble);
        }
        //Anker
        anchor.x = 590;
        anchor.y = -10;
        //Kette       
        chain.x = 603;
        chain.y = -138;
        animate();
    } //init zu
    function animate() {
        window.setTimeout(animate, 10);
        L10_Animation.crc2.clearRect(0, 0, L10_Animation.crc2.canvas.width, L10_Animation.crc2.canvas.height);
        L10_Animation.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
    } //animate zu
    function moveObjects() {
        //Fische
        for (let i = 0; i < fishs.length; i++) {
            fishs[i].moveForward();
            //um die fische neu zu spawnen, wenn sie aus dem Bild schwimmen
            if (fishs[i].x < -200) {
                fishs[i].x = L10_Animation.canvas.width + 50;
                fishs[i].y = Math.random() * L10_Animation.crc2.canvas.height - 200;
            }
        }
        //Luftblasen
        for (let i = 0; i < bubbles.length; i++) {
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
        function moveAnchorAndChain() {
            if (anchor.y == -10) {
                //sobald du bei -10 bist sollst du nur noch sinken
                sink = true;
            }
            else if (anchor.y == 644) {
                //sobald du bei 644 bist sollst du nur noch steigen
                sink = false;
            }
            if (sink == true) {
                //wenn du sinken sollst, warte 3 sekunden und lasse dann sinken
                window.setTimeout(sinkAnchorAndChain(), 3000);
            }
            else {
                //wenn du steigen sollst, dann warte 5 sekunden und pulle dann
                window.setTimeout(pullAnchorAndChain(), 5000);
            }
        } //moveAnchorAndChain zu
        function sinkAnchorAndChain() {
            anchor.moveDown();
            chain.moveDown();
        }
        function pullAnchorAndChain() {
            anchor.moveUp();
            chain.moveUp();
        }
    } //moveObjects    
    function drawObjects() {
        for (let i = 0; i < fishs.length; i++)
            fishs[i].draw();
        for (let i = 0; i < bubbles.length; i++)
            bubbles[i].draw();
        anchor.draw();
        chain.draw();
    } //drawObjects zu
})(L10_Animation || (L10_Animation = {})); //namespace zu
//# sourceMappingURL=Canvas.js.map