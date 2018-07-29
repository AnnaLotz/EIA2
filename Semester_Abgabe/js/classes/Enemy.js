/*  Aufgabe: Abschlussaufgabe - Space Invaders
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var SpaceInvader;
(function (SpaceInvader) {
    class Enemy {
        constructor() {
            this.speed = 0.4;
            this.direction = 1;
        }
        checkPositionLeftOrRight() {
            //check ob enemy ganz rechts ...
            if (this.x > SpaceInvader.canvas.width - 30) {
                return true;
            }
            else if (this.x < 30) {
                return true;
            }
            else {
                return false;
            }
        }
        changeSpeed() {
            this.speed += 0.1;
        }
        givePoints() {
            SpaceInvader.score += this.points;
        }
        move() {
            this.x += this.speed * this.direction;
        }
        draw() {
            //
        }
    }
    SpaceInvader.Enemy = Enemy; //class enemy zu
})(SpaceInvader || (SpaceInvader = {})); //namespace zu
//# sourceMappingURL=Enemy.js.map