namespace SpaceInvader {

    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let breite: number = <number>(screen.availWidth);
    let hoehe: number = <number>(window.innerHeight);

    function init(_event: Event): void {


        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        if (breite > hoehe) {
            canvas.style.setProperty("height", hoehe + "px");
        } else if (hoehe > breite) {
            canvas.style.setProperty("width", breite + "px");
        }



        crc2.fillStyle = "lightblue";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        crc2.fillStyle = "blue";
        crc2.fillRect(10, 10, 1, 236);
        crc2.fillRect(20, 20, 10, 10);

        console.log("breite: " + breite);
        console.log("hoehe: " + hoehe);






    }

    //    function animate(): void {
    //        window.setTimeout(animate, 20); //framerate: 50 fps -> 20 ms
    //        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    //        crc2.putImageData(imgData, 0, 0);
    //
    //        moveObjects();
    //        drawObjects();
    //    } //animate zu

} // namespace zu