/* eslint no-underscore-dangle: 0 */

export const charactersTypes = [
  'Bowman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
];

export default class Character {
  constructor(name, type, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }

  set name(value) {
    if (value.length >= 2 && value.length <= 10) {
      this._name = value;
    } else {
      throw new Error('длина параметра: min - 2, max - 10 символов');
    }
  }

  get name() {
    return this._name;
  }

  set type(value) {
    if (charactersTypes.includes(value)) {
      this._type = value;
    } else {
      throw new Error(
        'выберите один из типов: Bowman, Swordsman, Magician, Daemon, Undead, Zombie',
      );
    }
  }

  get type() {
    return this._type;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('нельзя повысить левел умершего');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('игрок уже умер');
    }
  }
}
