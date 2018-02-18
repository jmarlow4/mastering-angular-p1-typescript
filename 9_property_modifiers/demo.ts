{
  class Player {

    public name: string
    public playerClass: string
    private _isDead = false
    private _health = 100

    // demonstrate property parameters
    constructor(
      name: string,
      playerClass: string
    ) {
      this.name = name
      this.playerClass = playerClass
    }

    public get hp(): number {
      return this._health
    }

    public set hp(val: number) {
      this._health = val
    }

    public get isDead(): boolean {
      return this._isDead
    }

    public takeDamage(val: number) {
      this._health -= val
      this._checkIfDead()
    }

    private _checkIfDead() {
      if (this._health <= 0) {
        this._isDead = true
      }
    }
  }

  const myPlayer = new Player('Scrag', 'Rogue')
  console.log(`${myPlayer.name} the ${myPlayer.playerClass} has entered the game!`)
  console.log('A wild cave bear appears!')
  console.log('SLASH!')
  myPlayer.takeDamage(50)
  console.log(`${myPlayer.name} has ${myPlayer.hp} hp left!`)
  console.log(`*Gulp* ${myPlayer.name} drank a MAX POTION`)
  myPlayer.hp = 100
  console.log('KAH-POW!!')
  myPlayer.takeDamage(105)
  console.log(`${myPlayer.name} has ${myPlayer.hp} hp left!`)
  if (myPlayer.isDead) {
    console.log(`${myPlayer.name} has died!`)
  }
  
}