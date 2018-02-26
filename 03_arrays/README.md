# Part 1 - TypeScript
## 3 - Arrays

A serialized, indexed collection of values

* There are two ways to define an array in TypeScript

    * `let list: number[] = [1, 2, 3];`

    * `let list: Array<number> = [1, 2, 3];`

* Always prefer the first way

* You can also use "union types" like so...

    * `let list: (number | string)[] = [1, 'two', 3];`

    * NOT like this: `let list: number | string[] = [1, 'two', 3];`

[Array TypeScript docs](https://www.typescriptlang.org/docs/handbook/basic-types.html#array)