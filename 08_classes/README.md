# Part 1 - TypeScript
## 8 - Classes

Classes are reusable templates that create instances in the form of objects. Think of a class as a stack of sticky notes. Every time you instantiate a class by calling it's constructor, you're peeling off a note and pasting it somewhere
```
  // class declaration
  class StickyNote {

    // properties...
    text: string

    // constructor
    constructor(text: string) {
      this.text = text
    }

    // methods...
    readNote() {
      console.log('my note says: ' + this.text)
    }
  }
```
* There are 5 parts to a class

    * Declaration - Where we define a class' name

    * Properties - The internal values of the class. When you create an instance of a class, all of it's values will be unique to "THIS" instance

    * Constructor - It is what it sounds, this is the function that "constructs" new instances of this class

    * Methods - functions that belong to the class as members, and are used by instances of that class

    * THIS!! - a reference to the instance of the class that you're working with

## How do we create an instance of this class?

Use the 'new' keyword and call the constructor
```
  // creates a new instance of StickyNote, with it's own "this" to which
  // it's text property is set to the string 'pick up dry cleaning'
  const myNote = new StickyNote('pick up dry cleaning')
```
* Class properties can be accessed by default
```
  // evaluates to the string 'pick up dry cleaning'
  myNote.text
```
* Methods can be called
```
  // will evoke myNote's readNote method, which logs the text property
  myNote.readNote()
```



