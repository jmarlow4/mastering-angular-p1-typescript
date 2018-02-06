{
  function returnAny(arg: any): any {
    return arg
  }

  function genericExample<T>(arg: T): T {
    return arg
  }

  const typedFunction: <U>(arg: U) => U = returnAny

  console.log(returnAny('Ozzy'))
  console.log(genericExample<string>('Tony'))
  console.log(typedFunction<number>(1968))
}
