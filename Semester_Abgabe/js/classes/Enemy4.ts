namespace SpaceInvader {

    export class Enemy4 extends Enemy {
        x: number;
        y: number;
        points: number;
        health: number;
        speed: number;
        direction: number; // 1 -> to right, -1 -> to left


        constructor() {
            super();
            
        }




        draw(): void {
            crc2.strokeStyle = "white";
            crc2.fillStyle = "white";
            crc2.moveTo(this.x, this.y);

            crc2.closePath();
            crc2.fill();
        }


    } //class enemy zu

} //namespace zu