# Part 1 - TypeScript
## 4 - Functions

Functions are re-usable, executable blocks of code

* Function parameters can be strongly typed
```
  function returnStr(str: string) {
    return str
  }
```
* Function returns can also be typed
```
  function returnStr(str: string): string {
    return str
  }
```

* Entire functions can be typed to receive "shapes" of functions
```
  let returnStr: (str: string) => str

  returnStr = (str: string): string => {
    return str
  }
```

[Functions TypeScript docs](https://www.typescriptlang.org/docs/handbook/functions.html)