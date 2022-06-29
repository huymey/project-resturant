import { Customer } from './Customer/customer';
import { Staff, StaffCategories } from './Staff/staff';

export class HumanManager {
    protected staffs: Staff[] = [];
    protected customers: Customer[] = [];

    addStaff(staff: Staff) {
        this.staffs.push(staff);
    }

    getStaff(): Staff[] {
        return this.staffs;
    }

    addCustomers(customer:Customer){
        this.customers.push(customer)
    }

    getCustomers():Customer[]{
        return  this.customers;
    }

  
}
