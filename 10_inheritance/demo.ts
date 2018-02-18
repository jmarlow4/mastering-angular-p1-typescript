
{
  class Animal {

    constructor(private name: string) {}

    public move(distance: number = 0) {
        console.log(`Animal moved ${distance} feet.`);
    }
  }

  class Dog extends Animal {

    constructor(name: string) {
      super(name);
    }

    public bark() {
        console.log('Woof! Woof!');
    }
  }

  const dog = new Dog('Skippy');
  dog.bark();
  dog.move(10);
  dog.bark();
}
