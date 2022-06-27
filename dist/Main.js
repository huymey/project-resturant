"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Menu_1 = require("./menu/Menu");
const Food_1 = require("./menu/Food");
let foods = new Food_1.Food(Food_1.Foods.BREAK, 10);
let firstTable = new Menu_1.Menu(1);
firstTable.addFood(foods);
