import Uuid from "../shared/Uuid";

export default class Equipment {
  id: string;
  name: string;

  static create(name: string): Equipment {
    const equipment = new Equipment();
    equipment.id = Uuid.generate();
    equipment.name = name;
    return equipment;
  }
}
