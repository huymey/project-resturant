

import { Customer } from "../Customer/customer";
import { TableStatus} from "./TableStatus";

export class Table {
  removeCustomer(customer: Customer) {
      throw new Error('Method not implemented.');
  }
  TableStatus: TableStatus;
  private status = TableStatus.GOOD; 
  private customer?:Customer  = undefined; 

  constructor(private id: number) {}

  getIdTable():number{
    return this.id;
  }

  //_______________ TABLE CUSTOMER ____________________________
  setCustomer(customer: Customer) {
    this.customer = customer;
  }

  hasCustomer() {
    return this.customer !== undefined;
  }

  getCustomer() {
    return this.customer;
  }

  //_____________Table Status________________________
  getStatus() {
    return this.status;
  }

  setTableStatus(newStatus: TableStatus) {
    this.TableStatus = newStatus;
  }

  removeCustomerFromTable(customer:Customer){
    this.customer = undefined;
  }
  
}
