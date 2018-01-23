// Arrays...
{
  const myStringArr: string[] = ['0', '1', '2']

  let myString: string
  let myNum: number

  myStringArr.push(false)
  myStringArr.push('3')
  console.log(myStringArr)

  myString = myStringArr[0]
  myNum = +myStringArr[1]
  console.log(
    `${myString} is a ${typeof myString} by ${myNum} is a ${typeof myNum}!`
  )
}

// Objects...
{
  const myObject: object = { foo: 'bar' }

  const mySecondObject: {} = { foo: 'bar' }

  let myAny: any = 42
  myAny = { foo: 'bar' }
  myAny = 'foo'
  myAny = true
}
