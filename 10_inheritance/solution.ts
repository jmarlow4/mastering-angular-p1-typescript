{
  // 1. Create a class called "Computer"
  class Computer {

    // 2. The constructor should have a single property parameter called "memory"
    //    and it should be typed to receive a number value
    constructor(private memory: number) {}

    // 3. Create a logMemory method that logs out the memory to the console
    public logMemory() {
      console.log(`Device has ${this.memory} gb of memory`)
    }
  }

  // 4. Create a class called "Phone"that extends the "Computer" class
  class Phone extends Computer {

    // 5. The "Phone" constructor should receive a string property parameter
    //    called "manufacturer" and a regular parameter called "memory"
    constructor(
      private manufacturer: string,
      memory: number
    ) {
      // 6. Inside the constructor's block call "super" and pass in "memory."
      //    This makes sure the "Computer" aspect of the Phone instance
      //    is properly set up.
      super(memory)
    }

    // 7. Create a method in the Phone class named "call." Have it console.log
    //    a plain sentence that indicates that the phone is making a call
    public call() {
      console.log('Calling now...')
    }
  }

  // 8. Create an instance of Phone and pass in a manufacturer and number
  //    for memory. Assign this instance to a const named myPhone
  const myPhone = new Phone('Sangsum', 4)

  // 9. Invoke the phone's logMemory and call methods
  myPhone.logMemory()
  myPhone.call()
}