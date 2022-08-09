import Race from './Race';

export default class Dwarf extends Race {
  static count = 0;

  constructor(
    name: string,
    dexterity: number,
    private _maxLifePoint: number = 80,
  ) {
    super(name, dexterity);
    Dwarf.count += 1;
  }

  static createdRacesInstances(): number {
    return this.count;
  }

  get maxLifePoints(): number { return this._maxLifePoint; }
}