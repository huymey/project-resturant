import { HumanManager } from './Human/humanManager';
import { RoomManagement } from './Human/Table/RoomManagement';
import {Staff} from'./Human/Staff/staff';
import {Table} from'./Human/Table/table';
import {MenuManager} from './menu/MenuManager';
import { Menu } from './menu/Menu';
export class Resturant{
   

    private staff :Staff[]=[]
    private table :Table[]=[]
    private menus : Menu[]=[];

    constructor(protected name: string, protected address: string) {
        this.name = name;
        this.address = address;
    }

    addStaff(staff:Staff) {
        this.staff = this.staff.concat(staff);
    }

    getStaff():Staff[] {
        return this.staff;
    }

    addTable(tables:Table){
        this.table = this.table.concat(tables);
    }


    getTable():Table[]{
        return this.table;
    }

    addMenu(menu: Menu) {
        this.menus= this.menus.concat(menu);
    }
    getMenu():Menu[]{
        return this.menus
    }
    public rooms: RoomManagement = new RoomManagement();
    public hr: HumanManager = new HumanManager();
    public menu: MenuManager = new MenuManager();
}