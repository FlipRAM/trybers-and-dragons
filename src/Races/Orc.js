"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Orc extends Race_1.default {
    constructor(name, dexterity, _maxLifePoint = 74) {
        super(name, dexterity);
        this._maxLifePoint = _maxLifePoint;
        Orc.count += 1;
    }
    static createdRacesInstances() {
        return this.count;
    }
    get maxLifePoints() { return this._maxLifePoint; }
}
exports.default = Orc;
Orc.count = 0;
