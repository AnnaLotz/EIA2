/*Aufgabe: Aufgabe 2: DynHTML - Memory
  Name: Anna Lotz
  Matrikel: 257449
  Datum: 15.04.18
  Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
  Dieser Code wurde in Zusammenarbeit mit Abreitsgruppe Gruen und unter Anleitung von Melvin Busch erstellt.
  */

//Aufbau immer so bitte! : DOM, eventListener, alle Variablen benennen, alle Funtionen

namespace Memory {

    document.addEventListener("DOMContentLoaded", main);

    // Variablen deklarieren
    let cardContent: string[] = ["Panda", "Koala", "Leopard", "Delfin", "Hase", "Adler", "Katze", "Hund", "Elefant", "Maus"];

    let cardArray: HTMLElement[] = []; //Divs für Karten
    // leeres Array, in das die letztendlich für das Spiel benötigten Karten als divs hineingespeichert werden

    let numPairs: number;
    let numPlayers: number;
    let name: string = "Spieler ";
    let score: number = 0;

    let playerInfo: HTMLElement;
    let cardField: HTMLElement;

    function createCard(textDerAufDieKarteSoll: string, _state: string): void {
        let card: HTMLElement = document.createElement("div");
        // div erzeugen
        card.innerText = textDerAufDieKarteSoll; //Funktion wird auf die Karte gegeben
        // Text aus dem Array soll auf eine Karte
        card.setAttribute("class", "card " + _state);
        // Attribut hinzufügen: class = Welches Attribut (hier eine Klasse); card = zugehöriger Wert (Hidden, taken, open)
        cardArray.push(card);
        // cardArray = Array vom Anfang; Speicher für alle erzeugten Karten; pusht die Karte hoch
    }



    // Shuffle Arrays
    function randomMix(_array: any[]): any[] {
        // _array = das Array, das durchmischt werden soll
        for (let i: number = _array.length - 1; i > 0; i--) {
            const j: number = Math.floor(Math.random() * (i + 1));
            [_array[i], _array[j]] = [_array[j], _array[i]];
        }
        return _array;
        // Ausgabe = das Array ist jetzt durchmischt
    }

    // Zufallsgenerator als eigene funktion = schöner & funktioniert besser :D
    function randomState(): string {
        let randomState: number = Math.random();
        // zufällige Zahl rein speichern, mit ganz vielen Kommastellen zwischen 0 und 1
        if (randomState <= .5) {
            // 50%ige Wahrscheinlichkeit, dass die Karte verdeckt ist
            return "hidden";
            // Status = hidden
        } else if (randomState > .5 && randomState <= .75) {
            // oder wenn: wenn Zahl größer als 0,5 und kleiner gleich 0,75 - dann Status: taken
            return "taken";
        } else if (randomState > .75) {
            // oder wenn: Wenn Zahl größer als 0,75 - dann Status: visible
            return "visible";
        }
    } 
    function createPlayer(_score: number, _name: string): void {
        //div für anzeige pro spieler
        let player: HTMLElement = document.createElement("div");
        //div für spieler
        let scoreField: HTMLElement = document.createElement("div");
        //div für Punktzahl
        let n: string = _score.toString(); //.toString wandelt number in string um
        player.innerText = _name;
        scoreField.innerText = n; //score ist die number n als string
        playerInfo.appendChild(player); //spieler in die playerinfo anhängen
        playerInfo.appendChild(scoreField); //score in die playerinfo anhängen
    }

    function main(): void {

        // Spieler soll Anzahl der Kartenpaare eingeben
        numPairs = parseInt(prompt("Bitte die Anzahl der Kartenpaare eingeben", "5 - 10 Kartenpaare"), 10);
        if (numPairs < 5 || numPairs > 10) {
            numPairs = 8;
        }

        // Spieler sollen angeben, wie viele spielen wollen
        numPlayers = parseInt(prompt("Bitte die Anzahl der Spieler eingeben", "nicht mehr als 4 Spieler"), 10);
        numPlayers > 4 ? numPlayers = 4 : numPlayers = numPlayers;

        // DOM abhängige Varaiblen deklarieren
        playerInfo = document.getElementById("player-info");
        cardField = document.getElementById("card-div");

        // Spielkarten + spielerinfo erzeugen
        for (let i: number = 0; i < numPairs; i++) {
            createCard(cardContent[i], randomState());
            // word an der Stelle i - wird als Übergabeparameter mitgegeben
            createCard(cardContent[i], randomState());
            // word an der Stelle i - wird als Übergabeparameter mitgegeben
        }
        
        //Spielerinfo erzeugen
        for (let i: number = 0; i < numPlayers; i++) {
             createPlayer(score, name + [i + 1]);
        }

        // Karten mischen
        randomMix(cardArray);

        // Karten dem Spielbrett hinzufügen
        for (let i: number = 0; i < cardArray.length; i++) {
            cardField.appendChild(cardArray[i]);
            // dem Spielbrett hinzufügen
        }

    }

}
