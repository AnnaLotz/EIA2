/*Aufgabe: Aufgabe 2: DynHTML - Memory
  Name: Anna Lotz
  Matrikel: 257449
  Datum: 15.04.18
  Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
  Dieser Code wurde in Zusammenarbeit mit Abreitsgruppe Gruen und unter Anleitung von Melvin Busch erstellt.
  */
//Aufbau immer so bitte! : DOM, eventListener, alle Variablen benennen, alle Funtionen
var Memory;
(function (Memory) {
    document.addEventListener("DOMContentLoaded", main);
    // Variablen deklarieren
    let cardContent = ["Panda", "Koala", "Leopard", "Delfin", "Hase", "Adler", "Katze", "Hund", "Elefant", "Maus"];
    let cardArray = []; //Divs f�r Karten
    // leeres Array, in das die letztendlich f�r das Spiel ben�tigten Karten als divs hineingespeichert werden
    let numPairs;
    let numPlayers;
    let name = "Spieler ";
    let score = 0;
    let playerInfo;
    let cardField;
    function createCard(textDerAufDieKarteSoll, _state) {
        let card = document.createElement("div");
        // div erzeugen
        card.innerText = textDerAufDieKarteSoll; //Funktion wird auf die Karte gegeben
        // Text aus dem Array soll auf eine Karte
        card.setAttribute("class", "card " + _state);
        // Attribut hinzuf�gen: class = Welches Attribut (hier eine Klasse); card = zugeh�riger Wert (Hidden, taken, open)
        cardArray.push(card);
        // cardArray = Array vom Anfang; Speicher f�r alle erzeugten Karten; pusht die Karte hoch
    }
    // Shuffle Arrays
    function randomMix(_array) {
        // _array = das Array, das durchmischt werden soll
        for (let i = _array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [_array[i], _array[j]] = [_array[j], _array[i]];
        }
        return _array;
        // Ausgabe = das Array ist jetzt durchmischt
    }
    // Zufallsgenerator als eigene funktion = sch�ner & funktioniert besser :D
    function randomState() {
        let randomState = Math.random();
        // zuf�llige Zahl rein speichern, mit ganz vielen Kommastellen zwischen 0 und 1
        if (randomState <= .5) {
            // 50%ige Wahrscheinlichkeit, dass die Karte verdeckt ist
            return "hidden";
        }
        else if (randomState > .5 && randomState <= .75) {
            // oder wenn: wenn Zahl gr��er als 0,5 und kleiner gleich 0,75 - dann Status: taken
            return "taken";
        }
        else if (randomState > .75) {
            // oder wenn: Wenn Zahl gr��er als 0,75 - dann Status: visible
            return "visible";
        }
    }
    function createPlayer(_score, _name) {
        //div f�r anzeige pro spieler
        let player = document.createElement("div");
        //div f�r spieler
        let scoreField = document.createElement("div");
        //div f�r Punktzahl
        let n = _score.toString(); //.toString wandelt number in string um
        player.innerText = _name;
        scoreField.innerText = n; //score ist die number n als string
        playerInfo.appendChild(player); //spieler in die playerinfo anh�ngen
        playerInfo.appendChild(scoreField); //score in die playerinfo anh�ngen
    }
    function main() {
        // Spieler soll Anzahl der Kartenpaare eingeben
        numPairs = parseInt(prompt("Bitte die Anzahl der Kartenpaare eingeben", "5 - 10 Kartenpaare"), 10);
        if (numPairs < 5 || numPairs > 10) {
            numPairs = 8;
        }
        // Spieler sollen angeben, wie viele spielen wollen
        numPlayers = parseInt(prompt("Bitte die Anzahl der Spieler eingeben", "nicht mehr als 4 Spieler"), 10);
        numPlayers > 4 ? numPlayers = 4 : numPlayers = numPlayers;
        // DOM abh�ngige Varaiblen deklarieren
        playerInfo = document.getElementById("player-info");
        cardField = document.getElementById("card-div");
        // Spielkarten + spielerinfo erzeugen
        for (let i = 0; i < numPairs; i++) {
            createCard(cardContent[i], randomState());
            // word an der Stelle i - wird als �bergabeparameter mitgegeben
            createCard(cardContent[i], randomState());
        }
        //Spielerinfo erzeugen
        for (let i = 0; i < numPlayers; i++) {
            createPlayer(score, name + [i + 1]);
        }
        // Karten mischen
        randomMix(cardArray);
        // Karten dem Spielbrett hinzuf�gen
        for (let i = 0; i < cardArray.length; i++) {
            cardField.appendChild(cardArray[i]);
        }
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=memory.js.map