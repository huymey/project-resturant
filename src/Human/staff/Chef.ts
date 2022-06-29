import { Gender, Person } from "../Person";
import { Staff, StaffCategories } from "./staff";
import {Food} from '../../menu/food/Food';

export class Chef extends Staff {
    
    private speciality?: Chef;
    public salary: number
    constructor(category: StaffCategories, name: string, age: number, gender: Gender) {
        super(category, name, age, gender);

    }

    setSalary(salary: number) {
        this.salary = salary;
    }

    getSalary(): number { return this.salary }

    haSpeciality(): boolean {
        return this.speciality !== undefined;
    }

    setSpeciality(speciality: Chef) {
        this.speciality = speciality;
    }

    getSpeciality() {
        return this.speciality;
    }


    getCategory() {
        return this.category;
    }
}