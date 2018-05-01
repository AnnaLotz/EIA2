/* Aufgabe: Aufgabe 4: Uebung zu Datenstrkturen und assoziative Arrays
  Name: Anna Lotz
  Matrikel: 257449
  Datum: 01.05.18
  Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace L04_Interfaces {
    window.addEventListener("load", init);

    //Init Funktion mit Event-Listener
    function init(_event: Event): void {
        console.log("Init");
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        let searchButton: HTMLElement = <HTMLButtonElement>document.getElementById("search");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search);
    } //init funktion zu

    //Insert Funktion zum Daten speichern
    function insert(_event: Event): void {
        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");  //Inputs werden als Node über den TagName definiert
        let genderButton: HTMLInputElement = <HTMLInputElement>document.getElementById("male"); //genderButton Input Male=true
        let matrikel: string = inputs[2].value; //Matrikel ins assoziative array
        let studi: Studi; //studi wird als Studi-Interface gespeichert
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt(matrikel),
            age: parseInt(inputs[3].value), //parseInt wandelt die number in string um
            curriculum: inputs[4].value,
            gender: genderButton.checked
        };

        console.log(studi);
        console.log(matrikel);
        //console.log(studi.age);
        //console.log(studi["age"]);

        // Datensatz im assoziativen Array unter der Matrikelnummer speichern
        studiHomoAssoc[matrikel] = studi;

        // nur um das auch noch zu zeigen...
        studiSimpleArray.push(studi);
    } //insert funktion zu

    function refresh(_event: Event): void {
        let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
        output.value = "";
        // for-in-Schleife iteriert über die Schlüssel des assoziativen Arrays
        for (let matrikel in studiHomoAssoc) {  // Besonderheit: Type-Annotation nicht erlaubt, ergibt sich aus der Interface-Definition
            let studi: Studi = studiHomoAssoc[matrikel];
            let line: string = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.gender ? "(M)" : "(F)";
            line += ", ";
            line += studi.curriculum;
            output.value += line + "\n";
        };

        // zusÃ¤tzliche Konsolenausgaben zur Demonstration
        /*    console.group("Simple Array"); 
        // console.log(studiSimpleArray);
        // console.groupEnd();

        // console.group("Associatives Array (Object)");
        // console.log(studiHomoAssoc);
        // console.groupEnd(); */

        //funktion refresh zu
        }
    function search(_event: Event): void {
        console.log("Suche wird ausgefuehrt");
        let outputs: HTMLTextAreaElement = document.getElementsByTagName("textarea")[1];
        outputs.value = ""; //Output wird als HTMLTextAreaElement definiert und mit "" befüllt
        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input"); //Inputs als Node definieren und ByTagName("input") hohlen
        let matrikel: string = inputs[7].value;
        let studi: Studi = studiHomoAssoc[matrikel];
        if (typeof studi === "undefined") { //wenn der typ von studi nicht definiert ist (entspricht nicht studi == "undefined") 
            outputs.value += "No student found";
        } else {
            let line: string = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.gender ? "(M)" : "(F)";
            line += ", ";
            line += studi.curriculum;
            outputs.value += line + "\n";
        }

    } //search funktion zu

}