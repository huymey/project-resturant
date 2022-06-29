import { Menu } from "../../menu/Menu";
import { Table} from "../Table/table";
export enum OrderStatus {
    RECIEVED = 'Recieved',
    PREPARE = 'Preparing',
    CANCELLED = 'Cancelled',
    COMPLETED = 'Completed',
    NONE = 'None',

}

export class Order{
    public menus: Menu[] = [];
    constructor(
        private id: number,
        public table: Table,
    ){}

   setMenu(menu:Menu){
        this.menus.push(menu);
    }
    
    // getTableId():number {
    //     return this.getTableId();
    // }

    getMenu():Menu[]{return this.menus}
   
    
}