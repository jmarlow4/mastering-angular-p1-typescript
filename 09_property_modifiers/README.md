# Part 1 - TypeScript
## 9 - Property Access Modifiers

Modifiers allow us to protect the properties and methods of our class.

* We don't always want every property or method to be accessible from outside

* By default all properties are made public
```
  class Boat {

    // the same as `length: number`
    public length: number
  
  }
```
* Choose one style and STICK to it!

* Properties can be defined in the constructor if you add a modifier in front of it's name
```
  class Boat {

    // same as above
    constructor(public length: number) {

      // And you don't need to do this!
      this.length = length

    }

  }
```

## Accessors
* Getters and Setters give you greater control over class properties
```
  class Boat {

    constructor(private _length: number) {}

    get length(): number {
      console.log('length has been accessed!')
      return this._length
    }

    set length(val: number) {
      this._length = val
      console.log(`length has become ${this._length}!`)
    }
  }

  let myBoat = new Boat(32)

  // This would normally do nothing, but now it calls the getter and "runs"
  // much like a function would!
  myBoat.length

  // This looks like a simple assignment, but it actually calls the 'length'
  // property's "setter"
  myBoat.length = 42
```
