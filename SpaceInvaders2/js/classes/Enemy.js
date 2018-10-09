/*  Aufgabe: Abschlussaufgabe - Space Invaders
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var SpaceInvader2;
(function (SpaceInvader2) {
    class Enemy {
        constructor() {
            this.speed = 0.3;
            this.direction = 1;
        }
        checkPositionLeftOrRight() {
            //check ob enemy ganz rechts ...
            if (this.x > SpaceInvader2.canvas.width - 30) {
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
            this.speed += 0.02;
        }
        givePoints() {
            SpaceInvader2.score += this.points;
        }
        move() {
            this.x += this.speed * this.direction;
        }
        draw() {
            //
        }
    }
    SpaceInvader2.Enemy = Enemy; //class enemy zu
})(SpaceInvader2 || (SpaceInvader2 = {})); //namespace zu
//# sourceMappingURL=Enemy.js.map