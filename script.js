var add = function (val1, val2) { return val1 + val2; };
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
/*
 * Typeinference automatically assigns a type to the variable if a corresponding value is assigned to it.
 * Here you don't need to mention type string.
 * This only works if you assigned a value to the variable.
 */
var master = "Gru";
// master = 1; // This raise an Error.
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
    isSmart: true
};
console.log(minionsObj["name"]);
console.table(minionsObj);
// for array of Objects use [] after array structure initialization
var minionsObjArray;
// Using type union to declare multiple types to a single variable
var enemies = "Scarlet Overkill";
console.log(enemies);
enemies = ["Scarlet Overkill", "Vector", "Eduardo Perez", "Balthazar Bratt"];
console.log(enemies);
// Class
var Movie = /** @class */ (function () {
    function Movie(name, rating, grade, directors, boxOfficeCollection) {
        this.name = name;
        this.rating = rating;
        this.grade = grade;
        this.directors = directors;
        this.boxOfficeCollection = boxOfficeCollection;
    }
    Movie.prototype.listDirectors = function () {
        return this.directors;
    };
    return Movie;
}());
var DespicableMe = new Movie("Despicable Me", 8.5, "A", ["Pierre Coffin", "Chris Renaud"], "$543.1 million");
var listDirectors = DespicableMe.listDirectors();
console.log(listDirectors);
