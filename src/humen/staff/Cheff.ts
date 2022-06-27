import {StaffCategory} from "./StaffCategory";
import {Staff} from "./Staff";
export class Receiption extends Staff {
    constructor( id :number, name : string,  age : number,  phone : number,staffCategory :StaffCategory, salary: number){
        super(id,name,age,phone,staffCategory,salary);
    }
}