import {Menu} from "./Menu";
export class MenuManager {
   
    private listOfMenu: Menu[]=[];
    setManu(manu: Menu){
        this.listOfMenu.push(manu)
    }

    getMenu(){
        return this.listOfMenu;
    }


}