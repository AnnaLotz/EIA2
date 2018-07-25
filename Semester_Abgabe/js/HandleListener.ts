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
        console.log("left button down");
        player.movingDirection = - 1;
    }

    export function handleRightButtonDown(_event: TouchEvent): void {
        console.log("right button down");
        player.movingDirection = + 1;
    }

    export function handleButtonUp(_event: TouchEvent): void {
        console.log("button up");
        player.movingDirection = 0;
    }

    export function handleShootButton(_event: TouchEvent): void {
        console.log("button shoot");
        shoot();
    }

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