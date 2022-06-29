import { Menu } from "../../menu/Menu";
import { Order } from "./Order";

export class OrdersManager{
    listOrders:Order[]=[];

    addOrders(order:Order){
        this.listOrders.push(order)
    }
    
    getOrders():Order[]{
        return this.listOrders;
    }

    listOfPaymentFromEachTable() {
        let listOfPayment: { tableID: number; listMenus: Menu[]; totalOfPayment: number }[] = [];
        
        for (let orders of this.listOrders) {
            let listOfMenus: Menu[] = [];
            let totalPrice: number = 0;
            for (let menu of orders.menus) {
              listOfMenus.push(menu);
              totalPrice += menu.getPrice()
            }
            listOfPayment.push({"tableID": orders.table.getIdTable(), "listMenus": listOfMenus, "totalOfPayment":totalPrice})
            
        }
        return listOfPayment;
     
    }

}