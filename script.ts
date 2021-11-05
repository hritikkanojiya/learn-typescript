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

/*
 * Typeinference automatically assigns a type to the variable if a corresponding value is assigned to it.
 * Here you don't need to mention type string.
 * This only works if you assigned a value to the variable.
 */
let master = "Gru";

// master = 1; // This raise an Error.

// array of srings
let minions: string[] = ["Kevin", "Stuart", "Bob"];

// Setting type alias
type Minions = {
  name: string;
  talent: string[];
  height: string;
  age: number;
  isSmart: boolean;
};

// Object with a defined structure
let minionsObj: Minions;

// Delcaring Object
minionsObj = {
  talent: ["Leadership"],
  name: "Kevin",
  height: "Tall",
  age: 10,
  isSmart: true,
};

console.log(minionsObj["name"]);
console.table(minionsObj);

// for array of Objects use [] after array structure initialization
let minionsObjArray: Minions[];

// Using type union to declare multiple types to a single variable
let enemies: string | string[] = "Scarlet Overkill";
console.log(enemies);

enemies = ["Scarlet Overkill", "Vector", "Eduardo Perez", "Balthazar Bratt"];
console.log(enemies);