// 1. rewrite the filter functions in a functional style, meaning:
//  a) pure functions (no side effects)
//  b) no for-loops, use array methods instead
//  c) no mutating data
// 2. see if you can can compose the various filter functions into one higher-order function

let teachers = [
  { name: "Corné", age: 34, height: 182 },
  { name: "Gerrit", age: 22, height: 205 },
  { name: "Peter", age: 48, height: 165 },
  { name: "Bertwim", age: 32, height: 178 },
];

/*
  print everyone's names
*/

function printNames() {
  for (let i = 0; i < teachers.length; i++) {
    console.log(teachers[i].name);
  }
}

/*
  filter by age
*/

function filterAge(limit) {
  let result = [];
  for (let i = 0; i < teachers.length; i++) {
    if (teachers[i].age < limit) {
      result.push(teachers[i]);
    }
  }
  teachers = result;
}

filterAge(40);
console.log(teachers);

/*
  filter name by predicate 
*/

const startsWithC = function (name) {
  return name.startsWith("C");
};

function filterName(predicate) {
  let result = [];
  for (let i = 0; i < teachers.length; i++) {
    const teacher = teachers[i];
    if (predicate(teacher.name)) {
      result.push(teachers[i]);
    }
  }
  teachers = result;
}

filterName(startsWithC);
console.log(teachers);

/*
  create greeting strings for all teachers
*/

let greetings = [];

function createGreetings() {
  for (let i = 0; i < teachers.length; i++) {
    const greeting = `Ik ben ${teachers[i].name} en ik ben ${teachers[i].age} jaar oud.`;
    greetings.push(greeting);
  }
}

createGreetings();
console.log(greetings);

/*
  get the average age
*/
function averageAge() {
  let sum = 0;
  for (let i = 0; i < teachers.length; i++) {
    sum += teachers[i].age;
  }

  return sum / teachers.length;
}

console.log(averageAge());

/*
  concatenate the names into a string
*/
function concatenateString() {
  let result = "";
  for (let i = 0; i < teachers.length; i++) {
    let separator = ", ";
    if (i === teachers.length - 1) {
      separator = ".";
    } else if (i === teachers.length - 2) {
      separator = " en ";
    }
    result += teachers[i].name + separator;
  }
  return result;
}

console.log(concatenateString());
