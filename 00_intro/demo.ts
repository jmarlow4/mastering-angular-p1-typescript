// TypeScript is a superset of JavaScript that lets you "strongly type" your code
// and compiles to clean JavaScript. You can use it AS NEEDED

const myVar: number = 42 /* becomes...
const myVar = 42 */

// This limits JavaScript’s “Tyranny of Freedom” and forces you to think about
// the kinds of values you’re passing back and forth
{
  const returnStringLength = (myStr) => {
    return myStr.length
  }

  console.log(returnStringLength(myVar))
}

{
  const returnStringLength = (myStr: string) => {
    return myStr.length
  }

  console.log(returnStringLength('foo'))
}
