import {Resturant} from './Resturant';
import {Cashier} from './Human/staff/Cashier';
import {Chef} from './Human/staff/Chef';
import {Receiption} from './Human/staff/Receiption';
import {Staff,StaffCategories} from './Human/Staff/staff';
import {Waiter} from './Human/staff/Waiter';
import { Gender, Person } from './Human/Person';
import {Table} from './Human/Table/table';
import { TableStatus } from './Human/Table/TableStatus';
import {Food} from'./menu/food/Food';
import {Backery} from'./menu/backery/Backery';
import {Drink} from'./menu/drink/Drink';
import {MealType} from './menu/mealType'
import {Room} from './Human/Table/Room';
import {Customer} from './Human/Customer/customer'
import { Menu } from './menu/Menu';
import { DateTime } from './calendar/DateTime';
import { CookerAppointment } from './calendar/CookerAppointment';
import { EventCategory } from './calendar/Event';
import { Order } from './Human/order/Order';



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

// _______________________ add food____________________
let rice = new Food('Rice',12,MealType.FOOD);
let berger = new Food('humberger',30,MealType.FOOD);
// _______________________ add Backery
let chessCake = new Backery('Cheese Cake',20,MealType.BACKERY);
let braek = new Backery('Break',12,MealType.BACKERY);
// _______________________ add Drink
let appleJuice = new Drink('Apple Juice',10,MealType.DRINK);
let orangeJuice = new Drink('Orange Juice',10,MealType.DRINK);
//________________________ add Meal in menu_______________________
let order1 = new Order(1, firstTable)
let menu1 = new Menu(MealType.BACKERY, 2000);
let menu2 = new Menu(MealType.DRINK, 1000);
let menu3 = new Menu(MealType.FOOD, 5000);
menu1.addMeal(rice);
menu2.addMeal(berger);
menu3.addMeal(appleJuice);
chanry.kitchen.addChefToKitchen(tim);
chanry.kitchen.addOrders(order1);
chanry.rooms.addRooms(rooms);

//____________________________Calenda__________________________
let dateCooking1 = new DateTime(29, 6, 2022, 7)
let dateCooking2 = new DateTime(30, 6, 2022, 6)

let cookingappointment = new CookerAppointment(EventCategory.COOKER_APPOINTEMENT, dateCooking1, dateCooking2)
chanry.Calendars.addEvent(cookingappointment);
console.log("Time to cooking : ", chanry.Calendars);

//_____________Main___________________________________
// console.log(chanry.hr);
// console.log(chanry.rooms.getRooms());
console.log(chanry.menu.getMenu());
// console.log(chanry.orders.listOfPaymentFromEachTable());
// console.log(chanry.orders.getPaymentFromATable(1));

