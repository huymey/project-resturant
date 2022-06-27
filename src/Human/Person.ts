export enum Gender{
    MALE = "Male",
    FEMALE = "Female",
} 

export abstract class Person{
    protected phone?: number;
    constructor(private name:string, private age:number, private gender:Gender){}


}



