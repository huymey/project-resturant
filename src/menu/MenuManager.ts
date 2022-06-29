import {Menu} from "./Menu";
export class MenuManager {
    private listOfMenu: Menu;

    setManu(manu: Menu){
        return this.listOfMenu = manu;
    }

    getMenu(){
        return this.listOfMenu;
    }


}