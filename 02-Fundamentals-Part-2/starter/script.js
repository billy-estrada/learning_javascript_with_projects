////////////////////////////////

//Function declaration
function calcAge1(birthYear){
    return 2037 - birthYear;
}

//Function expression 
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}

//Arrow function 
const calcAge3 = birthYear => 2037 - birthYear;
const age2 = calcAge2(1991);
console.log(age2);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, "James"));
console.log(yearsUntilRetirement(1980, "Bob"));

////////////////////////////////

//function call within a function 

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges); 
    const juice = `Juice with ${applePieces} pieces of apple and ${orangesPieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

/////////////////////////////////

const calcAge = birthYear => 2037 - birthYear;

const yearsUntilRetired = function (birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) 
    return `${firstName} retires in ${retirement} years`;
    else {
    return `${firstName} is already retired`;
    }
}

console.log(yearsUntilRetired(1970, "Bob"))

////////////////////////////////////
//Working with arrays

const friends = ['John', 'Seth', 'David'];

//OR

const years = new Array(2003, 2004, 2005);

//Printing
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length); //gives length of array

//multiple data types in an array
const mixture = ['Jonas', 'John', 2037- 1991, 'Bob', friends];
