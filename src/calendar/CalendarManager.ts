import { Chef } from "../human/staff/Chef";
import { DateTime } from "./DateTime";
import { CookerAppointment } from "./CookerAppointment";
import { Event } from "./Event";

export class CalendarManager {
  public events: Event[] = [];

  addEvent(event: Event) {
    this.events.push(event);
  }

  /**
   * @returns all payment for the given chef
   */
  

}
