var SpaceInvader;
(function (SpaceInvader) {
    window.addEventListener("load", init);
    window.addEventListener("click", shoot);
    let node;
    let startButton;
    let imgData;
    let breite = (window.innerWidth);
    let hoehe = (window.innerHeight);
    SpaceInvader.movingObjects = [];
    SpaceInvader.enemies = [];
    SpaceInvader.ufos = [];
    SpaceInvader.score = 0;
    SpaceInvader.totalEnemies = 0;
    let wroteScore = false;
    //    function init(_event: Event): void {
    //        //init zum testen von game over and won screen
    //
    //        document.getElementById("startMenue").style.display = "none";
    //        document.getElementById("game").style.display = "none";
    //        document.getElementById("gameOver").style.display = "none";
    //        document.getElementById("win").style.display = "initial";
    //
    //
    //    } //init zu
    function init(_event) {
        document.getElementById("game").style.display = "none";
        document.getElementById("gameOver").style.display = "none";
        document.getElementById("win").style.display = "none";
        startButton = document.getElementById("startButton");
        startButton.addEventListener("click", startGame);
    } //init zu
    function startGame() {
        document.getElementById("startMenue").style.display = "none"; //menu unsichtbar machen
        document.getElementById("game").style.display = "initial"; //gamefield sichtbar machen
        SpaceInvader.canvas = document.getElementsByTagName("canvas")[0];
        SpaceInvader.crc2 = SpaceInvader.canvas.getContext("2d");
        if (breite > hoehe) {
            SpaceInvader.canvas.style.setProperty("height", hoehe + "px");
        }
        else if (hoehe > breite) {
            SpaceInvader.canvas.style.setProperty("width", breite + "px");
        }
        SpaceInvader.drawBackground();
        imgData = SpaceInvader.crc2.getImageData(0, 0, SpaceInvader.canvas.width, SpaceInvader.canvas.height);
        SpaceInvader.createListener();
        createObjects();
        window.setTimeout(createUfo, 6000);
        window.setTimeout(enemyShoot, 1000);
        animate();
    } //startGame zu
    function showWinScreen() {
        document.getElementById("game").style.display = "none";
        document.getElementById("win").style.display = "initial";
        node = document.getElementsByClassName("yourScore")[1];
        writeScoreToHTML();
    }
    SpaceInvader.showWinScreen = showWinScreen; //showWinScreen zu
    function showLostScreen() {
        document.getElementById("game").style.display = "none";
        document.getElementById("gameOver").style.display = "initial";
        node = document.getElementsByClassName("yourScore")[0];
        writeScoreToHTML();
    }
    SpaceInvader.showLostScreen = showLostScreen; //showLostScreen zu
    function writeScoreToHTML() {
        if (!wroteScore) {
            let content = "";
            content = "Your score: " + SpaceInvader.score;
            node.innerHTML += content;
            wroteScore = true;
        }
    } //writeScoreToHTML zu
    function createObjects() {
        SpaceInvader.player = new SpaceInvader.Player();
        for (let i = 0; i < 10; i++) {
            let enemy = new SpaceInvader.Enemy3();
            enemy.x = 90 + i * 37;
            enemy.y = 137;
            SpaceInvader.enemies.push(enemy);
            SpaceInvader.totalEnemies++;
        }
        for (let l = 0; l < 9; l++) {
            let enemy = new SpaceInvader.Enemy2();
            enemy.x = 87 + l * 42;
            enemy.y = 174;
            SpaceInvader.enemies.push(enemy);
            SpaceInvader.totalEnemies++;
        }
        for (let k = 0; k < 9; k++) {
            let enemy = new SpaceInvader.Enemy2();
            enemy.x = 88 + k * 42;
            enemy.y = 214;
            SpaceInvader.enemies.push(enemy);
            SpaceInvader.totalEnemies++;
        }
        for (let i = 0; i < 9; i++) {
            let enemy = new SpaceInvader.Enemy1();
            enemy.x = 91 + i * 42;
            enemy.y = 288;
            SpaceInvader.enemies.push(enemy);
            SpaceInvader.totalEnemies++;
        }
        for (let j = 0; j < 9; j++) {
            let enemy = new SpaceInvader.Enemy1();
            enemy.x = 89 + j * 42;
            enemy.y = 251;
            SpaceInvader.enemies.push(enemy);
            SpaceInvader.totalEnemies++;
        }
    } //createObjects zu
    function enemyShoot() {
        let timeToNextEnemyShoot;
        //timeToNextEnemyShoot = Math.random() * (500 - 100) + 100;
        timeToNextEnemyShoot = Math.random() * (5000 - 1000) + 1000; // Math.random() * (max - min) + min    
        window.setTimeout(enemyShoot, timeToNextEnemyShoot);
        let enemyLaser = new SpaceInvader.EnemyLaser();
        SpaceInvader.movingObjects.push(enemyLaser);
        let j = Math.floor(Math.random() * SpaceInvader.enemies.length);
        let enemy = SpaceInvader.enemies[j];
        enemyLaser.getToShootFrom(enemy);
    } //enemyShoot zu
    function createUfo() {
        let timeToNextUfo;
        timeToNextUfo = Math.random() * (15000 - 10000) + 10000; // Math.random() * (max - min) + min    
        window.setTimeout(createUfo, timeToNextUfo);
        let ufo = new SpaceInvader.Ufo();
        SpaceInvader.ufos.push(ufo);
    } //close createUfo
    function animate() {
        window.setTimeout(animate, 20); //framerate: 50 fps -> 20 ms
        SpaceInvader.crc2.clearRect(0, 0, SpaceInvader.crc2.canvas.width, SpaceInvader.crc2.canvas.height);
        SpaceInvader.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
        if (SpaceInvader.totalEnemies == 0) {
            SpaceInvader.player.won();
        }
        if (SpaceInvader.player.lives <= 0) {
            SpaceInvader.player.lost();
        }
    } //animate zu
    function shoot() {
        if (SpaceInvader.player.bullets < 1) {
            let laser = new SpaceInvader.Laser();
            SpaceInvader.movingObjects.push(laser);
        }
    }
    SpaceInvader.shoot = shoot; //shoot zu
    function moveObjects() {
        SpaceInvader.player.move();
        SpaceInvader.player.checkIfHit();
        for (let i = 0; i < SpaceInvader.ufos.length; i++) {
            SpaceInvader.ufos[i].move();
            SpaceInvader.ufos[i].checkPosition();
        }
        for (let i = 0; i < SpaceInvader.movingObjects.length; i++) {
            SpaceInvader.movingObjects[i].move();
            SpaceInvader.movingObjects[i].checkPosition();
        }
        for (let i = 0; i < SpaceInvader.enemies.length; i++) {
            SpaceInvader.enemies[i].move();
        }
        //if one enemy is far left or right - change direction and yPosition
        for (let i = 0; i < SpaceInvader.enemies.length; i++) {
            if (SpaceInvader.enemies[i].checkPositionLeftOrRight() == true) {
                for (let i = 0; i < SpaceInvader.enemies.length; i++) {
                    SpaceInvader.enemies[i].y += 10;
                    SpaceInvader.enemies[i].direction *= -1;
                }
            }
        }
    } //moveObjects zu
    function drawObjects() {
        SpaceInvader.player.draw();
        for (let i = 0; i < SpaceInvader.ufos.length; i++) {
            SpaceInvader.ufos[i].draw();
        }
        for (let i = 0; i < SpaceInvader.enemies.length; i++) {
            SpaceInvader.enemies[i].draw();
        }
        for (let i = 0; i < SpaceInvader.movingObjects.length; i++) {
            SpaceInvader.movingObjects[i].draw();
        }
    } //drawObjects zu
})(SpaceInvader || (SpaceInvader = {})); // namespace zu
//# sourceMappingURL=main.js.map