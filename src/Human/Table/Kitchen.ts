import { Menu } from "../../menu/Menu";
import { Chef } from "../Staff/Chef";
import { Order } from "../Order/Order";

export class Kitchen{
   private chefs:Chef[]=[];
   private orders:Order[]=[];

   addChefToKitchen(chef:Chef){
    this.chefs.push(chef);
   }

   addOrders(order:Order){
    this.orders.push(order);
   }

   getListOfMenu():Menu[]{
    let listMenu:Menu[]=[]
    for(let orders of this.orders){
        let order = orders.menus;
        for (let menu of order){
            listMenu.push(menu);
        }
    }
    return listMenu
   }



}

