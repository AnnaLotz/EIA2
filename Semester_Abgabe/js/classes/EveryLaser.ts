/*  Aufgabe: Abschlussaufgabe - Space Invaders
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace SpaceInvader {
    export class EveryLaser {
        public x: number;
        public y: number;
        
        public draw(): void {
            //    
        }

        public move(): void {
            //    
        }
        
        public checkPosition(): void {
            //
        }
        
        public destroyLaser(): void {
            let index: number = everyLaser.indexOf(this);
            everyLaser.splice(index, 1);
        } //destroy laser zu

    } //class MovingObjects zu
} //namespace zu