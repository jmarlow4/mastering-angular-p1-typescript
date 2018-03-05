{
  interface Person {
    firstName: string
    lastName: string
    fullName: string
    introduceSelf(): void
  }

  class Student implements Person {
    
    private _fullName: string
    
    constructor(
      public readonly firstName: string,
      public middleInitial: string,
      public lastName: string
    ) {
        this._fullName = firstName + ' ' + middleInitial + ' ' + lastName
    }

    get fullName(): string {
      return this._fullName
    }

    public introduceSelf() {
      console.log(`Hello, my name is ${this._fullName}`)
    }
  }

  const user = new Student('Jane', 'M.', 'User')
  user.introduceSelf()

  function enrollPerson(person: Person) {
    console.log(`${person.fullName} is enrolled!`)
  }

  enrollPerson(user)
}
