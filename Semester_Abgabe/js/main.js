var SpaceInvader;
(function (SpaceInvader) {
    window.addEventListener("load", init);
    let imgData;
    let breite = (window.innerWidth);
    let hoehe = (window.innerHeight);
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
        console.log("Breite: " + breite);
        console.log("Hoehe: " + hoehe);
        createObjects();
        SpaceInvader.createListener();
        animate();
    } //init zu
    function createObjects() {
        SpaceInvader.player = new SpaceInvader.Player();
    }
    function animate() {
        window.setTimeout(animate, 20); //framerate: 50 fps -> 20 ms
        SpaceInvader.crc2.clearRect(0, 0, SpaceInvader.crc2.canvas.width, SpaceInvader.crc2.canvas.height);
        SpaceInvader.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
    } //animate zu
    function moveObjects() {
        //laser.move();
        if (SpaceInvader.player.movingDirection < 0) {
            SpaceInvader.player.moveLeft();
        }
        else if (SpaceInvader.player.movingDirection > 0) {
            SpaceInvader.player.moveRight();
        }
    }
    function drawObjects() {
        SpaceInvader.player.draw();
        //laser.draw(); 
    }
})(SpaceInvader || (SpaceInvader = {})); // namespace zu
//# sourceMappingURL=main.js.map