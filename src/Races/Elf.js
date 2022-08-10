"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Elf extends Race_1.default {
    constructor(name, dexterity, _maxLifePoint = 99) {
        super(name, dexterity);
        this._maxLifePoint = _maxLifePoint;
        Elf.count += 1;
    }
    static createdRacesInstances() {
        return this.count;
    }
    get maxLifePoints() { return this._maxLifePoint; }
}
exports.default = Elf;
Elf.count = 0;
