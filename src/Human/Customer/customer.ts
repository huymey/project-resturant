import { Resturant } from "../../Resturant";
import { Person, Gender } from "../Person";

export class Customer extends Person{

    constructor( name:string, age:number, gender:Gender, public lastVisited:Date){
        super(name, age, gender);
        this.lastVisited = lastVisited;
    }
}