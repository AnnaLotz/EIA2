/*  Aufgabe: Abschlussaufgabe - Space Invaders
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var SpaceInvader2;
(function (SpaceInvader2) {
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
            let index = SpaceInvader2.everyLaser.indexOf(this);
            SpaceInvader2.everyLaser.splice(index, 1);
        } //destroy laser zu
    }
    SpaceInvader2.EveryLaser = EveryLaser; //class MovingObjects zu
})(SpaceInvader2 || (SpaceInvader2 = {})); //namespace zu
//# sourceMappingURL=EveryLaser.js.map