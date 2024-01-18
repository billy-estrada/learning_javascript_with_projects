/*Calculate tips again. This time with an input of an array.
Create an array called tips, then create an array called totals
Add the bill+tip in the totals array
*/

/* Write your code below. Good luck! 🙂 */

const bills = [125, 555, 44];

function calcTip(billValue){
   return (billValue >= 50 && billValue <= 300) ? billValue * 0.15 : billValue * 0.2;
}

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

let totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] +tips[2]]

console.log(totals);