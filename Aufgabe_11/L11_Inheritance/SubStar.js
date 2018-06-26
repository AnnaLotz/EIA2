var L11_Inheritance;
(function (L11_Inheritance) {
    class SubStar extends L11_Inheritance.DavidStar {
        constructor(_color) {
            super(_color);
        }
        move() {
            this.x += Math.random() * 4;
            this.y += Math.random() * 4;
        }
    }
    L11_Inheritance.SubStar = SubStar;
})(L11_Inheritance || (L11_Inheritance = {}));
//# sourceMappingURL=SubStar.js.map