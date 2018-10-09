/*  Aufgabe: Abschlussaufgabe - Space Invaders
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace SpaceInvader2 {

    export class Laser extends EveryLaser {

        constructor() {
            super();
            this.x = player.x - 1;
            this.y = player.y;
            player.bullets += 1;
        } //constructor zu

        public checkPosition(): void {
            if (this.y <= 0) {
                this.destroyLaser();
            }

            //alle Gegner durchgehen, ob einer den x und y Werten ( + bestimmten Radius) des Lasers entspricht. Dann Punkte vergeben, Enemy und laser zerstören
            for (let i: number = 0; i < enemies.length; i++) {
                if (this.y <= enemies[i].y + 1 && this.y >= enemies[i].y - 24) {
                    if (this.x <= enemies[i].x + enemies[i].width && this.x >= enemies[i].x - enemies[i].width) {

                        enemies[i].givePoints();
                        let index: number = i;
                        enemies.splice(index, 1);
                        totalEnemies--;
                        this.destroyLaser();

                        this.changeEnemySpeed(); //erzeugt manchmal noch gamebreaking bugs 
                    }
                }
            }
            
            //Gleiches für das Ufo durchgehen
            for (let i: number = 0; i < ufos.length; i++) {
                if (this.y <= ufos[i].y && this.y >= ufos[i].y - 21) {
                    if (this.x <= ufos[i].x + ufos[i].width && this.x >= ufos[i].x - ufos[i].width) {

                        ufos[i].givePoints();
                        let index: number = i;
                        ufos.splice(index, 1);
                        this.destroyLaser();                                                
                    }
                }
            }
        } //checkPosition zu


        changeEnemySpeed(): void {
            for (let j: number = 0; j < enemies.length; j++) {
                enemies[j].changeSpeed();
            }  
        }

        public destroyLaser(): void {
            let index: number = everyLaser.indexOf(this);
            everyLaser.splice(index, 1);
            player.bullets -= 1;
        } //destroy laser zu

        public draw(): void {
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

        public move(): void {
            this.y -= 11;
        }

    } //class laser zu

} //namespace zu