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
        addButton.addEventListener("click", add);
    } //init funktion zu
    function add() {
        console.log("new player");
        var node = document.getElementById("player");
        var inhalt = "";
        inhalt += "<input type='text' name='Name' placeholder='Spielername' required/>";
        node.innerHTML += inhalt;
    }
})(Aufg4Start || (Aufg4Start = {})); //namespace zu
//# sourceMappingURL=start.js.map