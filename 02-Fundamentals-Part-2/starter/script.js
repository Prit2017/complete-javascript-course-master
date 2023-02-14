/*
for (let exercise =1; exercise < 4; exercise++){
    console.log(`----- Starating Exercise ${exercise}`);

    for (let rep =1; rep < 6; rep++){
        console.log(`Exercise ${exercise}: Lifting weight repetation ${rep}`);
    }
}
*/ /*
let dice = Math.trunc(Math.random()* 6) + 1;

while(dice !== 6){
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6)+1;
    if (dice === 6) console.log('Loop is about to end... ');
}


const calcTip = function (bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
 const totals = [];

 for(let i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
 }
 console.log(bills, tips, totals);
*/ /*

 const calcAverage = function (arr){
    let sum = 0;
    for(let i = 0; i < arr.lenght; i++){
      sum =  sum + arr[i];
    }
    return sum / arr.length;
 }
  console.log(calcAverage([2, 3, 6]));
*/
