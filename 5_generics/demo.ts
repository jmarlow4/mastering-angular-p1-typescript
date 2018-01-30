
function returnAny(arg: any): any {
  return arg
}

function returnGeneric<T>(arg: T): T {
  return arg
}

let typedFunction: <U>(arg: U) => U = returnAny

console.log(returnAny('Ozzy'))
console.log(returnGeneric<string>('Tony'))
console.log(typedFunction<number>(1968))

