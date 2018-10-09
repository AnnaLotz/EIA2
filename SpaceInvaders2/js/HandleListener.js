/*  Aufgabe: Abschlussaufgabe - Space Invaders
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var SpaceInvader2;
(function (SpaceInvader2) {
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
    SpaceInvader2.createListener = createListener; //createListener zu
    function handleLeftButtonDown(_event) {
        SpaceInvader2.player.movingDirection = -1;
    }
    SpaceInvader2.handleLeftButtonDown = handleLeftButtonDown;
    function handleRightButtonDown(_event) {
        SpaceInvader2.player.movingDirection = +1;
    }
    SpaceInvader2.handleRightButtonDown = handleRightButtonDown;
    function handleButtonUp(_event) {
        SpaceInvader2.player.movingDirection = 0;
    }
    SpaceInvader2.handleButtonUp = handleButtonUp;
    function handleShootButton(_event) {
        SpaceInvader2.shoot();
    }
    SpaceInvader2.handleShootButton = handleShootButton;
    //wenn irgendeine Taste ged�ckt wird: �ber switch abfragen, welche Taste und somit jeweilige Funktion aufrufen bzw. Wert �ndern
    function handleKeyDown(_event) {
        switch (_event.keyCode) {
            case 32:
                SpaceInvader2.shoot();
                break;
            case 37: //left arrow
            case 65:
                SpaceInvader2.player.movingDirection = -1;
                break;
            case 39: //right arrow
            case 68:
                SpaceInvader2.player.movingDirection = 1;
                break;
        }
    }
    SpaceInvader2.handleKeyDown = handleKeyDown; //handleKeyDown zu
    //wenn irgendeine Taste hochgeht: die entsprechenden Tasten abfragen und die Bewegung stoppen
    function handleKeyUp(_event) {
        switch (_event.keyCode) {
            case 37: //left arrow
            case 39: //right arrow
            case 65: // key a
            case 68:
                SpaceInvader2.player.movingDirection = 0;
                break;
        }
    }
    SpaceInvader2.handleKeyUp = handleKeyUp; //handleKeyUp zu
})(SpaceInvader2 || (SpaceInvader2 = {})); //namespace zu
//# sourceMappingURL=HandleListener.js.map