namespace SpaceInvader {
    export class EveryLaser {
        x: number;
        y: number;
        
        draw(): void {
            //    
        }

        move(): void {
            //    
        }
        
        checkPosition(): void {
            //
        }
        
        destroyLaser(): void {
            let index: number = everyLaser.indexOf(this);
            everyLaser.splice(index, 1);
        } //destroy laser zu

    } //class MovingObjects zu
} //namespace zu