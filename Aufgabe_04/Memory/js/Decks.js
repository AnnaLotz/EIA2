/*Aufgabe: Aufgabe 4: FormElements and Interfaces
  Name: Anna Lotz
  Matrikel: 257449
  Datum: 16.05.18
  Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
  */
var Aufg4MemoryBackup;
(function (Aufg4MemoryBackup) {
    //assoziatives Array zur speicherung 
    Aufg4MemoryBackup.decks = {};
    Aufg4MemoryBackup.decks["games"] = {
        name: "Videospiele",
        content: ["Tetris", "Pong", "Mario", "Zelda", "Minecraft", "Sims", "Portal", "SimCity", "Sonic", "Assassins Creed"],
        decklength: "10",
        color: "blue",
        font: "arial",
        size: 10
    };
    Aufg4MemoryBackup.decks["animals"] = {
        name: "Tiere",
        content: ["Katze", "Hund", "Maus", "Tiger", "Ente", "Dachs", "Elefant", "Giraffe", "Affe", "Adler", "Fisch", "Zebra", "Hase"],
        decklength: "13",
        color: "gruen",
        font: "times new roman",
        size: 20
    };
    Aufg4MemoryBackup.decks["music"] = {
        name: "Musik",
        content: ["Note", "Instrument", "Ton", "Orchester", "Band", "CD", "Schallplatte", "Song"],
        decklength: "8",
        color: "grey",
        font: "bla",
        size: 15
    };
})(Aufg4MemoryBackup || (Aufg4MemoryBackup = {})); //namespace zu
//# sourceMappingURL=decks.js.map