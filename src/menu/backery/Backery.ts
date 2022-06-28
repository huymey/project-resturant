import {Meal} from '../Meal';
import {MealType} from '../MealType';
export class Backery extends Meal{
    constructor (name :string, price:number, protected mealType : MealType.BACKERY){
        super(name,price);
    };
    getPrice():number{return this.price};
}