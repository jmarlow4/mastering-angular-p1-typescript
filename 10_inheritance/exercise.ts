{
  // 1. Create a class called "Computer"


    // 2. The constructor should have a single property parameter called "memory"
    //    and it should be typed to receive a number value


    // 3. Create a logMemory method that logs out the memory to the console
    


  // 4. Create a class called "Phone"that extends the "Computer" class


    // 5. The "Phone" constructor should receive a string property parameter
    //    called "manufacturer" and a regular parameter called "memory"


      // 6. Inside the constructor's block call "super" and pass in "memory."
      //    This makes sure the "Computer" aspect of the Phone instance
      //    is properly set up.


    // 7. Create a method in the Phone class named "call." Have it console.log
    //    a plain sentence that indicates that the phone is making a call


  // 8. Create an instance of Phone and pass in a manufacturer and number
  //    for memory. Assign this instance to a const named myPhone


  // 9. Invoke the phone's logMemory and call methods
  class Item {

    constructor( protected readonly name: string ) {}

    public sell(numCoins: number) {
      console.log(`Just sold ${this.name} for ${numCoins} pieces of gold!`)
    }
  }

  class Weapon extends Item {

    constructor(
      weaponName: string,
      protected durability: number
    ) {
      super(weaponName)
    }

  }

  class Sword extends Weapon {

    public slash() {
      this.durability--
      console.log(`Just slashed with ${this.name}`)
    }
  }

  const mySword = new Sword('cutlass', 120)
  mySword.slash()
  
  // We inherit this all the way from the base Item class
  mySword.sell(32)
  
}