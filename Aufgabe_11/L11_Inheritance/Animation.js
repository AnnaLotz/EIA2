var L11_Inheritance;
(function (L11_Inheritance) {
    window.addEventListener("load", init);
    let stars = [];
    let n = 20; //habe n verkleinert, damit das gewusel auf dem Bildschirm nicht ganz so schlimm ist ;)
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        L11_Inheritance.crc2 = canvas.getContext("2d");
        console.log(L11_Inheritance.crc2);
        canvas.addEventListener("click", insertNewObject);
        for (let i = 0; i < n; i++) {
            let star = new L11_Inheritance.DavidStar("#00ffff");
            stars.push(star);
            let rect = new L11_Inheritance.Rect("#ff0000");
            stars.push(rect);
        }
        animate();
    }
    function insertNewObject(_event) {
        //Abfrage f�r x und y des MouseEvents
        let newX = _event.clientX;
        let newY = _event.clientY;
        let r = Math.floor(Math.random() * 3);
        switch (r) {
            case 0:
                let star = new L11_Inheritance.DavidStar("#ffff00");
                star.x = newX;
                star.y = newY;
                stars.push(star);
                break;
            case 1:
                let rect = new L11_Inheritance.Rect("#ff0000");
                rect.x = newX;
                rect.y = newY;
                stars.push(rect);
                break;
            case 2:
                let subStar = new L11_Inheritance.SubStar("ffff00");
                subStar.x = newX;
                subStar.y = newY;
                stars.push(subStar);
                break;
        }
    }
    function animate() {
        window.setTimeout(animate, 10);
        L11_Inheritance.crc2.clearRect(0, 0, L11_Inheritance.crc2.canvas.width, L11_Inheritance.crc2.canvas.height);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < stars.length; i++) {
            stars[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < stars.length; i++) {
            stars[i].draw();
        }
    }
})(L11_Inheritance || (L11_Inheritance = {}));
//# sourceMappingURL=Animation.js.map