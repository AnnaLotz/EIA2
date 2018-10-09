/*  Aufgabe: Abschlussaufgabe - Space Invaders
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var SpaceInvader2;
(function (SpaceInvader2) {
    function drawBackground() {
        //Black background
        SpaceInvader2.crc2.fillStyle = "black";
        SpaceInvader2.crc2.fillRect(0, 0, SpaceInvader2.canvas.width, SpaceInvader2.canvas.height);
        //Lines
        SpaceInvader2.crc2.fillStyle = "white";
        SpaceInvader2.crc2.fillRect(0, 560, SpaceInvader2.canvas.width, 2);
    }
    SpaceInvader2.drawBackground = drawBackground;
})(SpaceInvader2 || (SpaceInvader2 = {}));
//# sourceMappingURL=Background.js.map