var add = function (val1, val2) {
  return val1 + val2;
};
var result = add(5, 2);
console.log(result);
/*
 * TypeScript Data Types
 * Syntax => variableName: dataType = value;
 * Datatype should be lowercase
 */
// number => Int,Float
var countOfMinions = 3;
// string => Anything with ''
var minion1 = "Kevin";
var minion2 = "Stuart";
var minion3 = "Bob";
// array of srings
var minions = ["Kevin", "Stuart", "Bob"];
// Object with a defined structure
var minionsObj;
// Delcaring Object
minionsObj = {
  talent: ["Leadership"],
  name: "Kevin",
  height: "Tall",
  age: 10,
  isSmart: true,
};
console.log(minionsObj["name"]);
// for array of Objects use [] after array structure initialization
var minionsObjArray;
