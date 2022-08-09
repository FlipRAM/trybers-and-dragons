import Race from './Race';

export default class Halfling extends Race {
  static count = 0;

  constructor(
    name: string,
    dexterity: number,
    private _maxLifePoint: number = 60,
  ) {
    super(name, dexterity);
    Halfling.count += 1;
  }

  static createdRacesInstances(): number {
    return this.count;
  }

  get maxLifePoints(): number { return this._maxLifePoint; }
}