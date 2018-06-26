namespace L11_Inheritance {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let stars: DavidStar[] = [];
    let n: number = 20; //habe n verkleinert, damit das gewusel auf dem Bildschirm nicht ganz so schlimm ist ;)

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        canvas.addEventListener("click", insertNewObject);

        for (let i: number = 0; i < n; i++) {
            let star: DavidStar = new DavidStar("#00ffff");
            stars.push(star);

            let rect: Rect = new Rect("#ff0000");
            stars.push(rect);
        }


        animate();
    }

    function insertNewObject(_event: MouseEvent): void {

        //Abfrage für x und y des MouseEvents
        var newX: number = _event.clientX;
        var newY: number = _event.clientY;

        var r: number = Math.floor(Math.random() * 3);

        switch (r) {
            case 0:
                let star: DavidStar = new DavidStar("#ffff00");
                star.x = newX;
                star.y = newY;
                stars.push(star);
                break;

            case 1:
                let rect: Rect = new Rect("#ff0000");
                rect.x = newX;
                rect.y = newY;
                stars.push(rect);
                break;

            case 2:
                let subStar: SubStar = new SubStar("ffff00");
                subStar.x = newX;
                subStar.y = newY;
                stars.push(subStar);
                break;
        }
    }

    function animate(): void {
        window.setTimeout(animate, 10);

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        moveObjects();
        drawObjects();
    }

    function moveObjects(): void {
        for (let i: number = 0; i < stars.length; i++) {
            stars[i].move();
        }
    }

    function drawObjects(): void {
        for (let i: number = 0; i < stars.length; i++) {
            stars[i].draw();
        }
    }
}