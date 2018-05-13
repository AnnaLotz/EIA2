/*Aufgabe: Aufgabe 4: FormElements and Interfaces
  Name: Anna Lotz
  Matrikel: 257449
  Datum: 06.05.18
  Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
  */
//Aufbau immer so bitte! : DOM, eventListener, alle Variablen benennen, alle Funtionen
var Aufg4Memory;
(function (Aufg4Memory) {
    window.addEventListener("DOMContentLoaded", init);
    /************* Variablen deklarieren *******************/
    let cardContent = ["Tetris", "Pong", "Mario", "Zelda", "Minecraft", "Sims", "Portal", "SimCity", "Sonic", "Assassins Creed"];
    let cardArray = []; //Divs für Karten, leeres Array, in das die letztendlich für das Spiel benötigten Karten als divs hineingespeichert werden
    let openCards = 0; //später hochzählen, wie viele karten offen sind um nicht mehr als 2 karten offen zu haben
    let score = 0; //Punktzahl
    //   let numPairs: number = 5; //sollte variabel sein durch folgende Zeile
    let numPairs = parseInt(document.getElementById("cardStepper").value); //Anzahl Kartenpaare
    let playerInfo;
    let cardField;
    let playerCounter = 1;
    let stepperAmount = 1;
    let inputs = document.getElementsByTagName("input");
    /************* Menu ******************/
    function init() {
        console.log("init");
        document.getElementById("gamefield").style.display = "none"; //spielbrett unsichtbar machen
        let addButton = document.getElementById("addPlayer");
        let removeButton = document.getElementById("removePlayer");
        let startButton = document.getElementById("startButton");
        let kartensatz = document.getElementById("kartensatz");
        addButton.addEventListener("click", addPl);
        removeButton.addEventListener("click", removePl);
        startButton.addEventListener("click", startGame);
        kartensatz.addEventListener("click", createStepper);
    } //init funktion zu
    function addPl() {
        console.log("new player");
        let node = document.createElement("input");
        node.setAttribute("type", "text");
        node.setAttribute("name", "Name");
        node.setAttribute("placeholder", "Spielername");
        document.getElementById("player").appendChild(node);
        playerCounter++;
    } //add funktion zu
    function removePl() {
        if (playerCounter > 1) {
            document.getElementById("player").remove();
            console.log("removePlayer");
            playerCounter--;
        }
    } //remove Funktion zu
    function createStepper() {
        console.log("create Stepper aktiviert");
        if (stepperAmount == 1) {
            // wenn stepperAmount 1 entspricht, dann:
            let stepper = document.createElement("input");
            // Erzeugen eines input-Elements mit den folgenden Eigenschaften:
            stepper.setAttribute("type", "number");
            stepper.setAttribute("value", "8");
            stepper.setAttribute("min", "4");
            //   stepper.setAttribute("max", decks[document.getElementById("kartensatz")].length); //hier sollte eigentlich auf die Länge des Array zugegriffen werden
            stepper.setAttribute("step", "1");
            stepper.setAttribute("id", "stepper");
            document.getElementById("cardStepper").appendChild(stepper);
            stepperAmount++;
        }
        else {
            stepperUpdate();
        }
    } //createStepper zu
    function stepperUpdate() {
        document.getElementById("stepper").remove();
        stepperAmount--;
        createStepper();
    } //stepperUpdate zu
    /************* Hauptfunktion ***************/
    function startGame() {
        document.getElementById("menu").style.display = "none"; //menu unsichtbar machen
        document.getElementById("gamefield").style.display = "initial"; //spielbrett sichtbar machen
        playerInfo = document.getElementById("player-info"); // DOM abhängige Varaiblen deklarieren
        cardField = document.getElementById("card-div");
        // Spielkarten erzeugen
        for (let i = 0; i < numPairs; i++) {
            //irgendwas funktioniert hier nicht, sollte eigentlich auf das assoziative array zugreifen:
            //createCard(decks[document.getElementById("kartensatz").item(0).value].content[i]);
            //createCard(decks[document.getElementById("kartensatz").item(0).value].content[i]);
            //deswegen, damit überhaupt karten entstehen:
            createCard(cardContent[i]);
            createCard(cardContent[i]);
        }
        //Spielerinfo erzeugen
        for (let i = 0; i < playerCounter; i++) {
            let playerDiv = document.createElement("div");
            document.getElementById("player-info").appendChild(playerDiv);
            playerDiv.innerHTML = inputs[i].value + ": " + score + " Punkte";
        }
        // Karten mischen
        randomMix(cardArray);
        // Karten dem Spielbrett hinzufügen
        for (let i = 0; i < cardArray.length; i++) {
            cardField.appendChild(cardArray[i]);
        }
        cardField.addEventListener("click", clickHandler);
    } //startGame zu
    // Funktionen *************************************************    
    function createCard(_textDerAufDieKarteSoll) {
        let card = document.createElement("div");
        // div erzeugen
        card.innerHTML = `<span>${_textDerAufDieKarteSoll}</span>`; //Funktion wird auf die Karte gegeben
        // Text aus dem Array soll auf eine Karte
        card.setAttribute("class", "card hidden");
        // Attribut hinzufügen: class = Welches Attribut (hier eine Klasse); card = zugehöriger Wert (Hidden, taken, open)
        cardArray.push(card);
        // cardArray = Array vom Anfang; Speicher für alle erzeugten Karten; pusht die Karte hoch
    } //createCard zu
    function randomMix(_array) {
        // _array = das Array, das durchmischt werden soll
        for (let i = _array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [_array[i], _array[j]] = [_array[j], _array[i]];
        }
        return _array;
        // Ausgabe = das Array ist jetzt durchmischt
    } //randomMix zu
    // Spielbarkeit *************************************************
    function clickHandler(_event) {
        //console.log("ClickHandler aktiviert");
        let cardClass = _event.target; //auf das HTML element zugreifen, dass das event auslöst
        if (cardClass.classList.contains("card")) {
            // console.log("ClickHandler - Klasse enthaelt card = true");
            if (cardClass.classList.contains("hidden")) {
                openCards++;
                //wenn Klasse hidden ist, mache das:   
                // console.log("ClickHandler - Klasse Hidden=true => Karte aufgedeckt"); 
                cardClass.classList.remove("hidden"); //remove klasse hidden
                cardClass.classList.add("visible"); //karte visible
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
    } //clickHandler zu
    function compareCards() {
        let openArray = filterCardsByClass("visible");
        if (openArray[0].children[0].innerHTML == openArray[1].children[0].innerHTML) {
            //console.log("Die Karten sind gleich");
            for (let p = 0; p < openArray.length; p++) {
                openArray[p].classList.remove("visible"); //karten als Taken deklarieren
                openArray[p].classList.add("taken");
            }
        }
        else {
            //console.log("Karten sind nicht identisch");
            for (let p = 0; p < openArray.length; p++) {
                openArray[p].classList.remove("visible"); //karten Verdecken
                openArray[p].classList.add("hidden");
            }
        }
        let cardsTaken = filterCardsByClass("hidden");
        if (cardsTaken.length == 0) {
            //console.log("Spiel gewonnen");                                     //Pop up mit "Win" wenn alle karten Taken sind
            alert("Glueckwunsch! Du hast gewonnen.");
        }
        openArray = []; // Array leeren
        openCards = 0; //zähler auf 0 setzen
    } //compareCards zu
    function filterCardsByClass(_visibleFilter) {
        return cardArray.filter(card => card.classList.contains(_visibleFilter));
    }
})(Aufg4Memory || (Aufg4Memory = {})); //Namespace zu
//# sourceMappingURL=memory.js.map