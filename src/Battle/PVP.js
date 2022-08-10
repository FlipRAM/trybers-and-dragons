"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVP extends Battle_1.default {
    constructor(characterOne, characterTwo) {
        super(characterOne);
        this._characterOne = characterOne;
        this._characterTwo = characterTwo;
    }
    fight() {
        do {
            this._characterOne.attack(this._characterTwo);
            this._characterTwo.attack(this._characterOne);
        } while (this._characterOne.lifePoints > 0 && this._characterTwo.lifePoints > 0);
        return super.fight();
    }
}
exports.default = PVP;
