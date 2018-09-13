export default class Equipment {
  id: string;
  name: string;

  static create(id: string, name: string): Equipment {
    const equipment = new Equipment();
    equipment.id = id;
    equipment.name = name;
    return equipment;
  }
}
