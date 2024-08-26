function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
            return false;
        }
    }
    return true;
}

const isBelowThreshold = (currentValue) => currentValue < 40;
const array = [1, 30, 39, 29, 10, 13];

console.log(every(array, isBelowThreshold)); // Output: true