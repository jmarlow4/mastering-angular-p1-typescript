# Part 1 - TypeScript
## 2 - Variables and Basic Types

Variables are the basic "building blocks" of programming. The six basic primitives of JavaScript are:
* [string](https://developer.mozilla.org/en-US/docs/Glossary/string) - a "string" of text
    * `let myString: string = 'fiddlesticks!'`

* [number](https://developer.mozilla.org/en-US/docs/Glossary/number) - any numerical value
    * `let myNum: number = 3`

* [boolean](https://developer.mozilla.org/en-US/docs/Glossary/boolean) - true/false
    * `let myBool: boolean = true`

* [null](https://developer.mozilla.org/en-US/docs/Glossary/null) - an arbitrary falsey value
    * `let myNull: null = null`

* [undefined](https://developer.mozilla.org/en-US/docs/Glossary/undefined) - when a variable is declared but isn't defined (assigned a value)
    * `let myUndefined: undefined = undefined`

* [symbol](https://www.typescriptlang.org/docs/handbook/symbols.html) -  anonymous object property

    *   ```
        let sym: Symbol = Symbol();

        let obj = {
            [sym]: "value"
        };

        console.log(obj[sym]); // "value"
        ```
## Helpful Links

[Basic Types -  TypeScript docs](https://www.typescriptlang.org/docs/handbook/basic-types.html)

[Variable Declarations -  TypeScript docs](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)