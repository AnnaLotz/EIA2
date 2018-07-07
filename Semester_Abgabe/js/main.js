var SpaceInvader;
(function (SpaceInvader) {
    window.addEventListener("load", init);
    let imgData;
    let breite = (window.innerWidth);
    let hoehe = (window.innerHeight);
    SpaceInvader.score = 0;
    let player;
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
        console.log("breite: " + breite);
        console.log("hoehe: " + hoehe);
        SpaceInvader.drawBackground();
        imgData = SpaceInvader.crc2.getImageData(0, 0, SpaceInvader.canvas.width, SpaceInvader.canvas.height);
        createObjects();
        createListener();
        animate();
    } //init zu
    function createListener() {
        //KeyboardEvents
        window.onkeydown = handleKeyDown;
        window.onkeyup = handleKeyUp;
        //ButtonEvents
        let leftButtonLandscape = document.getElementById("LeftButtonLandscape");
        leftButtonLandscape.addEventListener("touchstart", handleLeftButtonDown);
        leftButtonLandscape.addEventListener("touchend", handleButtonUp);
        let rightButtonLandspace = document.getElementById("RightButtonLandspace");
        rightButtonLandspace.addEventListener("touchstart", handleRightButtonDown);
        rightButtonLandspace.addEventListener("touchend", handleButtonUp);
        let shootButtonLandscape = document.getElementById("ShootButtonLandscape");
        shootButtonLandscape.addEventListener("touchstart", handleShootButton);
        let leftButtonPortrait = document.getElementById("LeftButtonPortrait");
        leftButtonPortrait.addEventListener("touchstart", handleLeftButtonDown);
        leftButtonPortrait.addEventListener("touchend", handleButtonUp);
        let rightButtonPortrait = document.getElementById("RightButtonPortrait");
        rightButtonPortrait.addEventListener("touchstart", handleRightButtonDown);
        rightButtonPortrait.addEventListener("touchend", handleButtonUp);
        let shootButtonPortrait = document.getElementById("ShootButtonPortrait");
        shootButtonPortrait.addEventListener("touchstart", handleShootButton);
    } //createListener zu
    function handleLeftButtonDown(_event) {
        console.log("left button down");
        player.movingDirection = -1;
    }
    function handleRightButtonDown(_event) {
        console.log("right button down");
        player.movingDirection = +1;
    }
    function handleButtonUp(_event) {
        console.log("button up");
        player.movingDirection = 0;
    }
    function handleShootButton(_event) {
        console.log("button shoot");
    }
    function handleKeyDown(_event) {
        switch (_event.keyCode) {
            case 32:
                player.shoot();
                break;
            case 37: //left arrow
            case 65:
                player.movingDirection = -1;
                break;
            case 39: //right arrow
            case 68:
                player.movingDirection = 1;
                break;
        }
    } //handleKeyDown zu
    function handleKeyUp(_event) {
        switch (_event.keyCode) {
            case 37: //left arrow
            case 39: //right arrow
            case 65: // key a
            case 68:
                player.movingDirection = 0;
                break;
        }
    } //handleKeyUp zu
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
        if (player.movingDirection < 0) {
            player.moveLeft();
        }
        else if (player.movingDirection > 0) {
            player.moveRight();
        }
    }
    function drawObjects() {
        player.draw();
    }
})(SpaceInvader || (SpaceInvader = {})); // namespace zu
//# sourceMappingURL=main.js.map