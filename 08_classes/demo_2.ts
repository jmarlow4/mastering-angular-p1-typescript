{
  // Introducing... THE CLASS!!
  class Popsicle {

    flavor: string

    constructor(flavor: string) {
      this.flavor = flavor
    }

    brag(): void {
      console.log(`I have a ${this.flavor} popsicle!`)
    }

  }

  const myPopsicle = new Popsicle('strawberry')
  myPopsicle.brag()
}
