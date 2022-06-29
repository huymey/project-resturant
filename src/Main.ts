import {Resturant} from './Resturant';
import {Cashier} from './Human/staff/Cashier';
import {Chef} from './Human/staff/Chef';
import {Receiption} from './Human/staff/Receiption';
import {Staff,StaffCategories} from './Human/Staff/staff';
import {Waiter} from './Human/staff/Waiter';
import { Gender, Person } from './Human/Person';
import {Table} from './Human/Table/table';
import { TableStatus } from './Human/Table/TableStatus';
import {MealType} from './menu/mealType'
import {Room} from './Human/Table/Room';
import {Customer} from './Human/Customer/customer'
import { Menu } from './menu/Menu';
import { Order, OrderStatus } from './Human/order/Order';
import { Meal } from './menu/Meal';



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

//_____________Add Customer_________________________
let customer1 = new Customer("theavy", 21, Gender.FEMALE);
let customer2 = new Customer("mey", 20, Gender.FEMALE)
let customer3 = new Customer("Keov", 20, Gender.FEMALE);
let customer4 = new Customer("tim", 30, Gender.MALE)
let customer5 = new Customer("Kimky", 19, Gender.MALE);
let customer6 = new Customer("Mao", 19, Gender.FEMALE);
chanry.hr.addCustomers(customer1)
chanry.hr.addCustomers(customer2)
chanry.hr.addCustomers(customer3)
chanry.hr.addCustomers(customer4)
chanry.hr.addCustomers(customer5)


//_____________Table__________________________________
let firstTable = new Table(1);
let secondTable = new Table(2);
let thirdTable = new Table(3);
let fourthTable = new Table(4);
let fifthTable = new Table(5);
firstTable.setCustomer(customer1)
secondTable.setCustomer(customer2)
thirdTable.setCustomer(customer3)
fourthTable.setCustomer(customer4)
fifthTable.setCustomer(customer5)
//_____________Add staff______________________________
chanry.hr.addStaff(theavy);
chanry.hr.addStaff(mey);
chanry.hr.addStaff(tim);
chanry.hr.addStaff(mau);
chanry.hr.addStaff(keo);


//____________Add table_________________________________
let rooms = new Room(1)
rooms.addTable(firstTable)
rooms.addTable(secondTable)
rooms.addTable(thirdTable)
rooms.addTable(fourthTable)
rooms.addTable(fifthTable)

chanry.rooms.addRooms(rooms);
//___________________menu___________________________
let rice = new Meal('Rice');
let berger = new Meal('humberger');

let chessCake = new Meal("Cake");
let braek = new Meal( 'Break');

let appleJuice = new Meal(  'Apple Juice');
let orangeJuice = new Meal('Orange Juice');

let menu1 = new Menu(MealType.BACKERY, 2000);
menu1.addMeal(rice);
menu1.addMeal(berger);

let menu2 = new Menu(MealType.DRINK, 1000);
menu2.addMeal(chessCake);
menu2.addMeal(braek);

let menu3 = new Menu(MealType.FOOD, 3000);
menu3.addMeal(appleJuice);
menu3.addMeal(orangeJuice);

//__________________________Orders and chose the menu___________________________

let order1 = new Order(1, firstTable)
let order2 = new Order(2, secondTable)
let order3 = new Order(3, thirdTable);
order1.setMenu(menu1);
order2.setMenu(menu2);
order3.setMenu(menu3);
order3.setMenu(menu2);
// console.log(order3);


chanry.orders.addOrders(order1)
chanry.orders.addOrders(order2)
chanry.orders.addOrders(order3)

console.log("Payment In each tableId: ", chanry.orders.listOfPaymentFromEachTable());
