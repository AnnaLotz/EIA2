/*  Aufgabe: Abschlussaufgabe - Space Invaders
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var SpaceInvader2;
(function (SpaceInvader2) {
    window.addEventListener("load", init);
    let startButton;
    let imgData;
    let breite = (window.innerWidth);
    let hoehe = (window.innerHeight);
    let node;
    let wroteScore = false;
    let round = 0;
    SpaceInvader2.everyLaser = [];
    SpaceInvader2.enemies = [];
    SpaceInvader2.ufos = [];
    SpaceInvader2.score = 0;
    SpaceInvader2.totalEnemies = 0;
    function init(_event) {
        document.getElementById("game").style.display = "none";
        document.getElementById("gameOver").style.display = "none";
        startButton = document.getElementById("startButton");
        startButton.addEventListener("click", startGame);
    } //init zu
    function startGame() {
        document.getElementById("startMenue").style.display = "none"; //menu unsichtbar machen
        document.getElementById("game").style.display = "initial"; //gamefield sichtbar machen
        SpaceInvader2.canvas = document.getElementsByTagName("canvas")[0];
        SpaceInvader2.crc2 = SpaceInvader2.canvas.getContext("2d");
        //Anpassen der Canvas gr��e an den gegebenen Bildschirm
        if (breite > hoehe) {
            SpaceInvader2.canvas.style.setProperty("height", hoehe + "px");
        }
        else if (hoehe > breite) {
            SpaceInvader2.canvas.style.setProperty("width", breite + "px");
        }
        SpaceInvader2.drawBackground(); // -> drawBackground.js
        imgData = SpaceInvader2.crc2.getImageData(0, 0, SpaceInvader2.canvas.width, SpaceInvader2.canvas.height);
        createEnemies();
        SpaceInvader2.player = new SpaceInvader2.Player();
        SpaceInvader2.createListener(); // -> createListener.js , f�r alle Listener zum bewegen/schie�en
        window.setTimeout(createUfo, 10000);
        window.setTimeout(enemyShoot, 1000);
        animate();
    } //startGame zu
    function startNewGame() {
        round++;
        createEnemies();
        for (let i = 0; i < SpaceInvader2.enemies.length; i++) {
            SpaceInvader2.enemies[i].speed += round * 0.3;
        }
    }
    //alle anf�nglichen Objekte erzeugen
    function createEnemies() {
        for (let i = 0; i < 10; i++) {
            let enemy = new SpaceInvader2.Enemy3();
            enemy.x = 90 + i * 37;
            enemy.y = 137;
            SpaceInvader2.enemies.push(enemy);
            SpaceInvader2.totalEnemies++;
        }
        for (let l = 0; l < 9; l++) {
            let enemy = new SpaceInvader2.Enemy2();
            enemy.x = 87 + l * 42;
            enemy.y = 174;
            SpaceInvader2.enemies.push(enemy);
            SpaceInvader2.totalEnemies++;
        }
        for (let k = 0; k < 9; k++) {
            let enemy = new SpaceInvader2.Enemy2();
            enemy.x = 88 + k * 42;
            enemy.y = 214;
            SpaceInvader2.enemies.push(enemy);
            SpaceInvader2.totalEnemies++;
        }
        for (let i = 0; i < 9; i++) {
            let enemy = new SpaceInvader2.Enemy1();
            enemy.x = 91 + i * 42;
            enemy.y = 288;
            SpaceInvader2.enemies.push(enemy);
            SpaceInvader2.totalEnemies++;
        }
        for (let j = 0; j < 9; j++) {
            let enemy = new SpaceInvader2.Enemy1();
            enemy.x = 89 + j * 42;
            enemy.y = 251;
            SpaceInvader2.enemies.push(enemy);
            SpaceInvader2.totalEnemies++;
        }
    } //createObjects zu
    //nach random Zeit einen EnemyLaser erzeugen und von einem zuf�lligen Enemy aus schie�en
    function enemyShoot() {
        let timeToNextEnemyShoot;
        timeToNextEnemyShoot = Math.random() * (4000 - 800) + 800; // Math.random() * (max - min) + min    
        window.setTimeout(enemyShoot, timeToNextEnemyShoot);
        let enemyLaser = new SpaceInvader2.EnemyLaser();
        SpaceInvader2.everyLaser.push(enemyLaser);
        let j = Math.floor(Math.random() * SpaceInvader2.enemies.length);
        let enemy = SpaceInvader2.enemies[j];
        enemyLaser.getToShootFrom(enemy);
    } //enemyShoot zu
    //nach Random Zeit ein Ufo erzeugen
    function createUfo() {
        let timeToNextUfo;
        timeToNextUfo = Math.random() * (25000 - 13000) + 13000; // Math.random() * (max - min) + min    
        window.setTimeout(createUfo, timeToNextUfo);
        let ufo = new SpaceInvader2.Ufo();
        SpaceInvader2.ufos.push(ufo);
    } //close createUfo
    function animate() {
        window.setTimeout(animate, 20); //framerate: 50 fps -> 20 ms
        SpaceInvader2.crc2.clearRect(0, 0, SpaceInvader2.crc2.canvas.width, SpaceInvader2.crc2.canvas.height);
        SpaceInvader2.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
        if (SpaceInvader2.totalEnemies == 0) {
            startNewGame();
        }
        if (SpaceInvader2.player.lives <= 0) {
            SpaceInvader2.player.lost();
        }
    } //animate zu
    //in HandleListener.js ausgel�st
    function shoot() {
        if (SpaceInvader2.player.bullets < 1) {
            let laser = new SpaceInvader2.Laser();
            SpaceInvader2.everyLaser.push(laser);
        }
    }
    SpaceInvader2.shoot = shoot; //shoot zu
    function moveObjects() {
        SpaceInvader2.player.move();
        SpaceInvader2.player.checkIfHit();
        for (let i = 0; i < SpaceInvader2.ufos.length; i++) {
            SpaceInvader2.ufos[i].move();
            SpaceInvader2.ufos[i].checkPosition();
        }
        for (let i = 0; i < SpaceInvader2.everyLaser.length; i++) {
            SpaceInvader2.everyLaser[i].move();
            SpaceInvader2.everyLaser[i].checkPosition(); //hier wird das Treffen der Gegner abgefragt, daher auch was passiert wenn etwas getroffen wird
        }
        for (let i = 0; i < SpaceInvader2.enemies.length; i++) {
            SpaceInvader2.enemies[i].move();
        }
        //if one enemy is far left or right - change direction and yPosition
        for (let i = 0; i < SpaceInvader2.enemies.length; i++) {
            if (SpaceInvader2.enemies[i].checkPositionLeftOrRight() == true) {
                for (let i = 0; i < SpaceInvader2.enemies.length; i++) {
                    SpaceInvader2.enemies[i].y += 10;
                    SpaceInvader2.enemies[i].direction *= -1;
                }
                break;
            }
        }
    } //moveObjects zu
    function drawObjects() {
        SpaceInvader2.player.draw();
        for (let i = 0; i < SpaceInvader2.ufos.length; i++) {
            SpaceInvader2.ufos[i].draw();
        }
        for (let i = 0; i < SpaceInvader2.enemies.length; i++) {
            SpaceInvader2.enemies[i].draw();
        }
        for (let i = 0; i < SpaceInvader2.everyLaser.length; i++) {
            SpaceInvader2.everyLaser[i].draw();
        }
    } //drawObjects zu
    //wird in Player.js ausgel�st
    function showLostScreen() {
        document.getElementById("game").style.display = "none";
        document.getElementById("gameOver").style.display = "initial";
        node = document.getElementsByClassName("yourScore")[0];
        writeScoreToHTML();
    }
    SpaceInvader2.showLostScreen = showLostScreen; //showLostScreen zu
    function writeScoreToHTML() {
        if (!wroteScore) {
            let content = "";
            content = "Your score: " + SpaceInvader2.score;
            node.innerHTML += content;
            wroteScore = true;
        }
    } //writeScoreToHTML zus
})(SpaceInvader2 || (SpaceInvader2 = {})); // namespace zu
//# sourceMappingURL=main.js.map