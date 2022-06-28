import {Table, TableStatus} from './table';
import { Customer } from '../Customer/customer';

export class Room{
 
    private tables:Table[] = [];
    private customer?: Customer = undefined;
    private status = TableStatus.FREE;
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
        this.status = newStatus;
    }
    removeCustomer(customer: Customer) {
        this.customer = undefined;
    }
}