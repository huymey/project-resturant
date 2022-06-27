import { Table , TableStatus} from "../Table/table";
export enum OrderStatus {
    RECIEVED = 'Recieved',
    PREPARE = 'Preparing',
    CANCELLED = 'Cancelled',
    COMPLETED = 'Completed',
    NONE = 'None',
}

export class Order extends Table {
    constructor(
        private orderId: number,
        private orderStatus: OrderStatus,
        tableId: number, 
        status:TableStatus, 
        maxCapacity: number,
    ){
        super(tableId, status, maxCapacity);
    }
    

    
}