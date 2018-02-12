{
    var Colors = void 0;
    (function (Colors) {
        Colors[Colors["Red"] = 0] = "Red";
        Colors[Colors["Blue"] = 1] = "Blue";
        Colors[Colors["Green"] = 2] = "Green";
    })(Colors || (Colors = {}));
    // Can't do this because enum properties are read-only
    // Colors.Red = '1'
    console.log(Colors);
    /*
    Colors = {
      '0': 'Red',
      '1': 'Blue',
      '2': 'Green',
      Red: 0,
      Blue: 1,
      Green: 2
    } */
    // Red -- 0
    console.log(Colors[0] + ' -- ' + Colors.Red);
    var myCard = 0 /* Aces */;
    if (myCard === 0 /* Aces */) {
        console.log('Aces high!');
    }
    // Won't work... defining your enum as constants means no "CardSuits" variable
    // will be compiled and so it won't be looked up in memory, resulting in
    // limited functionality, but a slight performance boost
    myCard = CardSuits[1];
    console.log(myCard);
}
