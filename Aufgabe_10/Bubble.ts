namespace L10_Animation {
    
    export function drawBubble(_x: number, _y: number, _r: number): void {

        crc2.fillStyle = "rgb(204, 238, 255, 0.55)";
        crc2.lineWidth = 0.5;
        crc2.beginPath();
        crc2.arc(_x, _y, _r, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }

} //namespace zu