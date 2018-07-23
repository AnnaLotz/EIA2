namespace SpaceInvader {

    export function drawBackground(): void {

        //Black background
        crc2.fillStyle = "black";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
  

        //Lines
        crc2.fillStyle = "white";
        crc2.fillRect(0, 560, canvas.width, 2);

   
    }
}