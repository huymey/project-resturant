import {Meal} from '../Meal';
import {MealType} from '../MealType';
export class Drink extends Meal{
    constructor (name :string, price:number, protected mealType : MealType.DRINK){
        super(name,price);
    };
    getPrice():number{return this.price};
}