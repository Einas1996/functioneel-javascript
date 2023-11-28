import {
  getNames,
  filterAge,
  filterNames,
  createGreetings,
  getAverageAge,
  concatenateString,
} from "./index";

test("print everyone's names", () => {
  const result = getNames();
  expect(result).toEqual([
    "Gerard",
    "Katarina",
    "Ali",
    "Betty",
    "Berend",
    "Sander",
    "Vera",
    "Archibald",
    "Ulf",
    "Hichem",
  ]);
});

test("filter out people under 24", () => {
  const result = filterAge(24);
  expect (result). toEqual([
  { name: "Katarina", age: 22, height: 172 },
  { name: "Vera", age: 19, height: 148 },
  { name: "Ulf", age: 12, height: 148 },
  { name: "Hichem", age: 21, height: 183 },
  ]);
});

test("filter out people under 30", () => {
  const result = filterAge(30);
  expect(result).toEqual([
    { name: "Katarina", age: 22, height: 172 },
    { name: "Sander", age: 25, height: 192 },
    { name: "Vera", age: 19, height: 148 },
    { name: "Ulf", age: 12, height: 148 },
    { name: "Hichem", age: 21, height: 183 },
  ]);
});

test("show the people whose name ends with a", () => {
  function endsWith(letter) {
    return (str) => str.endsWith(letter);
  }
  const result = filterNames(endsWith("a"));
  expect(result).toEqual([
    { name: "Katarina", age: 22, height: 172 },
    { name: "Vera", age: 19, height: 148 },
  ]);
});

test("show the people whose name starts with B", () => {
  function startsWith(letter) {
    return (str) => str.startsWith(letter);
  }
  const result = filterNames(startsWith("B"));
  expect(result).toEqual([
    { name: "Betty", age: 53, height: 158 },
    { name: "Berend", age: 32, height: 178 },
  ]);
});

test("create greetings strings", () => {
  const result = createGreetings();
  expect(result).toEqual([
    "Ik ben Gerard en ik ben 34 jaar oud.",
    "Ik ben Katarina en ik ben 22 jaar oud.",
    "Ik ben Ali en ik ben 48 jaar oud.",
    "Ik ben Betty en ik ben 53 jaar oud.",
    "Ik ben Berend en ik ben 32 jaar oud.",
    "Ik ben Sander en ik ben 25 jaar oud.",
    "Ik ben Vera en ik ben 19 jaar oud.",
    "Ik ben Archibald en ik ben 102 jaar oud.",
    "Ik ben Ulf en ik ben 12 jaar oud.",
    "Ik ben Hichem en ik ben 21 jaar oud.",
  ]);
});

test("get the average age", () => {
  const result = getAverageAge();
  expect(result).toBe(36.8);
});

test("concatenate people's info into string", () => {
  const result = concatenateString();
  expect(result).toBe(
    "Gerard, Katarina, Ali, Betty, Berend, Sander, Vera, Archibald, Ulf en Hichem."
  );
});
