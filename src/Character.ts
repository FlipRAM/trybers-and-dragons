import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(private _name: string) {
    this._race = new Elf('', Math.round(Math.random() * 10));
    this._archetype = new Mage('');
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._race.maxLifePoints / 2;
    this._strength = Math.round(Math.random() * 10);
    this._defense = Math.round(Math.random() * 10);
    this._dexterity = this._race.dexterity || Math.round(Math.random() * 10);
    this._energy = {
      type_: this._archetype.energyType, amount: Math.round(Math.random() * 10),
    };
  }

  get race(): Race { return this._race; }

  get archetype(): Archetype { return this._archetype; }

  get lifePoints(): number { return this._lifePoints; }

  get strength(): number { return this._strength; }

  get defense(): number { return this._defense; }

  get dexterity(): number { return this._dexterity; }

  get energy(): Energy { 
    const toReturn = { ...this._energy };
    return toReturn;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
      return this.checkLife();
    }
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this.upgradeMaxLife();
    this.healUP();
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
  }

  checkLife(): number {
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
      return this._lifePoints;
    }
    return this._lifePoints;
  }

  upgradeMaxLife(): void {
    const newLife = this._maxLifePoints + getRandomInt(1, 10);
    if (newLife > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    } else {
      this._maxLifePoints = newLife;
    }
  }

  healUP(): void {
    this._lifePoints = this._maxLifePoints;
  }
}