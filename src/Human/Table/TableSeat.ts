import { Table, TableStatus } from "./table";

export enum TableType{
    KID = 'KID',
    REGULAR = 'REGULAR',
    FAMILY = 'FAMILY',
}

export class TableSeat extends Table{
    constructor(
        private tableSeatNumbers: number, 
        private type: TableType, 
        tableId: number, 
        status:TableStatus, 
        maxCapacity: number) {
            super(tableId, status, maxCapacity);
        }


    updateSeatType(type: TableType):boolean {
        return true;
    }
}