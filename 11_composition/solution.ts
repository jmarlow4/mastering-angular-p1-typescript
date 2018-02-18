{
  // 1. Create an interface called "Enemy" that has 2 members:
  //    - A string called "weapon"
  //    - A method that returns nothing called "attack"
  interface Enemy {
    weapon: string
    attack(): void
  }

  // 2. create a class called "Slime" that IMPLEMENTS the Enemy interface
  class Slime implements Enemy {

    // 3. The Constructor should take in a private readonly parameter property
    //    called "_color" that's typed to receive a string and a private parameter
    //    property called "_weapon" that's also typed to receive a string
    constructor(
      private readonly _color: string,
      private _weapon: string
    ) {}

    // 4. Create a getter for the "_weapon" property called "weapon."
    //    This will satisfy the "weapon" member of the Enemy interface
    get weapon(): string {
      return this._weapon
    }

    // 5. Implement the Enemy interface's "attack" member method. Have it log
    //    a sentence to the console that contains the values "_color" and
    //    "_weapon" properties
    //    example: "[color] slime strikes with it's [weapon]!"
    public attack() {
      console.log(`${this._color} slime strikes with it\'s ${this._weapon}!`)
    }
  }

  // 6. Create an instance of slime with a color and weapon of your choice and
  //    assign it to a const
  const greenSlime = new Slime('green', 'dagger')

  // 7. Invoke your new slime's "attack" method
  greenSlime.attack()
}
