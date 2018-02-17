{
  // 1. Create a function declaration called addTwo that does the following:
  //  - takes two numbers as it's parameters
  //  - the second parameter must be optional
  //    - make sure you add a contingency for when the second param isn't provided
  //  - is typed to return a number
  //  - Have it return the addition of it's two parameters
  function addTwo(add1: number, add2?: number): number {
    return add1 + ( add2 || 0 )
  }

  // 2. Declare a variable called addThree that is typed to accept the following:
  //  - a function that accepts three parameters
  //  - all three parameters are typed to receive number values
  //  - the function must be typed to return a number value
  let addThree: (num1: number, num2: number, num3?: number) => number

  // 3. Define addThree with a function expression that fits it's expected type.
  //  - it must accept three parameters
  //  - it's typed to return a number
  //  - the function expression returns all three parameters added together
  addThree = (num1: number, num2: number, num3: number): number => {
    return num1 + num2 + num3
  }

  // 4. Log these function calls to the console
  //  - addTwo with one argument
  console.log(addTwo(1))

  //  - addTwo with two arguments
  console.log(addTwo(2, 3))

  //  - addThree with all three arguments
  console.log(addThree(3, 3, 3))

}
