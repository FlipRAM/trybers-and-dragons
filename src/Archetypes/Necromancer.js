"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Necromancer extends Archetype_1.default {
    constructor(name, _energyType = 'mana') {
        super(name);
        this._energyType = _energyType;
        Necromancer.count += 1;
    }
    get energyType() { return this._energyType; }
    static createdArchetypeInstances() {
        return this.count;
    }
}
exports.default = Necromancer;
Necromancer.count = 0;
