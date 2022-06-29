
import { Meal } from "./Meal";
import { MealType } from "./MealType";

export class Menu {
    private meals : Meal[] = []; 
    constructor( mealType : MealType, private price : number){}

    addMeal(newMeal:Meal){
        this.meals.push(newMeal);
    }

    getPrice():number{
        return this.price;
    }
}

