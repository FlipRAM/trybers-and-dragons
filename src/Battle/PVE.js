"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVE extends Battle_1.default {
    constructor(characterFighter, monsters) {
        super(characterFighter);
        this._characterFighter = characterFighter;
        this._monsters = monsters;
    }
    fight() {
        this._monsters.forEach((monster) => {
            do {
                this._characterFighter.attack(monster);
                monster.attack(this._characterFighter);
            } while (this._characterFighter.lifePoints > 0 && monster.lifePoints > 0);
        });
        return super.fight();
    }
}
exports.default = PVE;
