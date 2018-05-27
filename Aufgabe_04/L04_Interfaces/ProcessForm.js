/* Aufgabe: Aufgabe 4: Uebung zu Datenstrkturen und assoziative Arrays
  Name: Anna Lotz
  Matrikel: 257449
  Datum: 01.05.18
  Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var L04_Interfaces;
(function (L04_Interfaces) {
    window.addEventListener("load", init);
    //Init Funktion mit Event-Listener
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        let searchButton = document.getElementById("search");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search);
    } //init funktion zu
    //Insert Funktion zum Daten speichern
    function insert(_event) {
        let inputs = document.getElementsByTagName("input"); //Inputs werden als Node �ber den TagName definiert
        let genderButton = document.getElementById("male"); //genderButton Input Male=true
        let matrikel = inputs[2].value; //Matrikel ins assoziative array
        let studi; //studi wird als Studi-Interface gespeichert
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt(matrikel),
            age: parseInt(inputs[3].value),
            curriculum: inputs[4].value,
            gender: genderButton.checked
        };
        console.log(studi);
        console.log(matrikel);
        //console.log(studi.age);
        //console.log(studi["age"]);
        // Datensatz im assoziativen Array unter der Matrikelnummer speichern
        L04_Interfaces.studiHomoAssoc[matrikel] = studi;
        // nur um das auch noch zu zeigen...
        L04_Interfaces.studiSimpleArray.push(studi);
    } //insert funktion zu
    function refresh(_event) {
        let output = document.getElementsByTagName("textarea")[0];
        output.value = "";
        // for-in-Schleife iteriert �ber die Schl�ssel des assoziativen Arrays
        for (let matrikel in L04_Interfaces.studiHomoAssoc) {
            let studi = L04_Interfaces.studiHomoAssoc[matrikel];
            let line = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.gender ? "(M)" : "(F)";
            line += ", ";
            line += studi.curriculum;
            output.value += line + "\n";
        }
        // zusätzliche Konsolenausgaben zur Demonstration
        /*    console.group("Simple Array");
        // console.log(studiSimpleArray);
        // console.groupEnd();

        // console.group("Associatives Array (Object)");
        // console.log(studiHomoAssoc);
        // console.groupEnd(); */
        //funktion refresh zu
    }
    function search(_event) {
        console.log("Suche wird ausgefuehrt");
        let outputs = document.getElementsByTagName("textarea")[1];
        outputs.value = ""; //Output wird als HTMLTextAreaElement definiert und mit "" bef�llt
        let inputs = document.getElementsByTagName("input"); //Inputs als Node definieren und ByTagName("input") hohlen
        let matrikel = inputs[7].value;
        let studi = L04_Interfaces.studiHomoAssoc[matrikel];
        if (typeof studi === "undefined") {
            outputs.value += "No student found";
        }
        else {
            let line = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.gender ? "(M)" : "(F)";
            line += ", ";
            line += studi.curriculum;
            outputs.value += line + "\n";
        }
    } //search funktion zu
})(L04_Interfaces || (L04_Interfaces = {}));
//# sourceMappingURL=ProcessForm.js.map