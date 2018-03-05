# Part 1 - TypeScript
## 11 - Composition

Composition is another way to reuse code by having classes "implement" interfaces, not "extending" other classes.

Let's revisit our prior example, but this time, Item is an interface that DEMANDS a string property called "name" and a method called "sell" be defined, that takes no parameters and has no returns
```
  interface Item {
    name: string
    sell(): void
  }
```

