// Data 1
let massMark1 = 78;
let heightMark1 = 1.69;
let massJohn1 = 92;
let heightJohn1 = 1.95;

let BMIMark1 = massMark1 / (heightMark1 ** 2);
let BMIJohn1 = massJohn1 / (heightJohn1 ** 2);

if (BMIMark1 > BMIJohn1) {
    console.log(`Mark's BMI (${BMIMark1.toFixed(2)}) is higher than John's (${BMIJohn1.toFixed(2)})!`);
} else if (BMIMark1 < BMIJohn1) {
    console.log(`John's BMI (${BMIJohn1.toFixed(2)}) is higher than Mark's (${BMIMark1.toFixed(2)})!`);
} else {
    console.log(`Mark and John have the same BMI (${BMIMark1.toFixed(2)})!`);
}

// Data 2
let massMark2 = 95;
let heightMark2 = 1.88;
let massJohn2 = 85;
let heightJohn2 = 1.76;

let BMIMark2 = massMark2 / (heightMark2 ** 2);
let BMIJohn2 = massJohn2 / (heightJohn2 ** 2);

if (BMIMark2 > BMIJohn2) {
    console.log(`Mark's BMI (${BMIMark2.toFixed(2)}) is higher than John's (${BMIJohn2.toFixed(2)})!`);
} else if (BMIMark2 < BMIJohn2) {
    console.log(`John's BMI (${BMIJohn2.toFixed(2)}) is higher than Mark's (${BMIMark2.toFixed(2)})!`);
} else {
    console.log(`Mark and John have the same BMI (${BMIMark2.toFixed(2)})!`);
}