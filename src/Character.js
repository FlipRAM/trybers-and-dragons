"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetypes_1 = require("./Archetypes");
const Races_1 = require("./Races");
const utils_1 = require("./utils");
class Character {
    constructor(_name) {
        this._name = _name;
        this._race = new Races_1.Elf('', Math.round(Math.random() * 10));
        this._archetype = new Archetypes_1.Mage('');
        this._maxLifePoints = this._race.maxLifePoints / 2;
        this._lifePoints = this._race.maxLifePoints / 2;
        this._strength = Math.round(Math.random() * 10);
        this._defense = Math.round(Math.random() * 10);
        this._dexterity = this._race.dexterity || Math.round(Math.random() * 10);
        this._energy = {
            type_: this._archetype.energyType, amount: Math.round(Math.random() * 10),
        };
    }
    get race() { return this._race; }
    get archetype() { return this._archetype; }
    get lifePoints() { return this._lifePoints; }
    get strength() { return this._strength; }
    get defense() { return this._defense; }
    get dexterity() { return this._dexterity; }
    get energy() {
        const toReturn = Object.assign({}, this._energy);
        return toReturn;
    }
    receiveDamage(attackPoints) {
        const damage = attackPoints - this._defense;
        if (damage > 0) {
            this._lifePoints -= damage;
            return this.checkLife();
        }
        return this._lifePoints;
    }
    attack(enemy) {
        enemy.receiveDamage(this._strength);
    }
    levelUp() {
        this.upgradeMaxLife();
        this.healUP();
        this._strength += (0, utils_1.default)(1, 10);
        this._dexterity += (0, utils_1.default)(1, 10);
        this._defense += (0, utils_1.default)(1, 10);
        this._energy.amount = 10;
    }
    checkLife() {
        if (this._lifePoints <= 0) {
            this._lifePoints = -1;
            return this._lifePoints;
        }
        return this._lifePoints;
    }
    upgradeMaxLife() {
        const newLife = this._maxLifePoints + (0, utils_1.default)(1, 10);
        if (newLife > this._race.maxLifePoints) {
            this._maxLifePoints = this._race.maxLifePoints;
        }
        else {
            this._maxLifePoints = newLife;
        }
    }
    healUP() {
        this._lifePoints = this._maxLifePoints;
    }
}
exports.default = Character;
