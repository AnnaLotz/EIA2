var Aufg4Memory;
(function (Aufg4Memory) {
    let decks = {};
    decks["games"] = {
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
    decks["animals"] = {
        name: "Tiere",
        content: ["Katze", "Hund", "Maus", "Tiger", "Ente", "Dachs", "Elefant", "Giraffe", "Affe", "Adler", "Fisch", "Zebra"],
        color: "gruen",
        font: "times new roman",
        size: 20
    };
    decks["music"] = {
        name: "Musik",
        content: ["Note", "Instrument", "Ton", "Orchester", "Band", "CD", "Schallplatte"],
        color: "grey",
        font: "bla",
        size: 15
    };
})(Aufg4Memory || (Aufg4Memory = {})); //namespace zu
//# sourceMappingURL=Decks.js.map