"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
// import {Drink} from "./Drink";
class Menu {
    constructor(id) {
        this.id = id;
        this.food = [];
        this.id = id;
    }
    addFood(listFood) {
        this.food.push(listFood);
    }
}
exports.Menu = Menu;
