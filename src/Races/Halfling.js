"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Halfling extends Race_1.default {
    constructor(name, dexterity, _maxLifePoint = 60) {
        super(name, dexterity);
        this._maxLifePoint = _maxLifePoint;
        Halfling.count += 1;
    }
    static createdRacesInstances() {
        return this.count;
    }
    get maxLifePoints() { return this._maxLifePoint; }
}
exports.default = Halfling;
Halfling.count = 0;
