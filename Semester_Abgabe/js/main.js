var SpaceInvader;
(function (SpaceInvader) {
    window.addEventListener("load", init);
    let imgData;
    let breite = (window.innerWidth);
    let hoehe = (window.innerHeight);
    SpaceInvader.movingObjects = [];
    SpaceInvader.enemies = [];
    SpaceInvader.score = 0;
    function init(_event) {
        SpaceInvader.canvas = document.getElementsByTagName("canvas")[0];
        SpaceInvader.crc2 = SpaceInvader.canvas.getContext("2d");
        SpaceInvader.drawBackground();
        imgData = SpaceInvader.crc2.getImageData(0, 0, SpaceInvader.canvas.width, SpaceInvader.canvas.height);
        if (breite > hoehe) {
            SpaceInvader.canvas.style.setProperty("height", hoehe + "px");
        }
        else if (hoehe > breite) {
            SpaceInvader.canvas.style.setProperty("width", breite + "px");
        }
        createObjects();
        SpaceInvader.createListener();
        animate();
    } //init zu
    function createObjects() {
        SpaceInvader.player = new SpaceInvader.Player();
        for (let i = 0; i < 10; i++) {
            let enemy = new SpaceInvader.Enemy1();
            enemy.x = 90 + i * 37;
            enemy.y = 318;
            SpaceInvader.enemies.push(enemy);
        }
        for (let j = 0; j < 10; j++) {
            let enemy = new SpaceInvader.Enemy2();
            enemy.x = 80 + j * 37;
            enemy.y = 281;
            SpaceInvader.enemies.push(enemy);
        }
    } //createObjects zu
    function shoot() {
        if (SpaceInvader.player.bullets < 1) {
            let laser = new SpaceInvader.Laser();
            SpaceInvader.movingObjects.push(laser);
        }
    }
    SpaceInvader.shoot = shoot; //shoot zu
    function animate() {
        window.setTimeout(animate, 20); //framerate: 50 fps -> 20 ms
        SpaceInvader.crc2.clearRect(0, 0, SpaceInvader.crc2.canvas.width, SpaceInvader.crc2.canvas.height);
        SpaceInvader.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
    } //animate zu
    function moveObjects() {
        for (let i = 0; i < SpaceInvader.movingObjects.length; i++) {
            SpaceInvader.movingObjects[i].move();
            SpaceInvader.movingObjects[i].checkPosition();
        }
        if (SpaceInvader.player.movingDirection < 0) {
            SpaceInvader.player.moveLeft();
        }
        else if (SpaceInvader.player.movingDirection > 0) {
            SpaceInvader.player.moveRight();
        }
        //if one enemy is far left or right - change direction and yPosition
        for (let i = 0; i < SpaceInvader.enemies.length; i++) {
            if (SpaceInvader.enemies[i].checkPosition() == true) {
                for (let i = 0; i < SpaceInvader.enemies.length; i++) {
                    SpaceInvader.enemies[i].y += 20;
                    SpaceInvader.enemies[i].direction *= -1;
                }
            }
        }
        for (let i = 0; i < SpaceInvader.enemies.length; i++) {
            SpaceInvader.enemies[i].move();
        }
    } //moveObjects zu
    function drawObjects() {
        SpaceInvader.player.draw();
        for (let i = 0; i < SpaceInvader.enemies.length; i++) {
            SpaceInvader.enemies[i].draw();
        }
        for (let i = 0; i < SpaceInvader.movingObjects.length; i++) {
            SpaceInvader.movingObjects[i].draw();
        }
    } //drawObjects zu
})(SpaceInvader || (SpaceInvader = {})); // namespace zu
//# sourceMappingURL=main.js.map