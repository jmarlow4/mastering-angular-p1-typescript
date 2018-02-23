{
  // 1. Create an interface called Car with the following properties
  //  - numPassengers, typed to receive a number value
  //  - make (optional), typed to receive a string value
  //  - model, typed to receive a string value
  interface Car {
    numPassengers: number,
    make?: string,
    model: string
  }

  // 2. Create an interface called Motorcycle with the following properties
  //  - hasSideCar, typed to receive a boolean
  //  - make (optional), typed to receive a string
  //  - model, typed to receive a string
  interface Motorcycle {
    hasSideCar: boolean,
    make?: string,
    model: string
  }

  // 3. Create a function that...
  //  - receives a UNION type of Car and Motorcycle as it's only argument
  //  - logs the model to the console
  function logModel(vehicle: Car | Motorcycle): void {
    console.log(vehicle.model)
  }

  // 4. Make two function calls
  //  - pass in an object shaped like a "Car" with appropriate values
  //  assigned to it's properties
  //  - Do the same but with a "Motorcycle"
  logModel({numPassengers: 5, make: 'Honda', model: 'Accord'})
  logModel({hasSideCar: false, make: 'Harley', model: 'Sportster'})
}
