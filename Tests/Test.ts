namespace TestsAnna {

    document.addEventListener("DOMContentLoaded", init);

    function init(): void {


        let node: HTMLElement = document.createElement("input");
        node.setAttribute("type", "text");
        node.setAttribute("name", "Name");
        node.setAttribute("placeholder", "Spielername");
        document.getElementById("menu").appendChild(node);

    }

}