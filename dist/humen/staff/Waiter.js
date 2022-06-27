"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Receiption = void 0;
const Staff_1 = require("./Staff");
class Receiption extends Staff_1.Staff {
    constructor(id, name, age, phone, staffCategory, salary) {
        super(id, name, age, phone, staffCategory, salary);
    }
}
exports.Receiption = Receiption;
