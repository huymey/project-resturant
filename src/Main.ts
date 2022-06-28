import {Resturant} from './Resturant';
import {Cashier} from './Human/staff/Cashier';
import {Chef} from './Human/staff/Chef';
import {Receiption} from './Human/staff/Receiption';
import {Staff,StaffCategories} from './Human/Staff/staff';
import {Waiter} from './Human/staff/Waiter';
import { Gender, Person } from './Human/Person';
import {Table, TableStatus} from './Human/Table/table';
import { TableSeat,TableType } from './Human/Table/TableSeat';
import {HumanManager} from './Human/humanManager';
import {Room} from './Human/Table/Room';
import {RoomManagement} from './Human/Table/RoomManagement';

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
let firstTable = new TableSeat(1, TableType.FAMILY, 1, TableStatus.FREE, 5);
let secondTable = new TableSeat(2, TableType.FAMILY, 2, TableStatus.FREE, 4);
let thirdTable = new TableSeat(3, TableType.FAMILY,3, TableStatus.FREE, 8);
let fourthTable = new TableSeat(4, TableType.FAMILY, 4, TableStatus.FREE, 3);
let fifthTable = new TableSeat(5, TableType.FAMILY, 5, TableStatus.FREE, 2);


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
//_____________Main___________________________________
// console.log(chanry.hr);
console.log(chanry.rooms.getRooms());

