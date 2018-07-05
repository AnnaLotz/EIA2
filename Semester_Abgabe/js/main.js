var SpaceInvader;
(function (SpaceInvader) {
    window.addEventListener("load", init);
    let crc2;
    let canvas;
    let breite = (window.innerWidth);
    let hoehe = (window.innerHeight);
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        if (breite > hoehe) {
            canvas.style.setProperty("height", hoehe + "px");
        }
        else if (hoehe > breite) {
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
})(SpaceInvader || (SpaceInvader = {})); // namespace zu
//# sourceMappingURL=main.js.map