import {Backery} from "./backery/Backery";
import {Drink} from "./drink/Drink";
import {Food} from "./food/Food";

export class Menu {
    private foods : Food[]=[];
    private backerys :Backery[]=[];
    private drinks : Drink[]=[];
    
    addFood(newFood : Food){
        this.foods.push(newFood);
    }
    addBackery(newBackery : Backery){
        this.backerys.push(newBackery);
    }
    addDrink(newDrink : Drink){
        this.drinks.push(newDrink);
    }
}