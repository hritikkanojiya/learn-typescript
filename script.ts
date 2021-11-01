const add = (val1: number, val2: number): number => val1 + val2;
var result = add(5, 2);
console.log(result);

/*
 * TypeScript Data Types
 * Syntax => variableName: dataType = value;
 * Datatype should be lowercase
 */

// number => Int,Float
let countOfMinions: number = 3;

// string => Anything with ''
let minion1: string = "Kevin";
let minion2: string = "Stuart";
let minion3: string = "Bob";

// array of srings
let minions: string[] = ["Kevin", "Stuart", "Bob"];

// Object with a defined structure
let minionsObj: {
  name: string;
  talent: string[];
  height: string;
  age: number;
  isSmart: boolean;
};

// Delcaring Object
minionsObj = {
  talent: ["Leadership"],
  name: "Kevin",
  height: "Tall",
  age: 10,
  isSmart: true,
};

console.log(minionsObj['name']);

// for array of Objects use [] after array structure initialization
let minionsObjArray: {
  name: string;
  talent: string[];
  height: string;
  age: number;
  isSmart: boolean;
}[];
