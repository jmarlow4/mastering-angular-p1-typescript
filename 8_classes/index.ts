class Student implements Person {
  public fullName: string
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
      this.fullName = firstName + ' ' + middleInitial + ' ' + lastName
  }

  public introduceSelf() {
    console.log(`Hello, my name is ${this.fullName}`)
  }
}

interface Person {
  firstName: string
  lastName: string
  introduceSelf(): void
}

function greeter(person: Person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName
}

let user = new Student('Jane', 'M.', 'User')

user.introduceSelf()
