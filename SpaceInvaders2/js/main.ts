/*  Aufgabe: Abschlussaufgabe - Space Invaders
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace SpaceInvader2 {

    window.addEventListener("load", init);


    let startButton: HTMLButtonElement;
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let imgData: ImageData;
    let breite: number = <number>(window.innerWidth);
    let hoehe: number = <number>(window.innerHeight);
    let node: HTMLDivElement;
    let wroteScore: boolean = false;
    let round: number = 0;

    export let everyLaser: EveryLaser[] = [];
    export let enemies: Enemy[] = [];
    export let ufos: Ufo[] = [];
    export let player: Player;
    export let score: number = 0;
    export let totalEnemies: number = 0;


    function init(_event: Event): void {

        document.getElementById("game").style.display = "none";
        document.getElementById("gameOver").style.display = "none";

        startButton = <HTMLButtonElement>document.getElementById("startButton");
        startButton.addEventListener("click", startGame);

    } //init zu


    function startGame(): void {

        document.getElementById("startMenue").style.display = "none"; //menu unsichtbar machen
        document.getElementById("game").style.display = "initial"; //gamefield sichtbar machen

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        //Anpassen der Canvas größe an den gegebenen Bildschirm
        if (breite > hoehe) {
            canvas.style.setProperty("height", hoehe + "px");
        } else if (hoehe > breite) {
            canvas.style.setProperty("width", breite + "px");
        }

        drawBackground(); // -> drawBackground.js
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);


        createEnemies();
        player = new Player();

        createListener(); // -> createListener.js , für alle Listener zum bewegen/schießen

        window.setTimeout(createUfo, 10000);
        window.setTimeout(enemyShoot, 1000);

        animate();



    } //startGame zu

    function startNewGame(): void {
        round++;
        console.log(round);
        createEnemies();

        for (let i: number = 0; i < enemies.length; i++) {
            enemies[i].speed += round * 0.3;
        }


    }



    //alle anfänglichen Objekte erzeugen
    function createEnemies(): void {

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


    //nach random Zeit einen EnemyLaser erzeugen und von einem zufälligen Enemy aus schießen
    function enemyShoot(): void {
        let timeToNextEnemyShoot: number;
        timeToNextEnemyShoot = Math.random() * (4000 - 800) + 800; // Math.random() * (max - min) + min    
        window.setTimeout(enemyShoot, timeToNextEnemyShoot);

        let enemyLaser: EnemyLaser = new EnemyLaser();
        everyLaser.push(enemyLaser);
        let j: number = Math.floor(Math.random() * enemies.length);
        let enemy: Enemy = <Enemy>enemies[j];
        enemyLaser.getToShootFrom(enemy);
    } //enemyShoot zu


    //nach Random Zeit ein Ufo erzeugen
    function createUfo(): void {
        let timeToNextUfo: number;
        timeToNextUfo = Math.random() * (25000 - 13000) + 13000; // Math.random() * (max - min) + min    
        window.setTimeout(createUfo, timeToNextUfo);

        let ufo: Ufo = new Ufo();
        ufos.push(ufo);
    } //close createUfo


    function animate(): void {

        window.setTimeout(animate, 20); //framerate: 50 fps -> 20 ms
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);

        moveObjects();
        drawObjects();

        if (totalEnemies == 0) {
            startNewGame();
        }

        if (player.lives <= 0) {
            player.lost();
        }
    } //animate zu



    //in HandleListener.js ausgelöst
    export function shoot(): void {
        if (player.bullets < 1) {
            let laser: Laser = new Laser();
            everyLaser.push(laser);
        }
    } //shoot zu


    function moveObjects(): void {

        player.move();
        player.checkIfHit();

        for (let i: number = 0; i < ufos.length; i++) {
            ufos[i].move();
            ufos[i].checkPosition();
        }

        for (let i: number = 0; i < everyLaser.length; i++) {
            everyLaser[i].move();
            everyLaser[i].checkPosition(); //hier wird das Treffen der Gegner abgefragt, daher auch was passiert wenn etwas getroffen wird
        }

        for (let i: number = 0; i < enemies.length; i++) {
            enemies[i].move();
        }

        //if one enemy is far left or right - change direction and yPosition
        for (let i: number = 0; i < enemies.length; i++) {
            if (enemies[i].checkPositionLeftOrRight() == true) {
                for (let i: number = 0; i < enemies.length; i++) {
                    enemies[i].y += 10;
                    enemies[i].direction *= -1;
                }
                break;
            }
        }
    } //moveObjects zu


    function drawObjects(): void {
        player.draw();
        for (let i: number = 0; i < ufos.length; i++) {
            ufos[i].draw();
        }
        for (let i: number = 0; i < enemies.length; i++) {
            enemies[i].draw();
        }
        for (let i: number = 0; i < everyLaser.length; i++) {
            everyLaser[i].draw();
        }
    } //drawObjects zu


    //wird in Player.js ausgelöst
    export function showLostScreen(): void {
        document.getElementById("game").style.display = "none";
        document.getElementById("gameOver").style.display = "initial";
        node = <HTMLDivElement>document.getElementsByClassName("yourScore")[0];
        writeScoreToHTML();
    } //showLostScreen zu


    function writeScoreToHTML(): void {
        if (!wroteScore) {
            let content: string = "";
            content = "Your score: " + score;
            node.innerHTML += content;
            wroteScore = true;
        }
    } //writeScoreToHTML zus

} // namespace zu