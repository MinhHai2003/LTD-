
const markMass = 78; // kg
const markHeight = 1.69; // meters

const johnMass = 92; // kg
const johnHeight = 1.95; // meters

const markBMI = markMass / (markHeight * markHeight);
const johnBMI = johnMass / (johnHeight * johnHeight);


if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
} else if (johnBMI > markBMI) {
    console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`);
} else {
    console.log(`Mark and John have the same BMI (${markBMI.toFixed(1)})!`);
}