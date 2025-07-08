function addExtra(listOfNumbers){
    return listOfNumbers.concat(listOfNumbers[listOfNumbers.length - 1] + 1);
}

function addExtra(listOfNumbers) {
    const lastNumber = listOfNumbers[listOfNumbers.length - 1];
    return [...listOfNumbers, lastNumber + 1];
}
console.log(addExtra([1,2,3]))
console.log(addExtra([1,2]))
