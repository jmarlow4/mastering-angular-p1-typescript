# Part 1 - TypeScript
## 6 - Interfaces and Types

Interfaces let us do type checking on objects.

* Interfaces look a lot like objects already

* Optional members have a question mark at the end

```
  interface House {
    sqft: number
    style?: string
  }
```
* Declare a variable that's typed with an interface as you would any other
```
  const myHouse: House
```
* As expected, that variable will now ONLY accept objects "shaped" like the interface
```
  myHouse = {
    sqft: 2000,
    style: 'craftsman'
  }
```
* A common pattern is to prefix your interfaces with the letter "I" in order to differentiate it from classes

* You can also create 'readonly' properties on the interfaces that can only be defined upon first assignment
```
  interface IHouse {
    readonly numRooms: number
  }

  const myHouse: House = { numRooms: 4 }

  // can't do this
  myHouse.numRooms = 5
```

[Interface TypeScript docs](https://www.typescriptlang.org/docs/handbook/interfaces.html)