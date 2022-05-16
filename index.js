const teachers = [
  { name: "Corné", age: 34 },
  { name: "Gerrit", age: 22 },
  { name: "Peter", age: 48 },
  { name: "Bertwim", age: 32 },
];

// 1. rewrite the filter functions in a functional style, meaning:
//  a) pure function (no side effects)
//  b) no for-loops
//  c) no mutating data
// 2. see if you can can compose the various filter functions into one higher-order function

function filterAge(limit) {
  let result = [];
  for (let i = 0; i < teachers.length; i++) {
    if (teachers[i].age < limit) {
      result.push(teachers[i]);
    }
  }
  return result;
}

const startsWithC = function (teacher) {
  return teacher.name.startsWith("C");
};

function filterName(predicate) {
  let result = [];
  for (let i = 0; i < teachers.length; i++) {
    const teacher = teachers[i];
    if (predicate(teacher)) {
      result.push(teachers[i]);
    }
  }
  return result;
}

const result = filterName(startsWithC);
console.log(result);
