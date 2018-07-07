var SpaceInvader;
(function (SpaceInvader) {
    window.addEventListener("load", init);
    window.onkeydown = checkKey;
    let imgData;
    let breite = (window.innerWidth);
    let hoehe = (window.innerHeight);
    SpaceInvader.score = 0;
    let player;
    function checkKey(_event) {
        if (_event.key == "ArrowLeft") {
            player.moveLeft();
        }
        else if (_event.key == "ArrowRight") {
            player.moveRight();
        }
    } //checkKey zu
    function init(_event) {
        SpaceInvader.canvas = document.getElementsByTagName("canvas")[0];
        SpaceInvader.crc2 = SpaceInvader.canvas.getContext("2d");
        console.log(SpaceInvader.crc2);
        if (breite > hoehe) {
            SpaceInvader.canvas.style.setProperty("height", hoehe + "px");
        }
        else if (hoehe > breite) {
            SpaceInvader.canvas.style.setProperty("width", breite + "px");
        }
        SpaceInvader.drawBackground();
        imgData = SpaceInvader.crc2.getImageData(0, 0, SpaceInvader.canvas.width, SpaceInvader.canvas.height);
        console.log("breite: " + breite);
        console.log("hoehe: " + hoehe);
        createObjects();
        animate();
    } //init zu
    function createObjects() {
        player = new SpaceInvader.Player();
    }
    function animate() {
        window.setTimeout(animate, 20); //framerate: 50 fps -> 20 ms
        SpaceInvader.crc2.clearRect(0, 0, SpaceInvader.crc2.canvas.width, SpaceInvader.crc2.canvas.height);
        SpaceInvader.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
    } //animate zu
    function moveObjects() {
        //
    }
    function drawObjects() {
        player.draw();
    }
})(SpaceInvader || (SpaceInvader = {})); // namespace zu
//# sourceMappingURL=main.js.map