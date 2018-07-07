var SpaceInvader;
(function (SpaceInvader) {
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
    }
    SpaceInvader.createListener = createListener; //createListener zu
    function handleLeftButtonDown(_event) {
        console.log("left button down");
        SpaceInvader.player.movingDirection = -1;
    }
    SpaceInvader.handleLeftButtonDown = handleLeftButtonDown;
    function handleRightButtonDown(_event) {
        console.log("right button down");
        SpaceInvader.player.movingDirection = +1;
    }
    SpaceInvader.handleRightButtonDown = handleRightButtonDown;
    function handleButtonUp(_event) {
        console.log("button up");
        SpaceInvader.player.movingDirection = 0;
    }
    SpaceInvader.handleButtonUp = handleButtonUp;
    function handleShootButton(_event) {
        console.log("button shoot");
        SpaceInvader.shoot();
    }
    SpaceInvader.handleShootButton = handleShootButton;
    function handleKeyDown(_event) {
        switch (_event.keyCode) {
            case 32:
                SpaceInvader.shoot();
                break;
            case 37: //left arrow
            case 65:
                SpaceInvader.player.movingDirection = -1;
                break;
            case 39: //right arrow
            case 68:
                SpaceInvader.player.movingDirection = 1;
                break;
        }
    }
    SpaceInvader.handleKeyDown = handleKeyDown; //handleKeyDown zu
    function handleKeyUp(_event) {
        switch (_event.keyCode) {
            case 37: //left arrow
            case 39: //right arrow
            case 65: // key a
            case 68:
                SpaceInvader.player.movingDirection = 0;
                break;
        }
    }
    SpaceInvader.handleKeyUp = handleKeyUp; //handleKeyUp zu
})(SpaceInvader || (SpaceInvader = {})); //namespace zu
//# sourceMappingURL=HandleListener.js.map