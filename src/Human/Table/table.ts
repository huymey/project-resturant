import { Customer } from "../Customer/customer";

export enum TableStatus {
    FREE = 'Free',
    BUSY = 'Busy',
    RESERVED = 'Reserved',
}

export class Table {
    removeCustomer(customer: Customer) {
        throw new Error('Method not implemented.');
    }
    hasTable() {
        throw new Error('Method not implemented.');
    }
    hasCustomer() {
        throw new Error('Method not implemented.');
    }
    constructor(private tableId: number, private status: TableStatus, private maxCapacity: number) { }

    addReserved(): boolean {
        return true;
    }

    
}