{
  // Create a const enum called Colors and assign it Red, Green, and Blue members
  const enum Colors {
    Red,
    Green,
    Blue
  }

  // Declare a let variable typed to receive a Colors enum member
  let myColor: Colors

  // Assign that variable the Colors member enumerated as "Green"
  myColor = Colors.Green

  // Create an if statement that checks if the color is green.
  // If it is, log the value of this variable out to the console.
  // It should just be the number 1
  if (myColor === Colors.Green) {
    console.log(myColor)
  }
}
