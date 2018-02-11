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
    `${myString} is a ${typeof myString} but ${myNum} is a ${typeof myNum}!`
  )
}
