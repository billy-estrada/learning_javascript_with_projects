//Calculate the BMI of two individuals with given values.
//Compare BMI and output to console. 

/* Write your code below. Good luck! 🙂 */

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log(BMIMark, BMIJohn);
// let markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
}
else{
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}