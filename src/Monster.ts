import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number { return this._lifePoints; }

  get strength(): number { return this._strength; }

  receiveDamage(attackPoints: number): number {
    if (attackPoints > 0) {
      this._lifePoints -= attackPoints;
      return this.checkLife();
    }
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  checkLife(): number {
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
      return this._lifePoints;
    }
    return this._lifePoints;
  }
}