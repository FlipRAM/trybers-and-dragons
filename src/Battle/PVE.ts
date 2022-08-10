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
    this._monsters.forEach((monster) => {
      do {
        this._characterFighter.attack(monster);
        monster.attack(this._characterFighter);
      } while (this._characterFighter.lifePoints > 0 && monster.lifePoints > 0);
    });
    return super.fight();
  }
}