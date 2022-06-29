import {Menu} from "./Menu";
export class MenuManager {
    private listOfMenu: Menu[]=[];
    setManu(manu: Menu){
        this.listOfMenu.push(manu)
    }

    getManu(){
        return this.listOfMenu;
    }


}