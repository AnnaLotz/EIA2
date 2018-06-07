/* Aufgabe: Aufgabe 6: StudiVZ
  Name: Anna Lotz
  Matrikel: 257449
  Datum: 27.05.18
  Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var L06_StudiVZ;
(function (L06_StudiVZ) {
    window.addEventListener("load", init);
    let address = "https://eia2-257449.herokuapp.com/";
    let inputs = document.getElementsByTagName("input"); //Inputs werden als Node �ber den TagName definiert
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
        let convert = JSON.stringify(studi);
        console.log(convert);
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?command=insert&data=" + convert, true);
        xhr.addEventListener("readystatechange", handleStateChangeInsert);
        xhr.send();
    } //insert funktion zu
    function refresh(_event) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?command=refresh", true);
        xhr.addEventListener("readystatechange", handleStateChangeRefresh);
        xhr.send();
    } //funktion refresh zu
    function search(_event) {
        let mtrkl = inputs[7].value;
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?command=search&searchFor=" + mtrkl, true);
        xhr.addEventListener("readystatechange", handleStateChangeSearch);
        xhr.send();
    } //search funktion zu
    function handleStateChangeInsert(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
        }
    } //function handleStateChangeInsert zu
    function handleStateChangeRefresh(_event) {
        let output = document.getElementsByTagName("textarea")[0];
        output.value = "";
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.response;
        }
    } //function handleStateChangeRefresh zu
    function handleStateChangeSearch(_event) {
        let output = document.getElementsByTagName("textarea")[1];
        output.value = "";
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.response;
        }
    } //function handleStateChangeSearch zu
})(L06_StudiVZ || (L06_StudiVZ = {})); //namespace zu
//# sourceMappingURL=StudiVZ.js.map