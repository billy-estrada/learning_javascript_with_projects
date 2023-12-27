/*Average the score of three gymnastics teams. 
A team wins only if it has at least double the average
score of the other team. Otherwise, no winner.
*/

/* Write your code below. Good luck! 🙂 */

const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

let scoreDolphins = calcAverage(85,54, 41);
let scoreKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas){
    if (avgDolphins > avgKoalas * 2){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas > avgDolphins * 2){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }
    else console.log("No team wins...");
}