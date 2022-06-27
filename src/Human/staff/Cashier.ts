
import { Gender, Person } from "../Person";
import { Staff, StaffCategories } from "./staff";

export class Cashier extends Staff {
    public salary: number
    constructor(category:StaffCategories, name:string, age:number, gender:Gender){
        super(category, name, age, gender);
        
    }

    setSalary(salary:number){
        this.salary = salary;
    }

    getSalary():number{return this.salary}
}


