{
  function addTwo(num1: number, num2: number): number {
    return num1 + num2
  }

  let addThree: (num1: number, num2: number, num3: number) => number

  addThree = (num1: number, num2: number, num3: number) => {
    return num1 + num2 + num3
  }

  console.log(addTwo(2, 3))
}
