{
  // 1. Create a class called "Insect."
  class Insect {

    // 2. Create the constructor and have it take in a PRIVATE parameter called
    //    "_type" and have it typed to receive a string value.
    constructor(private _type: string) {}

    // 3. Create a public getter called "type" that returns the _type property.
    //    Have it typed to return a string value
    public get type(): string {
      return this._type
    }

    // 4. Create a method called "scurry" that takes a parameter
    //    called "distance" typed to receive a number value.
    //    Have it log a sentence out to the console that uses both
    //    the "_type" property and the method's "distance" argument value
    //    Example: "The ant has scurried 17 inches!"
    public scurry(distance: number) {
      console.log(`The ${this._type} has scurried ${distance} inches!`)
    }
  }

  // 5. Create a new instance of Insect and assign it whatever type you like
  //    as it's constructor argument. Assign this new instance to a const
  //    called myBug
  const myBug = new Insect('beetle')

  // 6. Log out myBug's type
  console.log(`My bug is a ${myBug.type}`)

  // 7. Invoke myBug's scurry method with any numerical value
  myBug.scurry(12)
}
