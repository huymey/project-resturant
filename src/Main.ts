import {Resturant} from './Resturant';
import {Cashier} from './Human/Staff/Cashier';
import {Chef} from './Human/Staff/Chef';
import {Receiption} from './Human/Staff/Receiption';
import {Staff,StaffCategories} from './Human/staff/Staff';
import {Waiter} from './Human/Staff/Waiter';
import { Gender, Person } from './Human/Person';
import {TableSeat, TableType} from './Human/Table/TableSeat';
import { TableStatus } from './Human/Table/table';

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



//_____________Main___________________________________
console.log(chanry.getStaff());
console.log(chanry.getTable());

