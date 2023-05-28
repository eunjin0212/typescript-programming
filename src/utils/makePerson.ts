export function makePerson(name: string, age: number) {
  return { name, age }
}
export function testMakePerson() {
  console.log(
    makePerson('jane', 23),
    makePerson('jack', 23)
  )
}