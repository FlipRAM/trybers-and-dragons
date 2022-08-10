import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _characterFighter: Fighter;
  private _monsters: SimpleFighter[];

  constructor(characterFighter: Fighter, monsters: SimpleFighter[]) {
    super(characterFighter);
    this._characterFighter = characterFighter;
    this._monsters = monsters;
  }

  fight(): number {
    const monstersStatus = this._monsters.map((monster) => {
      this._characterFighter.attack(monster);
      monster.attack(this._characterFighter);
      if (super.fight() === -1) return 1;
      return -1;
    });
    if (monstersStatus.every((monster) => monster === -1)) { return 1; }
    return -1;
  }
}