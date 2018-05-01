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
        addButton.addEventListener("click", add);


    } //init funktion zu

    function add(): void {
        console.log("new player");
        
        var node: any = document.getElementById("player");
        var inhalt: string = "";
       
        inhalt += "<input type='text' name='Name' placeholder='Spielername' required/>";
        
        node.innerHTML += inhalt;
    }
} //namespace zu