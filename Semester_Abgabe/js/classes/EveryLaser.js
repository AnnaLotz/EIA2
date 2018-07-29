/*  Aufgabe: Abschlussaufgabe - Space Invaders
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var SpaceInvader;
(function (SpaceInvader) {
    class EveryLaser {
        draw() {
            //    
        }
        move() {
            //    
        }
        checkPosition() {
            //
        }
        destroyLaser() {
            let index = SpaceInvader.everyLaser.indexOf(this);
            SpaceInvader.everyLaser.splice(index, 1);
        } //destroy laser zu
    }
    SpaceInvader.EveryLaser = EveryLaser; //class MovingObjects zu
})(SpaceInvader || (SpaceInvader = {})); //namespace zu
//# sourceMappingURL=EveryLaser.js.map