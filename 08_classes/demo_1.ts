{
  // Just defining an object
  const myIceCream = {
    cone: true,
    flavor: 'chocolate',
    numScoops: 2,
    brag: function() {
      console.log(`I have ${this.numScoops} scoops of ${this.flavor} ice cream!`)
    }
  }
  console.log('myIceCream', myIceCream)

  // === === === === === === === === === === === === === === === === === === ===

  // Creating an 'Object Constructor'
  // function IceCream(cone: boolean, flavor: string, numScoops: number) {
  //   this.cone = cone
  //   this.flavor = flavor
  //   this.numScoops = numScoops
  // }

  // IceCream.prototype.brag = function() {
  //   const returnStr = `I have ${this.numScoops} scoops of ${this.flavor} ice cream!`
  //   console.log(returnStr)
  // }

  // const yourIceCream = new IceCream(true, 'vanilla', 3)
  // console.log('yourIceCream', yourIceCream)
  // yourIceCream.brag()
}
