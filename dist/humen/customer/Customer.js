"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const Person_1 = require("../Person");
class Customer extends Person_1.Person {
    constructor(id, name, age, phone) {
        super(id, name, age, phone);
        this.order = [];
    }
    ;
}
exports.Customer = Customer;
