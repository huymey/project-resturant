import { Resturant } from "../../Resturant";
import { Person, Gender } from "../Person";

export class Customer extends Person{
    publicLastVisited: any;

    constructor( name:string, age:number, gender:Gender, public lastVisited:Date){
        super(name, age, gender);
        this.lastVisited = lastVisited;
    }

    isEquals(other:Customer):Boolean{
        if(this.name===other.name && this.age===other.age && this.gender===other.gender && this.publicLastVisited===other.publicLastVisited){
            return true;
        }
        else{
            return false;
        }
    }
}