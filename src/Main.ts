import {Menu} from "./menu/Menu";
import {MenuItems} from "./menu/MenuItems";
import {FoodandDrinks} from "./menu/items";
import {Resturant} from './Resturant';
import {Cashier} from './Human/Staff/Cashier';
import {Chef} from './Human/Staff/Chef';
import {Receiption} from './Human/Staff/Receiption';
import {Staff,StaffCategories} from './Human/staff/Staff';
import {Waiter} from './Human/Staff/Waiter';
import { Gender, Person } from './Human/Person';
import {TableSeat, TableType} from './Human/Table/TableSeat';
import { TableStatus } from './Human/Table/table';
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

//______________Resturant______________________________
let chanry = new Resturant('Chanry resturant', 'Kampong Thom');

//______________Cashier________________________________
let theavy = new Cashier(StaffCategories.CASHIER, 'Theavy', 19, Gender.FEMALE);
let mey = new Cashier(StaffCategories.CASHIER, 'Huymey', 20, Gender.FEMALE);
theavy.setSalary(250);
mey.setSalary(300);
//______________Chef________________________________
let tim = new Chef(StaffCategories.CHEF,'Tim', 30, Gender.MALE);
tim.setSalary(500);

//_____________Waiter________________________________
let mau = new Waiter(StaffCategories.WAITER,'mau', 18, Gender.FEMALE);
let na = new Waiter(StaffCategories.WAITER,'Sreyna', 22, Gender.FEMALE);
mau.setSalary(250);
na.setSalary(200);

//_____________Receiption____________________________
let keo =  new Receiption(StaffCategories.RECEIPTION,'Koe', 23, Gender.FEMALE);
keo.setSalary(250);

//_____________Table__________________________________
let firstTable = new TableSeat(1, TableType.FAMILY, 2, TableStatus.FREE, 5);


//_____________Add staff______________________________
chanry.addStaff(theavy);
chanry.addStaff(mey);
chanry.addStaff(tim);
chanry.addStaff(mau);
chanry.addStaff(keo);


//____________Add table_________________________________
chanry.addTable(firstTable);

// ____________________________consol log__________________________________
console.log(firstMenu);
console.log(secondMenu);
//_____________Main___________________________________
console.log(chanry.getStaff());
console.log(chanry.getTable());

