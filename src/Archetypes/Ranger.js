"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Ranger extends Archetype_1.default {
    constructor(name, _energyType = 'stamina') {
        super(name);
        this._energyType = _energyType;
        Ranger.count += 1;
    }
    get energyType() { return this._energyType; }
    static createdArchetypeInstances() {
        return this.count;
    }
}
exports.default = Ranger;
Ranger.count = 0;
