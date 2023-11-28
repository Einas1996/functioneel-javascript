// 1. rewrite the filter functions in a functional style, meaning:
//  a) pure functions (no side effects)
//  b) no for-loops, use array methods instead
//  c) no mutating data
// 2. see if you can compose the various filter functions into one higher-order function

interface Person {
  name: string;
  age: number;
  height: number;
}

const people: Person[] = [
  { name: "Gerard", age: 34, height: 182 },
  { name: "Katarina", age: 22, height: 172 },
  { name: "Ali", age: 48, height: 203 },
  { name: "Betty", age: 53, height: 158 },
  { name: "Berend", age: 32, height: 178 },
  { name: "Sander", age: 25, height: 192 },
  { name: "Vera", age: 19, height: 148 },
  { name: "Archibald", age: 102, height: 155 },
  { name: "Ulf", age: 12, height: 148 },
  { name: "Hichem", age: 21, height: 183 },
];

/*
  print everyone's names
*/

//   export function getNames() {
//   let result: string[] = [];
//   for (let i = 0; i < people.length; i++) {
//     result.push(people[i].name);
//   }
//   return result;
// }

// higher-order function
export function getNames(): string[] {
  return people.map(person => person.name);
}

/*
  filter by age
*/

// export function filterAge(limit: number) {
//   let result: Person[] = [];
//   for (let i = 0; i < people.length; i++) {
//     if (people[i].age < limit) {
//       result.push(people[i]);
//     }
//   }
//   return result;
// }

export function filterAge(limit: number): Person[] {
  return people.filter(person => person.age < limit);
}
/*
  filter name by predicate
*/

// export function filterNames(predicate: (str: string) => boolean) {
//   let result: Person[] = [];
//   for (let i = 0; i < people.length; i++) {
//     const person = people[i];
//     if (predicate(person.name)) {
//       result.push(person);
//     }
//   }
//   return result;
// }

export function filterNames(predicate: (str: string) => boolean): Person[] {
  return people.filter(person => predicate(person.name));
}

/*
  create greeting strings for all teachers
*/

// export function createGreetings() {
//   let greetings: string[] = [];
//   for (let i = 0; i < people.length; i++) {
//     const greeting = `Ik ben ${people[i].name} en ik ben ${people[i].age} jaar oud.`;
//     greetings.push(greeting);
//   }
//   return greetings;
// }

export function createGreetings(): string[] {
  return people.map(person => `Ik ben ${person.name} en ik ben ${person.age} jaar oud.`);
}


/*
  get the average age
*/
// export function getAverageAge() {
//   let sum = 0;
//   for (let i = 0; i < people.length; i++) {
//     sum += people[i].age;
//   }

//   return sum / people.length;
// }

export function getAverageAge(): number {
  const sum = people.reduce((accumulator, person) => accumulator + person.age, 0);
  return sum / people.length;
}

/*
  concatenate the names into a string
*/
export function concatenateString() {
  let result = "";
  for (let i = 0; i < people.length; i++) {
    let separator = ", ";
    if (i === people.length - 1) {
      separator = ".";
    } else if (i === people.length - 2) {
      separator = " en ";
    }
    result += people[i].name + separator;
  }
  return result;
}
