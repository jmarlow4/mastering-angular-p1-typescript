# Part 1 - TypeScript
## 5 - Generics

Generics are type-flexible expressions and lets us create code that accepts a variety of types rather than a single one.

* The syntax uses angle braces ( < > )
```
  function identity<T>(arg: T): T {
      return arg;
  }
```
* The <T> is called a "Type Parameter" and what you put in it once you call the function is called a "Type Argument"

* Commonly used in existing APIs
```
  const myPromise = new Promise<string>((resolve, reject) => { 
    resolve('a string'); 
  });
```