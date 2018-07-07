namespace SpaceInvader {

    export function drawBackground(): void {

        //Black background
        crc2.fillStyle = "black";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        
        
        crc2.fillStyle = "white";
        
        
        //Lines
        crc2.fillRect(0, 560, canvas.width, 2);
        
        //Text
        crc2.font = "21px Arial";
        crc2.fillText("SCORE: " + score, 20, 37);
        crc2.fillText("3", 21, 581);
        
        
        //Test-lines/pixels
//        crc2.fillRect(10, 10, 1, 580);
//        crc2.fillRect(20, 20, 10, 10);
//        crc2.fillRect(50, 50, 1, 1);
        
    }
}