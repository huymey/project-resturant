export enum Gender{
    MALE = "Male",
    FEMALE = "Female",
} 

export abstract class Person{
    protected phone?: number;
    constructor(protected name:string, protected age:number, protected gender:Gender){}


}



