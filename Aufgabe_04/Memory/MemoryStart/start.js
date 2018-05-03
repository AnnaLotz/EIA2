/*Aufgabe: Aufgabe 4: FormElements and Interfaces
  Name: Anna Lotz
  Matrikel: 257449
  Datum: 01.05.18
  Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
  */
var Aufg4Start;
(function (Aufg4Start) {
    window.addEventListener("DOMContentLoaded", init);
    function init() {
        console.log("init");
        let addButton = document.getElementById("addPlayer");
        let removeButton = document.getElementById("removePlayer");
        let startButton = document.getElementById("startGame");
        addButton.addEventListener("click", addPl);
        removeButton.addEventListener("click", removePl);
    } //init funktion zu
    function addPl() {
        console.log("new player");
        let node = document.getElementById("player");
        let inhalt = "";
        inhalt += "<input type='text' name='Name' placeholder='Spielername' required/>";
        inhalt += "<button type='button' id='addPlayer'>+</button>";
        inhalt += "<button type='button' id='removePlayer'>-</button>";
        node.innerHTML += inhalt;
    } //add funktion zu
    function removePl() {
        console.log("removePlayer");
    } //removePl Funktion zu
})(Aufg4Start || (Aufg4Start = {})); //namespace zu
//# sourceMappingURL=start.js.map