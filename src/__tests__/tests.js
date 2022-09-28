import Zombie from '../js/Zombie';
import Daemon from '../js/Daemon';
import Undead from '../js/Undead';
import Magician from '../js/Magician';
import Swordsman from '../js/Swordsman';
import Bowman from '../js/Bowman';
import Character from '../js/Character';

describe('Класс Character', () => {
  test('Определён', () => {
    expect(Character).toBeDefined();
  });
  test('Создаёт экземпляр Character с нужными параметрами', () => {
    const item = new Character('item', 'Bowman', 25, 25);
    expect(item).toBeInstanceOf(Character);
  });

  test.each([
    ['Alex', 'Bowman', 25, 25, ['Alex', 'Bowman', 25, 25]],
    ['Victor', 'Daemon', 10, 40, ['Victor', 'Daemon', 10, 40]],
    ['Dave', 'Magician', 10, 40, ['Dave', 'Magician', 10, 40]],
    ['Ann', 'Swordsman', 40, 10, ['Ann', 'Swordsman', 40, 10]],
    ['Mr', 'Undead', 25, 25, ['Mr', 'Undead', 25, 25]],
    ['Vlad', 'Zombie', 40, 10, ['Vlad', 'Zombie', 40, 10]],
  ])(
    'Создаёт экземпляр Character с параметрами name: %s type: %s attack: %i defence: %i',
    (name, type, attack, defence, object) => {
      const character = new Character(...object);
      expect(character.name).toBe(name);
      expect(character.type).toBe(type);
      expect(character.health).toBe(100);
      expect(character.level).toBe(1);
      expect(character.attack).toBe(attack);
      expect(character.defence).toBe(defence);
    },
  );
  test.each([
    ['A', ['A', 'Bowman', 25, 25]],
    ['Victorisgreatest', ['Victorisgreatest', 'Daemon', 10, 40]],
  ])('Выдает ошибку с параметрами name: %s', (name, object) => {
    function errorCharacter() {
      new Character(...object);
    }
    expect(errorCharacter).toThrowError(
      new Error('длина параметра: min - 2, max - 10 символов'),
    );
  });
  test.each([
    ['Bowma', ['Alex', 'Bowma', 25, 25]],
    ['Vampire', ['Victor', 'Vampire', 10, 40]],
  ])('Выдает ошибку с параметрами type: %s', (type, object) => {
    function errorCharacter() {
      new Character(...object);
    }
    expect(errorCharacter).toThrowError(
      new Error(
        'выберите один из типов: Bowman, Swordsman, Magician, Daemon, Undead, Zombie',
      ),
    );
  });
});

describe('Методы класса Character', () => {
  const bowman = new Character('item', 'Bowman', 25, 25);
  beforeEach(() => {
    bowman.level = 1;
    bowman.health = 80;
    bowman.attack = 25;
    bowman.defence = 25;
  });

  test('Вызывает метод levelUp у экземпляра класса Character', () => {
    bowman.levelUp();
    expect(bowman.level).toBe(2);
    expect(bowman.attack).toBe(25 * 1.2);
    expect(bowman.defence).toBe(25 * 1.2);
    expect(bowman.health).toBe(100);
  });
  test('Выдает ошибку метод levelUp если health = 0', () => {
    bowman.health = 0;
    function errorlevelUp() {
      bowman.levelUp();
    }
    expect(errorlevelUp).toThrowError(
      new Error('нельзя повысить левел умершего'),
    );
  });
  test('Вызывает метод damage(points) у экземпляра класса Character', () => {
    bowman.damage(100);
    expect(bowman.health).toBe(5);
  });
  test('Выдает ошибку метод damage если health < 0', () => {
    bowman.health = -1;
    function errorDamage() {
      bowman.damage(20);
    }
    expect(errorDamage).toThrowError(new Error('игрок уже умер'));
  });
});

describe('Класс Bowman', () => {
  const item = new Bowman('item');
  test('Определён', () => {
    expect(Bowman).toBeDefined();
  });
  test('Создаёт экземпляр Bowman с нужными параметрами', () => {
    expect(item).toBeInstanceOf(Bowman);
    expect(item).toBeInstanceOf(Character);
    expect(item.name).toBe('item');
    expect(item.type).toBe('Bowman');
    expect(item.health).toBe(100);
    expect(item.level).toBe(1);
    expect(item.attack).toBe(25);
    expect(item.defence).toBe(25);
    item.damage(20);
    expect(item.health).toBe(85);
    item.levelUp();
    expect(item.health).toBe(100);
    expect(item.level).toBe(2);
    expect(item.attack).toBe(25 * 1.2);
    expect(item.defence).toBe(25 * 1.2);
  });
});

describe('Класс Undead', () => {
  const item = new Undead('item');
  test('Определён', () => {
    expect(Undead).toBeDefined();
  });
  test('Создаёт экземпляр Undead с нужными параметрами', () => {
    expect(item).toBeInstanceOf(Undead);
    expect(item).toBeInstanceOf(Character);
    expect(item.name).toBe('item');
    expect(item.type).toBe('Undead');
    expect(item.health).toBe(100);
    expect(item.level).toBe(1);
    expect(item.attack).toBe(25);
    expect(item.defence).toBe(25);
    item.damage(20);
    expect(item.health).toBe(85);
    item.levelUp();
    expect(item.health).toBe(100);
    expect(item.level).toBe(2);
    expect(item.attack).toBe(25 * 1.2);
    expect(item.defence).toBe(25 * 1.2);
  });
});

describe('Класс Daemon', () => {
  const item = new Daemon('item');
  test('Определён', () => {
    expect(Daemon).toBeDefined();
  });

  test('Создаёт экземпляр Daemon с нужными параметрами', () => {
    expect(item).toBeInstanceOf(Daemon);
    expect(item).toBeInstanceOf(Character);
    expect(item.name).toBe('item');
    expect(item.type).toBe('Daemon');
    expect(item.health).toBe(100);
    expect(item.level).toBe(1);
    expect(item.attack).toBe(10);
    expect(item.defence).toBe(40);
    item.damage(20);
    expect(item.health).toBe(88);
    item.levelUp();
    expect(item.health).toBe(100);
    expect(item.level).toBe(2);
    expect(item.attack).toBe(10 * 1.2);
    expect(item.defence).toBe(40 * 1.2);
  });
});

describe('Класс Magician', () => {
  const item = new Magician('item');
  test('Определён', () => {
    expect(Magician).toBeDefined();
  });

  test('Создаёт экземпляр Magician с нужными параметрами', () => {
    expect(item).toBeInstanceOf(Magician);
    expect(item).toBeInstanceOf(Character);
    expect(item.name).toBe('item');
    expect(item.type).toBe('Magician');
    expect(item.health).toBe(100);
    expect(item.level).toBe(1);
    expect(item.attack).toBe(10);
    expect(item.defence).toBe(40);
    item.damage(20);
    expect(item.health).toBe(88);
    item.levelUp();
    expect(item.health).toBe(100);
    expect(item.level).toBe(2);
    expect(item.attack).toBe(10 * 1.2);
    expect(item.defence).toBe(40 * 1.2);
  });
});

describe('Класс Swordsman', () => {
  const item = new Swordsman('item');
  test('Определён', () => {
    expect(Swordsman).toBeDefined();
  });

  test('Создаёт экземпляр Swordsman с нужными параметрами', () => {
    expect(item).toBeInstanceOf(Swordsman);
    expect(item).toBeInstanceOf(Character);
    expect(item.name).toBe('item');
    expect(item.type).toBe('Swordsman');
    expect(item.health).toBe(100);
    expect(item.level).toBe(1);
    expect(item.attack).toBe(40);
    expect(item.defence).toBe(10);
    item.damage(20);
    expect(item.health).toBe(82);
    item.levelUp();
    expect(item.health).toBe(100);
    expect(item.level).toBe(2);
    expect(item.attack).toBe(40 * 1.2);
    expect(item.defence).toBe(10 * 1.2);
  });
});

describe('Класс Zombie', () => {
  const item = new Zombie('item');
  test('Определён', () => {
    expect(Zombie).toBeDefined();
  });

  test('Создаёт экземпляр Zombie с нужными параметрами', () => {
    expect(item).toBeInstanceOf(Zombie);
    expect(item).toBeInstanceOf(Character);
    expect(item.name).toBe('item');
    expect(item.type).toBe('Zombie');
    expect(item.health).toBe(100);
    expect(item.level).toBe(1);
    expect(item.attack).toBe(40);
    expect(item.defence).toBe(10);
    item.damage(20);
    expect(item.health).toBe(82);
    item.levelUp();
    expect(item.health).toBe(100);
    expect(item.level).toBe(2);
    expect(item.attack).toBe(40 * 1.2);
    expect(item.defence).toBe(10 * 1.2);
  });
});
