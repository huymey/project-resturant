import {StaffCategory} from "../staff/StaffCategory";
import {Person} from "../Person";
export class Staff extends Person {
    constructor( id :number, name : string,  age : number,  phone : number, private staffCategory : StaffCategory,private salary : number){
        super(id,name,age,phone);
    };
}