export class DateTime {
  constructor(
    public day: number,
    public month: number,
    public year: number,
    public time: number
  ) {}

  isEqual(other: DateTime): boolean {
    if (
      this.day === other.day &&
      this.month === other.month &&
      this.year === other.year &&
      this.time === other.time
    ){
      return true;
    }
    else{
      return false;
    }
  }
}
