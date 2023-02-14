/*let js = "amazing";

cosole.log(40 + 8 + 9);
console.log("prit");
let firstName = " Patel";
console.log(firstName);*/
 /*
function calcAge1(birthYear);{
    return 2037 - birthYear;
}
const age = calcAge1(1999);
console.log(age1);

const calcAge2 = function(birthYear){
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);

// arrow fnction
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = clacAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstname) => {
    const age = 2037 - birthYear;
    const retirement =  65 - age;
   
    //return retirnment;
    return `${firstname} retires in ${retirement} years`;

}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1999, 'Bob'));

*/
/*
function cutFruitPieces(fruit){
    return fruit * 4;

}
function fruitProcessor (apples, oranges){
     const applePieces = cutFruitPieces(apples);
     const orangesPieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apple and ${orangesPieces} orangges.`;
    return juice;
}
console.log(fruitProcessor(2,3)); */
/*
const yearsUntilRetirement = (birthYear, firstname) => {
    const age = 2037 - birthYear;
    const retirement =  65 - age;
    return `${firstname} retires in ${retirnment} years`;
}

*//*
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bill = [125, 555, 44];
const tip = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
const total = [bill[0] + tip[0], bill[1] + tip[1], bill[2] + tip[2]];
console.log(bill, tip);
 */
/*
const jonas = {
    firstname: 'prit',
lastName: 'Patel',
age: 2060 - 1999,
friend: ['jay', 'kris', 'dwij']
};
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log (jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);



const interestedIn  = prompt('what do u eant toknow?');

if(jonas[interestedIn]){
console.log(jonas[interestedIn]);
}
else {
    console.log('wrong request'
    )
}


jonas.location = 'barrie';
jonas['insta'] = '@pritpatel7050';
console.log(jonas);
*/
/*
console.log(`${jonas.firstName} has ${jonas.friend.length} and his best friend s called
${jonas.friends[0]}` );  

*//*
const jonas = {
    fistNmae: 'prit',
    lastName: 'Patel',
    job: 'study',
    friend: ['jay', 'harsh','kris'],
    hasDriverLicence: true,
birthYear: 1999,


    calcAge: function(birthyear)
    {
        return 2037 - birthyear;
    }

};
console.log(jonas.calcAge(1999));
console.log(jonas['calcAge'](1999));
*//*
const john ={
    fullName: 'Mark miller',
    mass: 92,
    height: 1.8,
    caclBMI: function (){
        this.bmi = this.mass / this.height ** 2;
    return this.bmi;
    }
};

const john  ={
    fullName: 'Kris',
    mass: 55,
    height: 1.5,
    calcBMI: function (){
this.bmi = this.mass / this.height ** 2;
return this.bmi;
    }
}



mark.caclBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi){
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
}
else if (john.bmi > mark.bmi){
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}
*//*
for (let rep =1; rep <= 10; rep++){
    console.log(`Lifting weights rep ${rep}`);
}
*/
const jonas = [
    'Prit', 'Patel','2022-1999', ['kris', 'jay']
];
for (let i = 0; ; i++){
    console.log(jonas[i], typeof jonas[i]);
type.push(typeof jonas[i]);
}
console.log(types);

const years = [1991, 2007, 2003];
const  ages = [];

for (let i = 0; i < years.length; )