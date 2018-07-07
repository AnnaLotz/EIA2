namespace SpaceInvader {

    window.addEventListener("load", init);
    window.onkeydown = checkKey;
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let imgData: ImageData;
    let breite: number = <number>(window.innerWidth);
    let hoehe: number = <number>(window.innerHeight);

    export let score: number = 0;
    let player: Player;

    

    function checkKey(_event: KeyboardEvent): void {

        if (_event.key == "ArrowLeft") {
            player.moveLeft();
        }
        else if (_event.key == "ArrowRight") {
            player.moveRight();
        }
    } //checkKey zu



    function init(_event: Event): void {


        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        if (breite > hoehe) {
            canvas.style.setProperty("height", hoehe + "px");
        } else if (hoehe > breite) {
            canvas.style.setProperty("width", breite + "px");
        }

        drawBackground();
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);




        console.log("breite: " + breite);
        console.log("hoehe: " + hoehe);

        createObjects();
        animate();


    } //init zu

    function createObjects(): void {
        player = new Player();

    }

    function animate(): void {
        window.setTimeout(animate, 20); //framerate: 50 fps -> 20 ms
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);

        moveObjects();
        drawObjects();


    } //animate zu


    function moveObjects(): void {
        //
    }

    function drawObjects(): void {
        player.draw();
    }

} // namespace zu