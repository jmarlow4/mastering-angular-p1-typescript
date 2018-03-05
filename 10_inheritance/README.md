# Part 1 - TypeScript
## 10 - Inheritance

Inheritance is a classic object-oriented concept where one class is based on or "inherits from" another. A common example is how, if we're writing a game, the "Sword" class might inherit from a "Weapon" class that would then inherit from an "Item" class.

In the constructor of the Item class, we declare a 'protected' property. That's a modifier that specifies that only child classes (classes that inherit from this one) can access this property. We also add a "sell" method.
```
  class Item {

    constructor( protected readonly name: string ) {}

    public sell(numCoins: number) {
      console.log(`Just sold ${this.name} for ${numCoins} pieces of gold!`)
    }
  }
```

This "Weapon" class "extends" (or inherits from) the "Item" class. If you create it's own constructor we need to be sure to call "super" inside of it's block. This calls the parent class's constructor (Item) and so it expects a string argument.
```
  class Weapon extends Item {

    constructor(
      weaponName: string,
      protected durability: number
    ) {
      super(weaponName)
    }
  }
```

Finally, we create the "Sword" class that extends from the "Weapon" class. We're not going to give it a constructor, so it's going to inherit it from the Weapon class by default. We create a method that modifies the "durability" property provided by the Weapon class and logs out the "name" property provided by the Item class. 
```
  class Sword extends Weapon {

    public slash() {
      this.durability--
      console.log(`Just slashed with ${this.name}`)
    }
  }
```

Here we use the Sword's constructor to create a new instance of the Sword class. Remember that the constructor here is inherited from the Weapon class. The "mySword" instance now has access to all the methods and properties it has inherited from both the Weapon and Item classes 
```
  const mySword = new Sword('cutlass', 120)

  mySword.slash()

  // Inherited ALL THE WAY from the Item class
  mySword.sell(32)
```