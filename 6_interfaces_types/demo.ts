{
  interface Animal {
    numLegs: number
    species: string
  }

  interface Pet {
    name: string
  }

  type dog = Animal | Pet | string

  const yourDog: dog = {
    numLegs: 4,
    species: 'Canis lupus familiaris'
  }

  const hisDog: dog = {
    name: 'spot'
  }

  const theirDog: dog = 'woofer'
  const theirOtherDog: dog = 2

  const myDog = undefined
  // myDog.name = 'Porkchop'

}
