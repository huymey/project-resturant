"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = exports.Foods = void 0;
var Foods;
(function (Foods) {
    Foods["RICE"] = "RICE";
    Foods["FRIED"] = "FRIED";
    Foods["SOUP"] = "SOUP";
    Foods["STACK"] = "STACK";
    Foods["SALAD"] = "SALAD";
    Foods["BREAK"] = "BREAK";
})(Foods = exports.Foods || (exports.Foods = {}));
class Food {
    constructor(food, price) {
        this.food = food;
        this.price = price;
    }
}
exports.Food = Food;
