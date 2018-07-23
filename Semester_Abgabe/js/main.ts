namespace SpaceInvader {

    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let imgData: ImageData;
    let breite: number = <number>(window.innerWidth);
    let hoehe: number = <number>(window.innerHeight);

    export let movingObjects: MovingObject[] = [];
    export let enemies: Enemy[] = [];
    export let player: Player;
    export let score: number = 0;

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


        createObjects();
        createListener();
        animate();

    } //init zu


    function createObjects(): void {

        player = new Player();

        for (let i: number = 0; i < 10; i++) {
            let enemy: Enemy1 = new Enemy1();
            enemy.x = 90 + i * 37;
            enemy.y = 318;
            enemies.push(enemy);
        }

        for (let j: number = 0; j < 10; j++) {
            let enemy: Enemy2 = new Enemy2();
            enemy.x = 80 + j * 37;
            enemy.y = 281;
            enemies.push(enemy);
        }


    } //createObjects zu

    
    
    export function shoot(): void {
        //max Bullets:
        //if (player.bullets < 5) {
            let laser: Laser = new Laser();
            movingObjects.push(laser);
        //}

    } //shoot zu

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

        //if one enemy is far left or right - change direction and yPosition
        for (let i: number = 0; i < enemies.length; i++) {
            if (enemies[i].checkPosition() == true) {
                for (let i: number = 0; i < enemies.length; i++) {
                    enemies[i].y += 20;
                    enemies[i].direction *= -1;
                }
            }
        }

        for (let i: number = 0; i < enemies.length; i++) {
            enemies[i].move();
        }



    } //moveObjects zu


    function drawObjects(): void {
        player.draw();
        for (let i: number = 0; i < enemies.length; i++) {
            enemies[i].draw();
        }
        for (let i: number = 0; i < movingObjects.length; i++) {
            movingObjects[i].draw();
        }
    } //drawObjects zu

} // namespace zu