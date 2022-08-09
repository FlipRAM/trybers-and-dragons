import Race from './Race';

export default class Elf extends Race {
  static count = 0;

  constructor(
    name: string,
    dexterity: number,
    private _maxLifePoint: number = 99,
  ) {
    super(name, dexterity);
    Elf.count += 1;
  }

  static createdRacesInstances(): number {
    return this.count;
  }

  get maxLifePoints(): number { return this._maxLifePoint; }
}