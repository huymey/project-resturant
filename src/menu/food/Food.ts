import {Meal} from '../Meal';
import {MealType} from '../MealType';
export class Food extends Meal{
    constructor (name :string, price:number, protected mealType : MealType.FOOD){
        super(name,price);
    };
    getPrice():number{return this.price};
}