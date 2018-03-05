# Part 1 - TypeScript
## 11 - Composition

Composition is another way to reuse code by having classes "implement" interfaces, not "extending" other classes.

Let's revisit our prior example, but this time, Item is an interface that DEMANDS a string property called "name" and a method called "sell" be defined, that takes a single number parameter and has no returns
```
  interface Item {
    name: string
    sell(numCoins: number): void
  }
```

For the weapon interface we're going to declare one property, the durability of the weapon.

*Note: the Weapon interface could also "extend" the Item interface just like a class, but we won't do that here in order to preserve the flexible nature of the composition concept.*
```
  interface Weapon {
    durability: number
  }
```

In our sword class, we can see the 'implements' clause which lets TypeScript know that we're going to need to define the properties and methods outlined in the Item and Weapon interfaces.
```
  class Sword implements Item, Weapon {

    constructor(
      public name: string,
      public durability: number
    ) {}

    public slash() {
      this.durability--
      console.log(`Just slashed with ${this.name}`)
    }

    sell(numCoins: number): void {
      console.log(`Just sold ${this.name} for ${numCoins} pieces of gold!`)
    }
  }
```

This is why interfaces and compositions are so useful. Imagine we want to give an enemy in the game a sword, but it doesn't need a name, and it doesn't need to be sold, so it'll never need to implement the Item interface. This is what I meant by "flexible nature of composition."

And because our sword class implements both Item and Weapon classes, any instance created with can be received by anything TYPED as those interfaces
```
  const mySword = new Sword('claymore', 42)

  function checkDurability(weapon: Weapon) {
    console.log(`my weapon's durability is currently ${weapon.durability}!`)
  }

  checkDurability(mySword)
```

