{
  const myVar: number = 42 /* becomes...
  const myVar = 42 */

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
}
