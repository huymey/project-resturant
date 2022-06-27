import {Order} from "../../order/Order";
import {Person} from "../Person";
export class Customer extends Person {
    order : Order[] = [];
    constructor( id :number, name : string,  age : number,  phone : number){
        super(id,name,age,phone);
    };
}