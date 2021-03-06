/*Aufgabe: Aufgabe 4: FormElements and Interfaces
  Name: Anna Lotz
  Matrikel: 257449
  Datum: 16.05.18
  Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
  */

namespace Aufg4MemoryBackup {

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
    content: ["Katze", "Hund", "Maus", "Tiger", "Ente", "Dachs", "Elefant", "Giraffe", "Affe", "Adler", "Fisch", "Zebra", "Hase"],
    decklength: "13",
    color: "gruen",
    font: "times new roman",
    size: 20    
};
    
decks["music"] = {
    name: "Musik",
    content: ["Note", "Instrument", "Ton", "Orchester", "Band", "CD", "Schallplatte", "Song"],
    decklength: "8",
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