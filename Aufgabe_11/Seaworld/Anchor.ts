/*  Aufgabe: Aufgabe 11 : Inheritance: Seaworld
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 26.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace L11_SeaworldInheritance {
    export class Anchor extends MovingObjects {
        status: string;

        constructor() {
            super();
            this.setPosition();
        }

        setPosition(): void {
            this.x = 590;
            //anchor.y = -10;
            this.y = 644;
        }

        draw(): void {
            crc2.beginPath();
            crc2.lineWidth = 6.5;
            crc2.strokeStyle = "rgb(38, 38, 38)";
            crc2.moveTo(this.x, this.y); //A
            crc2.lineTo(this.x + 10, this.y - 90); //D
            crc2.arc(this.x + 12, this.y - 107, 15, 1.5, 15 * Math.PI);
            crc2.moveTo(this.x - 5, this.y - 72); //F
            crc2.lineTo(this.x + 20, this.y - 68); //E
            crc2.moveTo(this.x - 40, this.y - 45); //C
            crc2.quadraticCurveTo(this.x - 38, this.y - 5, this.x, this.y);
            crc2.quadraticCurveTo(this.x + 35, this.y + 5, this.x + 48, this.y - 33);
            crc2.stroke();
            crc2.closePath();

            crc2.lineWidth = 4.5;
            for (let i: number = 0; i < 30; i++) {
                crc2.beginPath();
                crc2.arc(this.x + 12, this.y - 128 - i * 20, 12, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.stroke();
            }
        }

        moveDown(): void {
            this.y += 1;
        }

        moveUp(): void {
            this.y -= 1;
        }


        //Anker     
        /* kommt später verbessert rein
                moveAnchor();
        
                function moveAnchor(): void {
        
                    if (anchor.y <= -10) {
                        //sobald du bei -10 bist sollst du nur noch sinken
                        sink = true;
                    } else if (anchor.y >= 644) {
                        //sobald du bei 644 bist sollst du nur noch steigen
                        sink = false;
                    }
        
                    if (sink == true) {
                        //wenn du sinken sollst, warte 3 sekunden und lasse dann sinken
                        window.setTimeout(sinkAnchor(), 3000);
                    } else {
                        //wenn du steigen sollst, dann warte 5 sekunden und pulle dann
                        window.setTimeout(pullAnchor(), 5000);
                    }
        
                } //moveAnchorAndChain zu
        
                function sinkAnchor(): void {
                    anchor.moveDown();
                }
        
                function pullAnchor(): void {
                    anchor.moveUp();
                }
        */




    } //class Anchor zu
} //namespace zu