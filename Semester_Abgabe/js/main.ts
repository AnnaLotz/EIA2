namespace SpaceInvader {

    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let imgData: ImageData;
    let breite: number = <number>(window.innerWidth);
    let hoehe: number = <number>(window.innerHeight);

    export let score: number = 0;
    export let player: Player;
    export let movingObjects: MovingObject[] = [];
    export let bullets: number = 0;

    function init(_event: Event): void {

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        drawBackground();
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        if (breite > hoehe) {
            canvas.style.setProperty("height", hoehe + "px");
        } else if (hoehe > breite) {
            canvas.style.setProperty("width", breite + "px");
        }
        console.log("Breite: " + breite);
        console.log("Hoehe: " + hoehe);


        createObjects();
        createListener();
        animate();

    } //init zu


    function createObjects(): void {
        player = new Player();
    }

    export function shoot(): void {
        //if (bullets < 1) {
            let laser: Laser = new Laser();
            movingObjects.push(laser);
            bullets += 1;
        //}

    }

    function animate(): void {
        window.setTimeout(animate, 20); //framerate: 50 fps -> 20 ms
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);

        moveObjects();
        drawObjects();

    } //animate zu


    function moveObjects(): void {
        for (let i: number = 0; i < movingObjects.length; i++) {
            movingObjects[i].move();
            movingObjects[i].checkPosition();
        }
        if (player.movingDirection < 0) {
            player.moveLeft();
        } else if (player.movingDirection > 0) {
            player.moveRight();
        }

    }

    function drawObjects(): void {
        player.draw();
        for (let i: number = 0; i < movingObjects.length; i++) {
            movingObjects[i].draw();
        }
    }

} // namespace zu