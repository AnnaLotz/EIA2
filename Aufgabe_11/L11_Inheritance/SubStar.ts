namespace L11_Inheritance {
    export class SubStar extends DavidStar {

        constructor(_color: string) {
            super(_color);
        }
        
        move(): void {
            this.x += Math.random() * 4 ;
            this.y += Math.random() * 4 ;
        }
    }
}