import {Customer} from'./Customer/customer';
import {Staff} from'./Staff/staff';
import { TableSeat } from './Table/TableSeat';
export class HumanManager{
    addTable(firstTable: TableSeat) {
        throw new Error('Method not implemented.');
    }
    protected staffs :Staff[]=[];
    protected customers :Customer[]=[];

    addStaff(staff :Staff){
        this.staffs.push(staff);
    }

    getStaff():Staff[]{
        return this.staffs;
    }

}
