import { Menu } from "../../menu/Menu";
import { Order } from "./Order";
export class OrderManagement {
    public orders: Order[] = [];

    getNumberOfOrder(): number {
        return this.orders.length;
    }

    addOrder(order: Order) {
        this.orders.push(order);
    }

    getOrders(): Order[] {
        return this.orders;
    }

    listOfPaymentFromEachTable() {
        let listOfPayment: { tableID: number; listMenus: Menu[]; totalOfPayment: number }[] = [];

        for (let orders of this.orders) {
            let totalPrice: number = 0;
            let order = orders.menus;
            let listMenus: Menu[] = []
            for (let menu of order) {
                totalPrice += menu.getPrice();
                listMenus.push(menu);
            }
            let tablePaid = { 'tableID': orders.getTableId(), "listMenus": listMenus, 'totalOfPayment': totalPrice }

            listOfPayment.push(tablePaid);
        }
        return listOfPayment;
    }

    getPaymentFromATable(id: number) {
        let paymentTables = this.listOfPaymentFromEachTable();
        for (let paymentTable of paymentTables) {
            if (id === paymentTable.tableID) {
                return paymentTable;
            }
        }
    }

}