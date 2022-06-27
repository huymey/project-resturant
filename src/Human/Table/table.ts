export enum TableStatus{
    FREE = 'Free',
    BUSY = 'Busy',
    RESERVED = 'Reserved',
}

export class Table{
    constructor(private tableId:number, private status:TableStatus, private maxCapacity:number){}

    addReserved():boolean{
        return true;
    }
}