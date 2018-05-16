var Aufg4Memory;
(function (Aufg4Memory) {
    //assoziatives Array zur speicherung 
    Aufg4Memory.decks = {};
    Aufg4Memory.decks["games"] = {
        name: "Videospiele",
        content: ["Tetris", "Pong", "Mario", "Zelda", "Minecraft", "Sims", "Portal", "SimCity", "Sonic", "Assassins Creed"],
        decklength: "10",
        color: "blue",
        font: "arial",
        size: 10
    };
    Aufg4Memory.decks["animals"] = {
        name: "Tiere",
        content: ["Katze", "Hund", "Maus", "Tiger", "Ente", "Dachs", "Elefant", "Giraffe", "Affe", "Adler", "Fisch", "Zebra", "Hase"],
        decklength: "13",
        color: "gruen",
        font: "times new roman",
        size: 20
    };
    Aufg4Memory.decks["music"] = {
        name: "Musik",
        content: ["Note", "Instrument", "Ton", "Orchester", "Band", "CD", "Schallplatte", "Song"],
        decklength: "8",
        color: "grey",
        font: "bla",
        size: 15
    };
})(Aufg4Memory || (Aufg4Memory = {})); //namespace zu
//# sourceMappingURL=decks.js.map