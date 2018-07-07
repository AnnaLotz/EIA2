namespace SpaceInvader {

    export class Laser {
        x: number;
        y: number;

        constructor() {
            this.x = player.x;
            this.y = player.y;
        }

        checkPosition(): void {       
            if (this.y <= 0) {
                this.destroyLaser();
            }
        }


        destroyLaser(): void {
            //console.log("destroy laser");

//                let index: number = movingObjects.indexOf(bullets);
//                //let index: number = movingObjects.length;
//                //let index: number = <number>movingObjects[10];
//                console.log(index);
//                movingObjects.splice(index, 1);
//                bullets = 0;
            
        }

        draw(): void {
            crc2.strokeStyle = "white";
            crc2.fillStyle = "white";
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 2, this.y);
            crc2.lineTo(this.x + 2, this.y - 12);
            crc2.lineTo(this.x, this.y - 12);
            crc2.lineTo(this.x, this.y);
            crc2.closePath();
            crc2.fill();
        }

        move(): void {
            this.y -= 3;
        }

    } //class laser zu

} //namespace zu