
import { DateTime } from "./DateTime";
import {Chef} from '../Human/staff/Chef';
import {Customer} from '../Human/Customer/customer';
import { Event, EventCategory } from "./Event";

export class CookerAppointment extends Event {
  constructor(
    category: EventCategory,
    start: DateTime,
    end: DateTime,
    
  ) {
    super(category, start, end);
  }
 

}
