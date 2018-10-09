/*  Aufgabe: Abschlussaufgabe - Space Invaders
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace SpaceInvader2 {

    export class Enemy {
        public x: number;
        public y: number;
        protected points: number;
        protected speed: number;
        public direction: number; // 1 -> to right, -1 -> to left
        public width: number;


        constructor() {
            this.speed = 0.3;
            this.direction = 1;
        }

        public checkPositionLeftOrRight(): boolean {

            //check ob enemy ganz rechts ...
            if (this.x > canvas.width - 30) {
                return true;
                //...oder ganz links
            } else if (this.x < 30) {
                return true;
            } else {
                return false;
            }
        }

        public changeSpeed(): void {
            this.speed += 0.02;
        }

        public givePoints(): void {
            score += this.points;
        }

        public move(): void {
            this.x += this.speed * this.direction;
        }

        public draw(): void {
            //
        }



    } //class enemy zu

} //namespace zu