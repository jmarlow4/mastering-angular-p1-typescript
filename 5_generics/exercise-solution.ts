{
  // 1. Declare an untyped variable and define it with a string.
  const myString = 'foo'

  // 2. Declare and define a typed variable that can only receive numbers.
  let myNum: number = 42

  // 3. Try to assign the first variable to the second.
  myNum = myString

  // 4. Log the value of the second variable to the console.
  console.log(myNum)
}
