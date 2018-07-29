/*  Aufgabe: Abschlussaufgabe - Space Invaders
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var SpaceInvader;
(function (SpaceInvader) {
    function createListener() {
        //KeyboardEvents
        window.onkeydown = handleKeyDown;
        window.onkeyup = handleKeyUp;
        //ButtonEvents
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
        SpaceInvader.player.movingDirection = -1;
    }
    SpaceInvader.handleLeftButtonDown = handleLeftButtonDown;
    function handleRightButtonDown(_event) {
        SpaceInvader.player.movingDirection = +1;
    }
    SpaceInvader.handleRightButtonDown = handleRightButtonDown;
    function handleButtonUp(_event) {
        SpaceInvader.player.movingDirection = 0;
    }
    SpaceInvader.handleButtonUp = handleButtonUp;
    function handleShootButton(_event) {
        SpaceInvader.shoot();
    }
    SpaceInvader.handleShootButton = handleShootButton;
    //wenn irgendeine Taste ged�ckt wird: �ber switch abfragen, welche Taste und somit jeweilige Funktion aufrufen bzw. Wert �ndern
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
    //wenn irgendeine Taste hochgeht: die entsprechenden Tasten abfragen und die Bewegung stoppen
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