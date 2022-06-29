import {Table} from './table';
import { Customer } from '../Customer/customer';
import { TableStatus } from './TableStatus';

export class Room{
 
    private tables:Table[] = [];
    private customer?: Customer = undefined;
    private status = TableStatus;
    Tablestatus: TableStatus;
    constructor(private id:number){}

    getNumberOfTable() {
        return this.tables.length;
      }

    addTable(table:Table){
        return this.tables.push(table);
    }

    getTable():Table[]{
        return this.tables;
    }

    
    setCustomer(customer: Customer) {
        this.customer = customer;
    }
    
    hasCustomer() {
        return this.customer !== undefined;
    }

    getStatus() {
        return this.status;
    }

    setStatus(newStatus: TableStatus) {
        this.Tablestatus = newStatus;
    }
    removeCustomer(customer: Customer) {
        this.customer = undefined;
    }

    
}