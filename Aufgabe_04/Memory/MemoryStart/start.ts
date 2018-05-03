/*Aufgabe: Aufgabe 4: FormElements and Interfaces
  Name: Anna Lotz
  Matrikel: 257449
  Datum: 01.05.18
  Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
  */
namespace Aufg4Start {
    window.addEventListener("DOMContentLoaded", init);

    function init(): void {
        console.log("init");
        let addButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("addPlayer");
        let removeButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("removePlayer");
        let startButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("startButton");
        addButton.addEventListener("click", addPl);
        removeButton.addEventListener("click", removePl);
        startButton.addEventListener("click", startGame);


    } //init funktion zu

    function addPl(): void {
        console.log("new player");
        
        let node: any = document.getElementById("player");
        let inhalt: string = "";
       
        inhalt += "<input type='text' name='Name' placeholder='Spielername' required/>";
        inhalt += "<button type='button' id='addPlayer'>+</button>";
        inhalt += "<button type='button' id='removePlayer'>-</button>";
        node.innerHTML += inhalt;
    } //add funktion zu
    
    function removePl(): void {
        console.log("removePlayer");
        
    } //removePl Funktion zu
    
} //namespace zu