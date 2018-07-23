var TestsAnna;
(function (TestsAnna) {
    document.addEventListener("DOMContentLoaded", init);
    function init() {
        let node = document.createElement("input");
        node.setAttribute("type", "text");
        node.setAttribute("name", "Name");
        node.setAttribute("placeholder", "Spielername");
        document.getElementById("menu").appendChild(node);
    }
})(TestsAnna || (TestsAnna = {}));
//# sourceMappingURL=Test.js.map