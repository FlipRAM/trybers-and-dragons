import Race from './Race';

export default class Orc extends Race {
  static count = 0;

  constructor(
    name: string,
    dexterity: number,
    private _maxLifePoint: number = 74,
  ) {
    super(name, dexterity);
    Orc.count += 1;
  }

  static createdRacesInstances(): number {
    return this.count;
  }

  get maxLifePoints(): number { return this._maxLifePoint; }
}