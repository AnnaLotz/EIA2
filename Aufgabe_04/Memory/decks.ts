namespace Aufg4Memory {

export interface Deck {
    name: string;
    content: string[];
    decklength: string;
    color: string;
    font: string;
    size: number;    
}

//homogenes assoziatives Array, bei dem ein datensatz dem decknamen zugeordnet ist
export interface Decks {
    [deckname: string]: Deck;
}
   
//assoziatives Array zur speicherung 
export let decks: Decks = {};
    
decks["games"] = {
    name: "Videospiele",
    content: ["Tetris", "Pong", "Mario", "Zelda", "Minecraft", "Sims", "Portal", "SimCity", "Sonic", "Assassins Creed"],
    decklength: "10",
    color: "blue",
    font: "arial",
    size: 10
};  
    
decks["animals"] = {
    name: "Tiere",
    content: ["Katze", "Hund", "Maus", "Tiger", "Ente", "Dachs", "Elefant", "Giraffe", "Affe", "Adler", "Fisch", "Zebra"],
    decklength: "12",
    color: "gruen",
    font: "times new roman",
    size: 20    
};
    
decks["music"] = {
    name: "Musik",
    content: ["Note", "Instrument", "Ton", "Orchester", "Band", "CD", "Schallplatte"],
    decklength: "7",
    color: "grey",
    font: "bla",
    size: 15
};
    
/* oder: 
decks["games"] = {
    name: "Videospiele",
    content: ["Tetris", "Pong", "Mario", "Zelda", "Minecraft", "Sims", "Portal", "SimCity", "Sonic", "Assassins Creed"],
    css-class: "gameclass"
};   
    */
    
} //namespace zu