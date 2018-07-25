namespace SpaceInvader {

    export class Laser {
        x: number;
        y: number;
        hitbox: number;

        constructor() {
            this.x = player.x - 1;
            this.y = player.y;
            player.bullets += 1;
        } //constructor zu

        checkPosition(): void {
            if (this.y <= 0) {
                this.destroyLaser();
            }

            for (let i: number = 0; i < enemies.length; i++) {
                if (this.y <= enemies[i].y + 1 && this.y >= enemies[i].y - 24) {
                    if (this.x <= enemies[i].x + enemies[i].width && this.x >= enemies[i].x - enemies[i].width) {
                                              
                        enemies[i].givePoints();
                        let index: number = i;
                        enemies.splice(index, 1);
                        totalEnemies--;
                        this.destroyLaser();
                        
//                        for (let j: number = 0; j < enemies.length; j++) {
//                            enemies[j].changeSpeed();
//                        } //fallen wieder alle komisch runter damit
                    }
                }
            }

        } //checkPosition zu




        destroyLaser(): void {
            let index: number = movingObjects.indexOf(this);
            movingObjects.splice(index, 1);
            player.bullets -= 1;


        } //destroy laser zu

        draw(): void {
            crc2.beginPath();
            crc2.strokeStyle = "rgba(0,0,0,0)";
            crc2.fillStyle = "rgb(255, 255, 255)"; //white
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 2, this.y);
            crc2.lineTo(this.x + 2, this.y - 16);
            crc2.lineTo(this.x, this.y - 16);
            crc2.lineTo(this.x, this.y);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();


        }

        move(): void {
            this.y -= 8;
        }

    } //class laser zu

} //namespace zu