"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Monster {
    constructor() {
        this._lifePoints = 85;
        this._strength = 63;
    }
    get lifePoints() { return this._lifePoints; }
    get strength() { return this._strength; }
    receiveDamage(attackPoints) {
        if (attackPoints > 0) {
            this._lifePoints -= attackPoints;
            return this.checkLife();
        }
        return this._lifePoints;
    }
    attack(enemy) {
        enemy.receiveDamage(this._strength);
    }
    checkLife() {
        if (this._lifePoints <= 0) {
            this._lifePoints = -1;
            return this._lifePoints;
        }
        return this._lifePoints;
    }
}
exports.default = Monster;