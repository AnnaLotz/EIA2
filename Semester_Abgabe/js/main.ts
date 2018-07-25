namespace SpaceInvader {

    window.addEventListener("load", init);

    let startButton: HTMLButtonElement;
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let imgData: ImageData;
    let breite: number = <number>(window.innerWidth);
    let hoehe: number = <number>(window.innerHeight);

    export let movingObjects: MovingObject[] = [];
    export let enemies: Enemy[] = [];
    export let player: Player;
    export let score: number = 0;
    export let totalEnemies: number = 0;

    function init(_event: Event): void {

        document.getElementById("game").style.display = "none";

        startButton = <HTMLButtonElement>document.getElementById("startButton");
        startButton.addEventListener("click", startGame);



        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");



        if (breite > hoehe) {
            canvas.style.setProperty("height", hoehe + "px");
        } else if (hoehe > breite) {
            canvas.style.setProperty("width", breite + "px");
        }


    } //init zu

    function startGame(): void {

        document.getElementById("startMenue").style.display = "none"; //menu unsichtbar machen
        document.getElementById("game").style.display = "initial"; //gamefield sichtbar machen


        drawBackground();
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        createObjects();
        createListener();
        animate();
    }


    function createObjects(): void {

        player = new Player();

        for (let i: number = 0; i < 10; i++) {
            let enemy: Enemy3 = new Enemy3();
            enemy.x = 90 + i * 37;
            enemy.y = 137;
            enemies.push(enemy);
            totalEnemies++;
        }

        for (let l: number = 0; l < 9; l++) {
            let enemy: Enemy2 = new Enemy2();
            enemy.x = 87 + l * 42;
            enemy.y = 174;
            enemies.push(enemy);
            totalEnemies++;
        }

        for (let k: number = 0; k < 9; k++) {
            let enemy: Enemy2 = new Enemy2();
            enemy.x = 88 + k * 42;
            enemy.y = 214;
            enemies.push(enemy);
            totalEnemies++;
        }

        for (let i: number = 0; i < 9; i++) {
            let enemy: Enemy1 = new Enemy1();
            enemy.x = 91 + i * 42;
            enemy.y = 288;
            enemies.push(enemy);
            totalEnemies++;
        }

        for (let j: number = 0; j < 9; j++) {
            let enemy: Enemy1 = new Enemy1();
            enemy.x = 89 + j * 42;
            enemy.y = 251;
            enemies.push(enemy);
            totalEnemies++;
        }



    } //createObjects zu


    function animate(): void {
        window.setTimeout(animate, 20); //framerate: 50 fps -> 20 ms
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);

        moveObjects();
        drawObjects();
        if (totalEnemies == 0) {
            player.won();    
        }

    } //animate zu

    export function shoot(): void {
        //max Bullets:
        //if (player.bullets < 5) {
        let laser: Laser = new Laser();
        movingObjects.push(laser);
        //}
    } //shoot zu



    function moveObjects(): void {

        player.move();
        player.checkIfHit();


        for (let i: number = 0; i < movingObjects.length; i++) {
            movingObjects[i].move();
            movingObjects[i].checkPosition();
        }
        
        for (let i: number = 0; i < enemies.length; i++) {
            enemies[i].move();
        }

        //if one enemy is far left or right - change direction and yPosition
        for (let i: number = 0; i < enemies.length; i++) {
            if (enemies[i].checkPositionLeftOrRight() == true) {
                for (let i: number = 0; i < enemies.length; i++) {
                    enemies[i].y += 20;
                    enemies[i].direction *= -1;
                }
            }
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