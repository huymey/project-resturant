import {Staff} from'./Human/staff/staff';
import {Table} from'./Human/Table/table';

export class Resturant{
    private staff :Staff[]=[]
    private table :Table[]=[]

    constructor(protected name: string, protected address: string) {
        this.name = name;
        this.address = address;
    }

    addStaff(staff:Staff) {
        this.staff = this.staff.concat(staff);
    }

    getStaff():Staff[] {
        return this.staff;
    }

    addTable(tables:Table){
        this.table = this.table.concat(tables);
    }


    getTable():Table[]{
        return this.table;
    }
}