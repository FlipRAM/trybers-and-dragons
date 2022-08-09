import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static count = 0;

  constructor(name: string, private _energyType: EnergyType = 'mana') {
    super(name);
    Necromancer.count += 1;
  }

  get energyType(): EnergyType { return this._energyType; }

  static createdArchetypeInstances(): number {
    return this.count;
  }
}