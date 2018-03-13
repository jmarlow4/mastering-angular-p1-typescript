# Part 1 - TypeScript
## 7 - Enums

Enums let you "enumerate" a constrained, well-defined set of named constants

* Enums are just objects (or arrays) in disguise and are used in cases where you'd rather not use numbers to represent things... why not just use those things?
```
  enum CharacterClasses {
    Fighter,
    Mage,
    Cleric,
    Rogue
  }
```
* This is a basic enum and it defaults to being "numeric"

* During runtime, enums become reverse-mappable JavaScript objects
```
  { 
    '0': 'Fighter',
    '1': 'Mage',
    '2': 'Cleric',
    '3': 'Rogue',
    Fighter: 0,
    Mage: 1,
    Cleric: 2,
    Rogue: 3
  }
```

* The first item defaults to 0, the second to 1, and so on...

* You can begin with a different number and it auto-increments from there
```
  enum CharacterClasses {
    Fighter = 1,
    Mage,
    Cleric,
    Rogue
  }

  // this evaluates to 2
  CharacterClasses.Mage
```
* All members in an enum are constants... meaning you can only assign them once upon first definition.
```
  // can't do this!
  CharacterClasses.Cleric = 5
```

* You can also create "string enums" where you explicitly set EACH value to a string literal.

* You must set each value because strings don't auto-increment.

* The advantage string enums have is in debugging during runtime, and you don't want opaque values.
```
  enum CharacterClasses {
    Fighter = 'fighter',
    Mage = 'mage',
    Cleric = 'cleric',
    Rogue = 'rogue'
  }

  // becomes...
  {
    Fighter: 'fighter',
    Mage: 'mage',
    Cleric: 'cleric',
    Rogue: 'rogue'
  }
```
* If computing requirements are tight and you really need a performance boost, use a "const enum"

* "const enums" cut out the object "middle man" and are just a numbers under the hood
```
  const enum CharacterClasses {
    Fighter,
    Mage,
    Cleric,
    Rogue
  }

  // becomes...
  0, 1, 2, 3
```
* Doing this is usually not necessary, but it's nice to know about it should the need arise.

* Keep in mind that if you do this, your enum is no longer reverse mappable, meaning you can't select it like an array index
```
  // will work...
  CharacterClasses.Rogue

  // won't work...
  CharacterClasses[3]
```

