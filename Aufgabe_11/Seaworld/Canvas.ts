/*  Aufgabe: Aufgabe 11 : Inheritance: Seaworld
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 26.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace L11_SeaworldInheritance {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let imgData: ImageData;

    let movingObjects: MovingObjects[] = [];

    function init(_event: Event): void {

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        //canvas.addEventListener("click", insertFood);

        drawBackground();
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);


        //Moving Objekte zum ersten mal Erzeugen
        //Fische
        for (let i: number = 0; i < 8; i++) {
            let oneFish: Fish = new Fish();
            movingObjects.push(oneFish);
        }

        //Bubbles rechts
        for (let i: number = 0; i < 25; i++) {
            let oneBubble: Bubble = new Bubble();
            movingObjects.push(oneBubble);
        }
        //Bubbles links
        for (let i: number = 0; i < 18; i++) {
            let oneBubble: BubblesLeft = new BubblesLeft();
            movingObjects.push(oneBubble);
        }

        //Anker
        let anchor: Anchor = new Anchor();
        movingObjects.push(anchor);
        

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

        //alle movingObjects bewegen
        for (let i: number = 0; i < movingObjects.length; i++) {
            movingObjects[i].checkPosition();
            movingObjects[i].move();
        }
        
    } //moveObjects zu


    function drawObjects(): void {

        //alle movingObjects malen
        for (let i: number = 0; i < movingObjects.length; i++)
            movingObjects[i].draw();

    } //drawObjects zu

} //namespace zu