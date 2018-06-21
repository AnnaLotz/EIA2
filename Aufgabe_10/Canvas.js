/*  Aufgabe: Aufgabe 10 : Canvas Animation
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 21.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var L10_Animation;
(function (L10_Animation) {
    window.addEventListener("load", init);
    let fishs = [];
    var imgData;
    function init(_event) {
        L10_Animation.canvas = document.getElementsByTagName("canvas")[0];
        L10_Animation.crc2 = L10_Animation.canvas.getContext("2d");
        console.log(L10_Animation.crc2);
        L10_Animation.drawBackground();
        imgData = L10_Animation.crc2.getImageData(0, 0, 1000, 700);
        for (let i = 0; i < 7; i++) {
            let oneFish = new L10_Animation.Fish();
            oneFish.x = Math.random() * L10_Animation.crc2.canvas.width;
            oneFish.y = Math.random() * L10_Animation.crc2.canvas.height - 200;
            fishs.push(oneFish);
        }
        for (let i = 0; i < 20; i++) {
            let x = Math.random() * (750 - 900) + 900;
            let y = Math.random() * 480;
            let r = Math.random() * 10;
            L10_Animation.drawBubble(x, y, r);
        }
        for (let i = 0; i < 12; i++) {
            let x = Math.random() * (100 - 300) + 300;
            let y = Math.random() * 325;
            let r = Math.random() * 5;
            L10_Animation.drawBubble(x, y, r);
        }
        animate();
    } //init zu
    function animate() {
        window.setTimeout(animate, 10);
        L10_Animation.crc2.clearRect(0, 0, L10_Animation.crc2.canvas.width, L10_Animation.crc2.canvas.height);
        L10_Animation.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < fishs.length; i++) {
            fishs[i].move();
            if (fishs[i].x < -200) {
                fishs[i].x = L10_Animation.canvas.width + 50;
                fishs[i].y = Math.random() * L10_Animation.crc2.canvas.height - 200;
            }
        }
    }
    function drawObjects() {
        for (let i = 0; i < fishs.length; i++)
            fishs[i].draw();
    }
})(L10_Animation || (L10_Animation = {})); //namespace zu
//# sourceMappingURL=Canvas.js.map