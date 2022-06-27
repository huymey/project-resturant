import {MenuItems} from "./MenuItems";
export class Menu {
    private menuItems : MenuItems[] =[];
    constructor(protected id: number){
        this.id = id;
    }

    addMenu(listMenu : MenuItems){
        this.menuItems.push(listMenu);
        
    }
   
}