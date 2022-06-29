import { Menu } from "../../menu/Menu";
import { Order } from "./Order";

export class OrdersManager{
    listOrders:Order[]=[];
    menu:Menu[]=[]
    addOrders(order:Order){
        this.listOrders.push(order)
    }
    addMenu(menu: Menu){
        this.menu.push(menu)
    }
}