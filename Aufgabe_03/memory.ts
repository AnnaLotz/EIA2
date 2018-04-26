/*Aufgabe: Aufgabe 3: DynHTML - Memory Events
  Name: Anna Lotz
  Matrikel: 257449
  Datum: 22.04.18
  Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
  */

//Aufbau immer so bitte! : DOM, eventListener, alle Variablen benennen, alle Funtionen

namespace Aufg3Memory {

    document.addEventListener("DOMContentLoaded", main);

    // Variablen deklarieren ***************************

    let cardContent: string[] = ["Tetris", "Pong", "Mario", "Zelda", "Minecraft", "Sims", "Portal", "SimCity", "Sonic", "Assassins Creed"];

    let cardArray: HTMLElement[] = []; //Divs f�r Karten, leeres Array, in das die letztendlich f�r das Spiel ben�tigten Karten als divs hineingespeichert werden

    // let openArray: string[] = [];     //leeres Array um sp�ter den karteninhalt vergleichen zu k�nnen
    let openCards: number = 0;      //sp�ter hochz�hlen, wie viele karten offen sind um nicht mehr als 2 karten offen zu haben
    let openArray: string[] = [];   //warum sagt de unused? wird ab Zeile 150 genutzt!

    let numPairs: number;
    let numPlayers: number;

    let name: string = "Spieler ";
    let score: number = 0;

    let playerInfo: HTMLElement;
    let cardField: HTMLElement;




    // Hauptfunktion *******************************

    function main(): void {

        numPairs = parseInt(prompt("Bitte Anzahl Kartenpaare eingeben (5 bis 10)", "7"), 10);
        if (numPairs < 5 || numPairs > 10) {
            numPairs = 8;
        } //Pop-up abfrage kartenpaare

        numPlayers = parseInt(prompt("Bitte Anzahl der Spieler eingeben (1 bis 4)", "2"), 10);
        numPlayers > 4 ? numPlayers = 4 : numPlayers = numPlayers; //Pop-up spielerzahl

        playerInfo = document.getElementById("player-info");  // DOM abh�ngige Varaiblen deklarieren
        cardField = document.getElementById("card-div");

        // Spielkarten erzeugen
        for (let i: number = 0; i < numPairs; i++) {
            createCard(cardContent[i]);
            // cardContent an der Stelle i - wird als �bergabeparameter mitgegeben
            createCard(cardContent[i]);
            // cardContent an der Stelle i - wird als �bergabeparameter mitgegeben
        }

        //Spielerinfo erzeugen
        for (let i: number = 0; i < numPlayers; i++) {
            createPlayer(score, name + [i + 1]);
        }

        // Karten mischen
        randomMix(cardArray);

        // Karten dem Spielbrett hinzuf�gen
        for (let i: number = 0; i < cardArray.length; i++) {
            cardField.appendChild(cardArray[i]);
            // dem Spielbrett hinzuf�gen
        }

        cardField.addEventListener("click", clickHandler);

    }

    // Funktionen ***************************************************

    function createPlayer(_score: number, _name: string): void {
        //div f�r anzeige pro spieler
        let player: HTMLElement = document.createElement("div");
        //div f�r spieler
        let scoreField: HTMLElement = document.createElement("div");
        //div f�r Punktzahl
        let n: string = _score.toString(); //.toString wandelt number in string um
        player.innerText = _name;
        scoreField.innerText = n; //score ist die number n als string
        playerInfo.appendChild(player); //spieler in die playerinfo anh�ngen
        playerInfo.appendChild(scoreField); //score in die playerinfo anh�ngen
    }

    function createCard(_textDerAufDieKarteSoll: string): void {
        let card: HTMLElement = document.createElement("div");
        // div erzeugen
        card.innerHTML = `<span>${_textDerAufDieKarteSoll}</span>`; //Funktion wird auf die Karte gegeben
        // Text aus dem Array soll auf eine Karte
        card.setAttribute("class", "card hidden");
        // Attribut hinzuf�gen: class = Welches Attribut (hier eine Klasse); card = zugeh�riger Wert (Hidden, taken, open)
        cardArray.push(card);
        // cardArray = Array vom Anfang; Speicher f�r alle erzeugten Karten; pusht die Karte hoch
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
        console.log("ClickHandler aktiviert");
        let cardClass: HTMLElement = <HTMLElement>_event.target;    //auf das HTML element zugreifen, dass das event ausl�st
        if (cardClass.classList.contains("card")) {          //.classList gibt die Klasse zur�ck
           
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
            console.log("2 Karten sind offen und werden verglichen");
            setTimeout(compareCards, 1300);
        }

        if (openCards > 2) {
            console.log("2 Karten sind schon offen, keine weitere �ffnen");
            cardClass.classList.remove("visible");
            cardClass.classList.add("hidden");
        }

    }

    function compareCards(): void {
        let openArray: HTMLElement[] = filterCardsByClass("visible");

        if (openArray[0].children[0].innerHTML == openArray[1].children[0].innerHTML) { //Vergleichen von Element 0 und 1 im openArray
            console.log("Die Karten sind gleich");
            for (let p: number = 0; p < openArray.length; p++) { //als Schleife damit beide Karten als taken deklariert werden
                openArray[p].classList.remove("visible");       //karten als Taken deklarieren
                openArray[p].classList.add("taken");
            }
        }
        else {
            console.log("Karten sind nicht identisch");
            for (let p: number = 0; p < openArray.length; p++) { //als Schleife damit beide Karten wieder verdeckt werden
                openArray[p].classList.remove("visible");       //karten Verdecken
                openArray[p].classList.add("hidden");
            }
        }

        let cardsTaken: HTMLElement[] = filterCardsByClass("hidden");
        if (cardsTaken.length == 0) {
            console.log("Spiel gewonnen");                                     //Pop up mit "Win" wenn alle karten Taken sind
            alert("Glueckwunsch! Du hast gewonnen.");
        }

        openArray = []; // Array leeren
        openCards = 0; //z�hler auf 0 setzen
    }


    function filterCardsByClass(_visibleFilter: string): HTMLElement[] {
        return cardArray.filter(card => card.classList.contains(_visibleFilter));
    }


} //Namespace zu