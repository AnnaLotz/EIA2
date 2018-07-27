namespace SpaceInvader {

    export class EnemyLaser extends EveryLaser {
        
        enemy: Enemy;

        constructor() {
            super();
            //
        } //constructor zu

        getToShootFrom(_enemy: Enemy): void {
            this.enemy = _enemy;
            this.x = this.enemy.x - 1;
            this.y = this.enemy.y;
        }

        checkPosition(): void {
            if (this.y >= canvas.height) {
                this.destroyLaser();
            }
            
            if (this.x <= player.x + 16 && this.x >= player.x - 16) {
                if (this.y <= player.y + 18 && this.y >= player.y + 7) {
                    player.isHit();
                    this.destroyLaser();

                }
            }


        } //checkPosition zu


        draw(): void {
            crc2.beginPath();
            crc2.strokeStyle = "rgba(0,0,0,0)";
            crc2.fillStyle = "rgb(255, 255, 255)"; //white
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 2, this.y);
            crc2.lineTo(this.x + 2, this.y + 13);
            crc2.lineTo(this.x + 5, this.y + 13);
            crc2.lineTo(this.x + 5, this.y + 16);
            crc2.lineTo(this.x - 3, this.y + 16);
            crc2.lineTo(this.x - 3, this.y + 13);
            crc2.lineTo(this.x, this.y + 13);
            crc2.lineTo(this.x, this.y);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }

        move(): void {
            this.y += 4;
        }

    } //class laser zu

} //namespace zu