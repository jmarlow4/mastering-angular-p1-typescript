
{
  class Animal {

    constructor(private name: string) {}

    public move(distance: number = 0) {
      console.log(`${this.name} moved ${distance} feet.`)
    }

    protected eat(food: string) {
      console.log(`${this.name} eats ${food}`)
    }

  }

  class Dog extends Animal {

    constructor(name: string) {
      super(name)
      this.eat('kibble')
    }

    public bark() {
      console.log('Woof! Woof!')
    }
  }

  const dog = new Dog('Skippy')
  dog.bark()
  dog.move(10)
  // dog.eat('bacon')
  dog.bark()
}
