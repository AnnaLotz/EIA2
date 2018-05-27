/* Aufgabe: Aufgabe 6: StudiVZ
  Name: Anna Lotz
  Matrikel: 257449
  Datum: 27.05.18
  Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace L06_StudiVZ {
    window.addEventListener("load", init);
    let address: string = "https://eia2-257449.herokuapp.com/";
    let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input"); //Inputs werden als Node über den TagName definiert

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
        let convert: string = JSON.stringify(studi);
        console.log(convert);

        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + "?command=insert&data=" + convert, true);
        xhr.addEventListener("readystatechange", handleStateChangeInsert);
        xhr.send();
    } //insert funktion zu

    function refresh(_event: Event): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + "?command=refresh", true);
        xhr.addEventListener("readystatechange", handleStateChangeRefresh);
        xhr.send();
    }   //funktion refresh zu
    
    function search(_event: Event): void {
        let mtrkl: string = inputs[2].value;
        
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + "?command=search&searchFor=" + mtrkl, true);
        xhr.addEventListener("readystatechange", handleStateChangeSearch);
        xhr.send();    
    } //search funktion zu
    
    

    function handleStateChangeInsert(_event: ProgressEvent): void {
        var xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
          //  alert(xhr.response);
        }
    } //function handleStateChangeInsert zu
    
    function handleStateChangeRefresh(_event: ProgressEvent): void {
        let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
        output.value = "";
        var xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.response;
        }           
    } //function handleStateChangeRefresh zu
    
     function handleStateChangeSearch(_event: ProgressEvent): void {
        let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[1];
        output.value = "";
        var xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.response;
        }           
    } //function handleStateChangeSearch zu
    
    
} //namespace zu