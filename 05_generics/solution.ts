{
  // 1. Create a function that receives and returns a generically typed value
  function returnGeneric<T>(arg: T): T {
    return arg
  }

  // 2. Log the result of that function, with a string type argument,
  //    and given a string value
  console.log(returnGeneric<string>('Bruce'))

  // 3. Do the same as #2 but with numbers
  console.log(returnGeneric<number>(1975))
}
