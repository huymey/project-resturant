
import { Meal } from "./Meal";
import { MealType } from "./MealType";

export class Menu {
    private meals : Meal[] = []; 
    constructor( mealType : MealType){}
    addMeal(newMeal:Meal){
        this.meals.push(newMeal);
    }
}