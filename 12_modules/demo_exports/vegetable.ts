export class Vegetable {

  constructor(public type: string) {}

  eat() {
    console.log(`Mmm...I love this ${this.type}`)
  }

}
