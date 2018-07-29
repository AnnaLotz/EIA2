/*  Aufgabe: Abschlussaufgabe - Space Invaders
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace SpaceInvader {

    export function createListener(): void {

        //KeyboardEvents
        window.onkeydown = handleKeyDown;
        window.onkeyup = handleKeyUp;

        //ButtonEvents
        let leftButtonPortrait: HTMLButtonElement = <HTMLButtonElement>document.getElementById("LeftButtonPortrait");
        leftButtonPortrait.addEventListener("touchstart", handleLeftButtonDown);
        leftButtonPortrait.addEventListener("touchend", handleButtonUp);

        let rightButtonPortrait: HTMLButtonElement = <HTMLButtonElement>document.getElementById("RightButtonPortrait");
        rightButtonPortrait.addEventListener("touchstart", handleRightButtonDown);
        rightButtonPortrait.addEventListener("touchend", handleButtonUp);

        let shootButtonPortrait: HTMLButtonElement = <HTMLButtonElement>document.getElementById("ShootButtonPortrait");
        shootButtonPortrait.addEventListener("touchstart", handleShootButton);
        
    } //createListener zu

    export function handleLeftButtonDown(_event: TouchEvent): void {
        player.movingDirection = - 1;
    }

    export function handleRightButtonDown(_event: TouchEvent): void {
        player.movingDirection = + 1;
    }

    export function handleButtonUp(_event: TouchEvent): void {
        player.movingDirection = 0;
    }

    export function handleShootButton(_event: TouchEvent): void {
        shoot();
    }

    //wenn irgendeine Taste gedückt wird: über switch abfragen, welche Taste und somit jeweilige Funktion aufrufen bzw. Wert ändern
    export function handleKeyDown(_event: KeyboardEvent): void {

        switch (_event.keyCode) {

            case 32:
                shoot();
                break;
            case 37: //left arrow
            case 65: // key a
                player.movingDirection = - 1;
                break;
            case 39: //right arrow
            case 68: //key d
                player.movingDirection = 1;
                break;
        }
    } //handleKeyDown zu
    
    //wenn irgendeine Taste hochgeht: die entsprechenden Tasten abfragen und die Bewegung stoppen
    export function handleKeyUp(_event: KeyboardEvent): void {

        switch (_event.keyCode) {
            case 37: //left arrow
            case 39: //right arrow
            case 65: // key a
            case 68: //key d
                player.movingDirection = 0;
                break;
        }
    } //handleKeyUp zu

} //namespace zu