# Part 1 - TypeScript
## 12 - Modules

We're not going to write all of our code in a single file, so we need a way to mark certain pieces of code in order to "export" and "import" from one file to another.

First let's create our folder structure, wherein we have a `main.ts` file (our program's entry point), and in that same folder, there's a folder called `classes` with two TypeScript files in it, `house.ts` and `index.ts` 
```
  [folder] classes
  | (file) index.ts
  | (file) house.ts

  (file) main.ts
```

In the `house.ts` file we define an EXPORTED class called `House`
```
  // ./classes/house.ts

  export class House {
    constructor(private numRooms: number) {}
  }
```

In the `index.ts` file, we're going to create a "barrel." That's a pattern where we export everything from the files you specify. So let's export everything in the `house.ts` file from this particular folder
```
  // ./classes/index.ts

  export * from './house'
```

In the `main.ts` file, we can `import` the `House` class directly from the classes folder, without explicitly listing the `house.ts` filename. This is because of the "barrel" we set up with the `index.ts` file.
```
  // ./main.ts

  import { House } from './classes'

  const myHouse = new House(4)
```
