import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _characterOne: Fighter;
  private _characterTwo: Fighter;

  constructor(characterOne: Fighter, characterTwo: Fighter) {
    super(characterOne);
    this._characterOne = characterOne;
    this._characterTwo = characterTwo;
  }

  fight(): number {
    do {
      this._characterOne.attack(this._characterTwo);
      this._characterTwo.attack(this._characterOne);
    } while (
      this._characterOne.lifePoints > 0 && this._characterTwo.lifePoints > 0
    );
    return super.fight();
  }
}