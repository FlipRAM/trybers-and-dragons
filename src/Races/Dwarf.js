"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Dwarf extends Race_1.default {
    constructor(name, dexterity, _maxLifePoint = 80) {
        super(name, dexterity);
        this._maxLifePoint = _maxLifePoint;
        Dwarf.count += 1;
    }
    static createdRacesInstances() {
        return this.count;
    }
    get maxLifePoints() { return this._maxLifePoint; }
}
exports.default = Dwarf;
Dwarf.count = 0;
