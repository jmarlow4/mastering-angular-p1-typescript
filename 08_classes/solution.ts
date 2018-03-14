{
  // 1. Create a class called HotDog.
  class HotDog {

    // 2. Give it a property called "condiments" that's typed to receive
    //    an array of strings.
    condiments: string[]

    // 3. Create the constructor, in which a "condiments" parameter is typed
    //    to receive an array of strings.
    constructor(condiments: string[]) {

      // 4. Set the "condiments" property to the value of the "condiments"
      //    parameter inside the constructor block.
      this.condiments = condiments
    }

    // 5. Create a method inside the HotDog class called "listCondiments" that
    //    logs the "condiments" property out to the console.
    listCondiments(): void {
      for (const condiment of this.condiments) {
        console.log(condiment)
      }
    }
  }

  // 6. Create a new instance of the HotDog called "myHotDog" and put some
  //    condiments on it! I suggest ketchup and mustard.
  const myHotDog = new HotDog(['ketchup', 'mustard'])

  // 7. Invoke myHotDog's listCondiments method and watch your condiments.
  myHotDog.listCondiments()

}

