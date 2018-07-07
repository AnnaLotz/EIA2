namespace SpaceInvader {

    export class Laser {
        x: number;
        y: number;
        
        constructor() {
            console.log("new Laser");
        }
        
        draw(): void {
            crc2.strokeStyle = "white";
            crc2.fillStyle = "white";
            crc2.fillRect(this.x, this.y, this.x + 2, this.y - 12);
                
        }
        
        move(): void {
            this.y -= 3;    
        }
        
    } //class laser zu

} //namespace zu