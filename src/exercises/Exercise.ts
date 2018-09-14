import Uuid from "../shared/Uuid";

export default class Exercise {
  id: string;
  name: string;

  static create(name: string): Exercise {
    const exercise = new Exercise();
    exercise.id = Uuid.generate();
    exercise.name = name;
    return exercise;
  }
}
