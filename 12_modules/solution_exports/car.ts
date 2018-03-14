// Define and export a class called "Car"
export class Car {

  // Construct it with a public parameter property called "make" that takes a string
  constructor(public make: string) {}

  // Create a method called "revEngine" and have it log a sentence to the console
  // that contains the car's make
  revEngine() {
    console.log(`My ${this.make} goes vroom`)
  }

}
