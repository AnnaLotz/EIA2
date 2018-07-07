namespace SpaceInvader {

    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let imgData: ImageData;
    let breite: number = <number>(window.innerWidth);
    let hoehe: number = <number>(window.innerHeight);

    export let score: number = 0;
    let player: Player;



    function init(_event: Event): void {
        
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        if (breite > hoehe) {
            canvas.style.setProperty("height", hoehe + "px");
        } else if (hoehe > breite) {
            canvas.style.setProperty("width", breite + "px");
        }
        console.log("breite: " + breite);
        console.log("hoehe: " + hoehe);


        drawBackground();
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        
        createObjects();
        createListener();
        animate();


    } //init zu



    function createListener(): void {

        //KeyboardEvents
        window.onkeydown = handleKeyDown;
        window.onkeyup = handleKeyUp;

        //ButtonEvents
        let leftButtonLandscape: HTMLButtonElement = <HTMLButtonElement>document.getElementById("LeftButtonLandscape");
        leftButtonLandscape.addEventListener("touchstart", handleLeftButtonDown);
        leftButtonLandscape.addEventListener("touchend", handleButtonUp);
                
        let rightButtonLandspace: HTMLButtonElement = <HTMLButtonElement>document.getElementById("RightButtonLandspace");
        rightButtonLandspace.addEventListener("touchstart", handleRightButtonDown);
        rightButtonLandspace.addEventListener("touchend", handleButtonUp);
        
        
        

    } //createListener zu
    
    function handleLeftButtonDown(_event: TouchEvent): void {
        console.log(" left button down");
        player.movingDirection = - 1;
    }
    
    function handleRightButtonDown(_event: TouchEvent): void {
        console.log("right button down");
        player.movingDirection = + 1;
    }
    
    function handleButtonUp(_event: TouchEvent): void {
        console.log("button up");
        player.movingDirection = 0;
    }
    
    function handleKeyDown(_event: KeyboardEvent): void {
        

        switch (_event.keyCode) {

            case 32:
                player.shoot();
                break;
            case 37: //left arrow
                player.movingDirection = - 1;
                break;
            case 39: //right arrow
                player.movingDirection = 1;
                break;
            case 65: // key a
                player.movingDirection = - 1;
                break;
            case 68: //key d
                player.movingDirection = 1;
                break;
        }

    } //handleKeyDown zu

    function handleKeyUp(_event: KeyboardEvent): void {

        switch (_event.keyCode) {
            case 37: //left arrow
                player.movingDirection = 0;
                break;
            case 39: //right arrow
                player.movingDirection = 0;
                break;
            case 65: // key a
                player.movingDirection = 0;
                break;
            case 68: //key d
                player.movingDirection = 0;
                break;
        }

    } //handleKeyUp zu

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
        if (player.movingDirection < 0) {
            player.moveLeft();
        } else if (player.movingDirection > 0) {
            player.moveRight();
        }
    }

    function drawObjects(): void {
        player.draw();
    }

} // namespace zu