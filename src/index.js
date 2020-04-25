'use strict'

function isSquareNumber(num) {
    return num >= 0 && Math.sqrt(num) % 1 === 0;
}

const fibonacci = () => {
    let fibList = [0, 1];
    const limit = 350;
    while (fibList[fibList.length - 1] <= limit) {
        const lastElement = fibList[fibList.length - 1];
        const beforeLastElement = fibList[fibList.length - 2];
        fibList.push(lastElement + beforeLastElement);
    }
    return fibList;
}

const isFibonnaci = (num) => {
    const magicNumber = 5*(num*num); 
    return (isSquareNumber(magicNumber-4) || isSquareNumber(magicNumber+4));
}

module.exports = {
    fibonacci,
    isFibonnaci
}
