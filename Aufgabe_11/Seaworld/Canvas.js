/*  Aufgabe: Aufgabe 11 : Inheritance: Seaworld
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 26.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var L11_SeaworldInheritance;
(function (L11_SeaworldInheritance) {
    window.addEventListener("load", init);
    let imgData;
    let movingObjects = [];
    function init(_event) {
        L11_SeaworldInheritance.canvas = document.getElementsByTagName("canvas")[0];
        L11_SeaworldInheritance.crc2 = L11_SeaworldInheritance.canvas.getContext("2d");
        console.log(L11_SeaworldInheritance.crc2);
        //canvas.addEventListener("click", insertFood);
        L11_SeaworldInheritance.drawBackground();
        imgData = L11_SeaworldInheritance.crc2.getImageData(0, 0, L11_SeaworldInheritance.canvas.width, L11_SeaworldInheritance.canvas.height);
        //Moving Objekte zum ersten mal Erzeugen
        //Fische
        for (let i = 0; i < 8; i++) {
            let oneFish = new L11_SeaworldInheritance.Fish();
            movingObjects.push(oneFish);
        }
        //Bubbles rechts
        for (let i = 0; i < 25; i++) {
            let oneBubble = new L11_SeaworldInheritance.Bubble();
            movingObjects.push(oneBubble);
        }
        //Bubbles links
        for (let i = 0; i < 18; i++) {
            let oneBubble = new L11_SeaworldInheritance.BubblesLeft();
            movingObjects.push(oneBubble);
        }
        //Anker
        let anchor = new L11_SeaworldInheritance.Anchor();
        movingObjects.push(anchor);
        animate();
    } //init zu
    function animate() {
        window.setTimeout(animate, 10);
        L11_SeaworldInheritance.crc2.clearRect(0, 0, L11_SeaworldInheritance.crc2.canvas.width, L11_SeaworldInheritance.crc2.canvas.height);
        L11_SeaworldInheritance.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
    } //animate zu
    function moveObjects() {
        //alle movingObjects bewegen
        for (let i = 0; i < movingObjects.length; i++) {
            movingObjects[i].checkPosition();
            movingObjects[i].move();
        }
    } //moveObjects zu
    function drawObjects() {
        //alle movingObjects malen
        for (let i = 0; i < movingObjects.length; i++)
            movingObjects[i].draw();
    } //drawObjects zu
})(L11_SeaworldInheritance || (L11_SeaworldInheritance = {})); //namespace zu
//# sourceMappingURL=Canvas.js.map