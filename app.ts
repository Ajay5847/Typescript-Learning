type Admin = {
  name: string;
  privilages: string[];
  ram?: number
}

type Employee = {
  name: string;
  startDate: Date;
}

type EleveateEmployee = Admin & Employee

const e1: EleveateEmployee = {
  name: 'Ajay',
  privilages: ["max"],
  startDate: new Date()
}

type Combinable = string | number;
type Numeric = boolean | number;

type Universal = Combinable & Numeric

// const data = {
//   name: 'Ajay',
//   age: 10,
//   job?: { title: 'SDE' }
// }

// console.log(data?.job?.title);

// Generics
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB)
}

const mergeObject1 = merge({ name: 'Ajay', age: 20 }, { id: 234 })
console.log(mergeObject1);
