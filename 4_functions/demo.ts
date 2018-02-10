{
  // function declaration
  function concatTwo(str1: string, str2?: string): string {
    return str1 + ( str2 || '' )
  }

  // function static typing
  const concatThree: (str1: string, str2: string, str3: string) => string

  // function expression definition
  // concatThree = (str1: string, str2: string, str3: string): string => {
  //   return str1 + str2 + str3
  // }

  console.log(concatTwo('Hello'))
  console.log(concatTwo('Hello', '!!!'))
  console.log(concatThree('Hello', ', ', 'TypeScript!'))
}
