// Завдання 3. Дано одновимірний масив завдовжки n. Розділити його на дві частини так, щоб в
// одній частині були додатні елементи, а в іншій частині були від’ємні елементи.
var n = parseInt(prompt('Write n here: '))

function getArray(n){
    let array = [0];
    for (let i =0; i<n;i++){
        var userValue = parseFloat(prompt(`Write an element ${i} of an array here `));
        array[i] = userValue;
    }
    return array;
}
var userarray = getArray(n);
console.log(`Array written by user : ${userarray}`);

function getNewSortedArray(array){
    return array.sort(
        (el1,el2) => el1-el2
    )       
}
console.log(`Sorted array is: ${getNewSortedArray(userarray)}`);

var newNegativeArray = [];
userarray.forEach(element => {
    if(element <0){
        newNegativeArray.push(element);
    }
});
console.log(`Negative elements array : ${newNegativeArray}`);

var newPositiveArray = [];
userarray.forEach(element => {
    if(element >=0){
        newPositiveArray.push(element);
    }
});
console.log(`Positive elements array : ${newPositiveArray}`);