"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const statue_1 = require("./statue");
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    let szulo = document.getElementById('hiba');
    let list;
    function hiba(szoveg) {
        let p = document.createElement('p');
        p.innerHTML = szoveg;
        szulo.appendChild(p);
    }
    (_a = document.getElementById('button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        var _a, _b, _c, _d;
        while (szulo.firstChild) {
            szulo.removeChild(szulo.lastChild);
        }
        let ellTitle = /^[a-zA-z" ",]+$/;
        let title = (_a = document.getElementById('title')) === null || _a === void 0 ? void 0 : _a.value;
        if (!ellTitle.test(title)) {
            hiba('Hibás név!');
        }
        let ellYear = /^[1-9][0-9]*/;
        let year = (_b = document.getElementById('year')) === null || _b === void 0 ? void 0 : _b.value;
        if (!ellYear.test(year) || parseInt(year) > 2022) {
            hiba('Hibás év!');
        }
        let ellPrice = /^[1-9]{1}[0-9]*$/;
        let price = (_c = document.getElementById('price')) === null || _c === void 0 ? void 0 : _c.value;
        if (!ellPrice.test(price)) {
            hiba('Hibás ár!');
        }
        let ellHeight = /^[0-9][1-9]+$/;
        let height = (_d = document.getElementById('height')) === null || _d === void 0 ? void 0 : _d.value;
        if (!ellHeight.test(height)) {
            hiba('Hibás méret!');
        }
        if (ellTitle.test(title) && ellYear.test(year) && ellPrice.test(price) && ellHeight.test(height)) {
            let statue = new statue_1.Statue(title, parseInt(year), parseInt(price), parseInt(height));
            list.push(statue);
        }
    });
});
