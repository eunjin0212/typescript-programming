import IPerson from './person/IPerson'
import Person, { makePerson } from './person/Person'

const testMakePerson = (): void => {
  let Kane: IPerson = makePerson('Kane')
  let Jack: IPerson = new Person('Jack')
  console.log(Kane, Jack)
}
testMakePerson()