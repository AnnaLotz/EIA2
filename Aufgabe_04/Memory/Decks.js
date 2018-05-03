var Aufg4Memory;
(function (Aufg4Memory) {
    //assoziatives Array zur speicherung 
    Aufg4Memory.decks = {};
    Aufg4Memory.decks["games"] = {
        name: "Videospiele",
        content: ["Tetris", "Pong", "Mario", "Zelda", "Minecraft", "Sims", "Portal", "SimCity", "Sonic", "Assassins Creed"],
        color: "blue",
        font: "arial",
        size: 10
    };
    /* oder:
    decks["games"] = {
        name: "Videospiele",
        content: ["Tetris", "Pong", "Mario", "Zelda", "Minecraft", "Sims", "Portal", "SimCity", "Sonic", "Assassins Creed"],
        css-class: "gameclass"
    };
        */
    Aufg4Memory.decks["animals"] = {
        name: "Tiere",
        content: ["Katze", "Hund", "Maus", "Tiger", "Ente", "Dachs", "Elefant", "Giraffe", "Affe", "Adler", "Fisch", "Zebra"],
        color: "gruen",
        font: "times new roman",
        size: 20
    };
    Aufg4Memory.decks["music"] = {
        name: "Musik",
        content: ["Note", "Instrument", "Ton", "Orchester", "Band", "CD", "Schallplatte"],
        color: "grey",
        font: "bla",
        size: 15
    };
})(Aufg4Memory || (Aufg4Memory = {})); //namespace zu
//# sourceMappingURL=Decks.js.map