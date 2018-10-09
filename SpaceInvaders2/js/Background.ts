/*  Aufgabe: Abschlussaufgabe - Space Invaders
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace SpaceInvader2 {

    export function drawBackground(): void {

        //Black background
        crc2.fillStyle = "black";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
  

        //Lines
        crc2.fillStyle = "white";
        crc2.fillRect(0, 560, canvas.width, 2);
   
    }
}