import { Table , TableStatus} from "../Table/table";
import {Meal} from '../../menu/Meal';
import { Menu } from "../../menu/Menu";
export enum OrderStatus {
    RECIEVED = 'Recieved',
    PREPARE = 'Preparing',
    CANCELLED = 'Cancelled',
    COMPLETED = 'Completed',
    NONE = 'None',

}

export class Order{
    private meals : Meal[]=[];
    constructor(
        private orderId: number,
        private orderStatus: OrderStatus,
        tableId: Table, 
        maxCapacity: number,
    ){}

   
    
}