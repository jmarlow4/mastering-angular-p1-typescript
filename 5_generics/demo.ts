
function returnAny(arg: any): any {
  return arg
}

function returnGeneric<T>(arg: T): T {
  return arg
}

let typedFunction: <U>(arg: U) => U = returnAny

console.log(returnAny('Bruce'))
console.log(returnGeneric<string>('Steve'))
console.log(typedFunction<number>(1968))

enum Color {Red = 7, Green, Blue}
let c: string = Color[7]

console.log(c)

let someValue: any = 'this is a string'

let strLength: number = (someValue as string).length
