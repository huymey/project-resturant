export abstract class Meal {
constructor(protected name : string, protected price: number){}
abstract getPrice():number;
}