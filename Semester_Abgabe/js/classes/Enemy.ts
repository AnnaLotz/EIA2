namespace SpaceInvader {

    export class Enemy {
        x: number;
        y: number;
        points: number;
        health: number;
        speed: number;
        direction: number; // 1 -> to right, -1 -> to left


        constructor() {
            this.health = 1;
            this.speed = 1;
            this.direction = 1;
        }

        checkPosition(): boolean {
            //ob enemy ganz rechts ...
            if (this.x > canvas.width - 30) {
                return true;
            //...oder ganz links
            } else if (this.x < 30) {
                return true;
            } else {
                return false;
            }


        }
        
        givePoints(): void {
            score += this.points;
        }

        move(): void {
            this.x += this.speed * this.direction;            
        }


        draw(): void {
            //
        }



    } //class enemy zu

} //namespace zu