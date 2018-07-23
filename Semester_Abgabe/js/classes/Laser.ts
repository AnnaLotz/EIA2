namespace SpaceInvader {

    export class Laser {
        x: number;
        y: number;
        hitbox: number;

        constructor() {
            console.log("peng");
            this.x = player.x - 1;
            this.y = player.y;
            player.bullets += 1;
        } //constructor zu

        checkPosition(): void {
            if (this.y <= 0) {
                this.destroyLaser();
            }

            for (let i: number = 0; i < enemies.length; i++) {
                if (this.y <= enemies[i].y + 1 && this.y >= enemies[i].y - 1) {
                    if (this.x <= enemies[i].x + 12 && this.x >= enemies[i].x - 12) {                        
                        let index: number = i;
                        console.log("enemy " + index + " hit");
                        enemies.splice(index, 1);
                        enemies[i].givePoints();
                        this.destroyLaser();
                        console.log(score);
                    }
                }
            }

        } //checkPosition zu




        destroyLaser(): void {
            console.log("destroy laser");
            let index: number = movingObjects.indexOf(this);
            movingObjects.splice(index, 1);
            player.bullets -= 1;
            

        } //destroy laser zu

        draw(): void {
            crc2.strokeStyle = "white";
            crc2.fillStyle = "white";
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 2, this.y);
            crc2.lineTo(this.x + 2, this.y - 16);
            crc2.lineTo(this.x, this.y - 16);
            crc2.lineTo(this.x, this.y);
            crc2.closePath();
            crc2.fill();
        } 

        move(): void {
            this.y -= 3;
        }

    } //class laser zu

} //namespace zu