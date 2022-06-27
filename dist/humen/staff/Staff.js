"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staff = void 0;
const Person_1 = require("../Person");
class Staff extends Person_1.Person {
    constructor(id, name, age, phone, staffCategory, salary) {
        super(id, name, age, phone);
        this.staffCategory = staffCategory;
        this.salary = salary;
    }
    ;
}
exports.Staff = Staff;
