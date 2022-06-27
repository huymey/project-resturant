import {Menu} from "./menu/Menu";
import {MenuItems} from "./menu/MenuItems";
import {FoodandDrinks} from "./menu/items";
// __________________________menu for food and drink___________________
let firstMenu = new Menu (1);
let secondMenu = new Menu(2);
// __________________________food and drink___________________
let stack = new MenuItems(1,FoodandDrinks.STACK,'Boil moderately',15);
let salad = new MenuItems(2,FoodandDrinks.SALAD,'vagetable age and Sauce',10);
let rice = new MenuItems(3,FoodandDrinks.RICE,'Hot rice',2);

let abc = new MenuItems(4,FoodandDrinks.BEER,'ABC Cold',15);
let mile = new MenuItems(5,FoodandDrinks.MILE,'Angkoe Mile',1);
let orangeJuice = new MenuItems(6,FoodandDrinks.ORRANGEJUICE,'fresh orange with ice',2);
// __________________________add drink and food to menu1___________________
firstMenu.addMenu(stack);
firstMenu.addMenu(salad);
firstMenu.addMenu(rice);
firstMenu.addMenu(abc);
firstMenu.addMenu(mile);
firstMenu.addMenu(orangeJuice);
// ____________________________add drink and food to menu2_________________
secondMenu.addMenu(stack);
secondMenu.addMenu(salad);
secondMenu.addMenu(rice);
secondMenu.addMenu(abc);
secondMenu.addMenu(mile);
secondMenu.addMenu(orangeJuice);



// ____________________________consol log__________________________________
console.log(firstMenu);
console.log(secondMenu);