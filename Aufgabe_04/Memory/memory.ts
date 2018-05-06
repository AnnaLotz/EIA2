/*Aufgabe: Aufgabe 4: FormElements and Interfaces
  Name: Anna Lotz
  Matrikel: 257449
  Datum: 06.05.18
  Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
  */
//Aufbau immer so bitte! : DOM, eventListener, alle Variablen benennen, alle Funtionen
namespace Aufg4Memory {

    window.addEventListener("DOMContentLoaded", init);

    /************* Variablen deklarieren *******************/

    let cardContent: string[] = ["Tetris", "Pong", "Mario", "Zelda", "Minecraft", "Sims", "Portal", "SimCity", "Sonic", "Assassins Creed"];
    let cardArray: HTMLElement[] = []; //Divs für Karten, leeres Array, in das die letztendlich für das Spiel benötigten Karten als divs hineingespeichert werden
    let openCards: number = 0;      //später hochzählen, wie viele karten offen sind um nicht mehr als 2 karten offen zu haben
    let numPairs: number;     //Anzahl der kartenpaare
    let score: number = 0;          //Punktzahl
    let playerInfo: HTMLElement;
    let cardField: HTMLElement;
    let playerCounter: number = 1;
    let stepperAmount: number = 1;
    let menu: HTMLElement = <HTMLButtonElement>document.getElementById("menu");
    let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");




    /************* Menu ******************/

    function init(): void {
        console.log("init");
        document.getElementById("gamefield").style.display = "none"; //spielbrett unsichtbar machen

        let addButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("addPlayer");
        let removeButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("removePlayer");
        let startButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("startButton");
       // document.getElementById("stepperinfo").addEventListener("change", createStepper);
        addButton.addEventListener("click", addPl);
        removeButton.addEventListener("click", removePl);
        startButton.addEventListener("click", startGame);
    } //init funktion zu

    function addPl(): void {
        console.log("new player");

        let node: HTMLElement = document.createElement("input");
        node.setAttribute("type", "text");
        node.setAttribute("name", "Name");
        node.setAttribute("placeholder", "Spielername");
        document.getElementById("player").appendChild(node);

        playerCounter++;
    } //add funktion zu

    function removePl(): void {
        if (playerCounter > 1) {
            document.getElementById("player").remove();
            console.log("removePlayer");
            playerCounter--;
        }

    }

    /* function createStepper(): void {
        if (stepperAmount == 1) {
            // wenn stepperAmount 1 entspricht, dann:
            let stepper: HTMLElement = document.createElement("input");
            // Erzeugen eines input-Elements mit den folgenden Eigenschaften:
            stepper.setAttribute("type", "number");
            stepper.setAttribute("value", "8");
            stepper.setAttribute("min", "4");
            stepper.setAttribute("max", decks[document.getElementsByTagName("select")].length);
            // die maximale mögliche Anzahl an Karten (unterschiedlich je Kartendeck) wird eingefügt
            stepper.setAttribute("step", "1");
            stepper.setAttribute("id", "stepper");
            document.getElementById("stepperbox").appendChild(stepper);
            stepperAmount++;
            // stepperAmount wird hochgezählt
        }
//    } */

    /************* Hauptfunktion ***************/

    function startGame(): void {

        document.getElementById("menu").style.display = "none"; //menu unsichtbar machen
        document.getElementById("gamefield").style.display = "initial"; //spielbrett sichtbar machen

        playerInfo = document.getElementById("player-info");  // DOM abhängige Varaiblen deklarieren
        cardField = document.getElementById("card-div");

        numPairs = 7;

        // Spielkarten erzeugen
        for (let i: number = 0; i < numPairs; i++) {
            //irgendwas funktioniert hier nicht:
            //createCard(decks[document.getElementById("kartensatz").item(0).value].content[i]);
            //createCard(decks[document.getElementById("kartensatz").item(0).value].content[i]);
            createCard(cardContent[i]);
            createCard(cardContent[i]);
        }

        //Spielerinfo erzeugen

        for (let i: number = 0; i < playerCounter; i++) {
            let playerDiv: HTMLDivElement = document.createElement("div");
            document.getElementById("player-info").appendChild(playerDiv);
            playerDiv.innerHTML = inputs[i].value + ": " + score + " Punkte";
        }

        // Karten mischen
        randomMix(cardArray);

        // Karten dem Spielbrett hinzufügen
        for (let i: number = 0; i < cardArray.length; i++) {
            cardField.appendChild(cardArray[i]);
            // dem Spielbrett hinzufügen
        }

        cardField.addEventListener("click", clickHandler);

    }

    // Funktionen *************************************************    

    function createCard(_textDerAufDieKarteSoll: string): void {
        let card: HTMLElement = document.createElement("div");
        // div erzeugen
        card.innerHTML = `<span>${_textDerAufDieKarteSoll}</span>`; //Funktion wird auf die Karte gegeben
        // Text aus dem Array soll auf eine Karte
        card.setAttribute("class", "card hidden");
        // Attribut hinzufügen: class = Welches Attribut (hier eine Klasse); card = zugehöriger Wert (Hidden, taken, open)
        cardArray.push(card);
        // cardArray = Array vom Anfang; Speicher für alle erzeugten Karten; pusht die Karte hoch
    }


    function randomMix(_array: any[]): any[] {
        // _array = das Array, das durchmischt werden soll
        for (let i: number = _array.length - 1; i > 0; i--) {
            const j: number = Math.floor(Math.random() * (i + 1));
            [_array[i], _array[j]] = [_array[j], _array[i]];
        }
        return _array;
        // Ausgabe = das Array ist jetzt durchmischt
    }

    // Spielbarkeit *************************************************
    function clickHandler(_event: MouseEvent): void {
        //console.log("ClickHandler aktiviert");
        let cardClass: HTMLElement = <HTMLElement>_event.target;    //auf das HTML element zugreifen, dass das event auslöst
        if (cardClass.classList.contains("card")) {          //.classList gibt die Klasse zurück

            // console.log("ClickHandler - Klasse enthaelt card = true");
            if (cardClass.classList.contains("hidden")) {
                openCards++;
                //wenn Klasse hidden ist, mache das:   
                // console.log("ClickHandler - Klasse Hidden=true => Karte aufgedeckt"); 
                cardClass.classList.remove("hidden"); //remove klasse hidden
                cardClass.classList.add("visible");     //karte visible
                // console.log(cardClass.classList);
            }

        }
        if (openCards == 2) {
            //console.log("2 Karten sind offen und werden verglichen");
            setTimeout(compareCards, 1300);
        }

        if (openCards > 2) {
            //console.log("2 Karten sind schon offen, keine weitere öffnen");
            cardClass.classList.remove("visible");
            cardClass.classList.add("hidden");
        }

    }

    function compareCards(): void {
        let openArray: HTMLElement[] = filterCardsByClass("visible");

        if (openArray[0].children[0].innerHTML == openArray[1].children[0].innerHTML) { //Vergleichen von Element 0 und 1 im openArray
            //console.log("Die Karten sind gleich");
            for (let p: number = 0; p < openArray.length; p++) { //als Schleife damit beide Karten als taken deklariert werden
                openArray[p].classList.remove("visible");       //karten als Taken deklarieren
                openArray[p].classList.add("taken");
            }
        }
        else {
            //console.log("Karten sind nicht identisch");
            for (let p: number = 0; p < openArray.length; p++) { //als Schleife damit beide Karten wieder verdeckt werden
                openArray[p].classList.remove("visible");       //karten Verdecken
                openArray[p].classList.add("hidden");
            }
        }

        let cardsTaken: HTMLElement[] = filterCardsByClass("hidden");
        if (cardsTaken.length == 0) {
            //console.log("Spiel gewonnen");                                     //Pop up mit "Win" wenn alle karten Taken sind
            alert("Glueckwunsch! Du hast gewonnen.");
        }

        openArray = []; // Array leeren
        openCards = 0; //zähler auf 0 setzen
    }


    function filterCardsByClass(_visibleFilter: string): HTMLElement[] {
        return cardArray.filter(card => card.classList.contains(_visibleFilter));
    }


} //Namespace zu
