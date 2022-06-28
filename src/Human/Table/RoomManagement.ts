import { Room } from './Room';
import { Table } from './table';
import {Customer } from '../Customer/customer';

export class RoomManagement {
    private rooms: Room[] = [];
    addRooms(rooms: Room) {
        this.rooms.push(rooms);
    }

    getRooms(): Room[] {
        return this.rooms;
    }

    /** Find a room with a free bed
   * @return the first room available with a free table
   */
    findFreeRoom(): Room | undefined {
        // TODO
        let roomsFree: Room[] = [];
        for (let room of this.rooms) {
            let allTables = room.getTable();
            for (let table of allTables) {
                if (!table.hasCustomer) {
                    roomsFree.push(room);
                }
            }
        }
        if (roomsFree.length > 0) {
            return roomsFree[0];
        }
        return undefined;
    }

    removeCustomer(customer: Customer) {
        for (let room of this.rooms) {
            let allTables = room.getTable();
            for (let table of allTables) {
                if (customer.isEquals(customer)) {
                    table.removeCustomer(customer);
                }
            }
        }

    }
}