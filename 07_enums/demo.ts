{
  // Enumerations (enums) aren't designed to store data.
  // They're designed to ENUMERATE a set of specific cases.
  enum Directions {
    Up,
    Down,
    Left,
    Right
  }

  // Can't do this because enum properties are read-only
  // Once you've set it, you can't change it
  // Directions.Up = '2'
  // Directions.North = '5'

  console.log(Directions.Up)
  /*
  Directions = {
    '0': 'Up',
    '1': 'Down',
    '2': 'Left',
    '3': 'Right',
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3
  } */

  console.log(Directions[0] + ' -- ' + Directions.Up)
  // Up -- 0

  // Use const for a performance bump, but beware!
  const enum CardSuits {
    Clubs,
    Diamonds,
    Hearts,
    Spades
  }

  let myCard: CardSuits = CardSuits.Diamonds

  myCard = CardSuits.Spades

  if (myCard === CardSuits.Spades) {
    console.log('Ace of Spades!')
  }

  // Won't work... defining your enum as constants means no "CardSuits" variable
  // will be compiled and so it won't be looked up in memory, resulting in
  // limited functionality, but a slight performance boost
  myCard = CardSuits[1]

  console.log(myCard)
}
