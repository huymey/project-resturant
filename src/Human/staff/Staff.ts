import {Person, Gender} from '../Person';

export enum StaffCategories {
    CASHIER = 'Cashier',
    CHEF = 'Chef',
    WAITER = 'Waiter',
    RECEIPTION = 'Receiption',
   
}
export class Staff extends Person {
    protected salary: number=0;
    constructor(protected category:StaffCategories,name:string, age:number, gender:Gender){
        super( name, age, gender);
        
    }
}