'use strict'

function isSquareNumber(num) {
    return num >= 0 && Math.sqrt(num) % 1 === 0;
}

const fibonacci = () => {
    let fibList = [0, 1];
    while (fibList[fibList.length - 1] <= 350) {
        const lastElement = fibList[fibList.length - 1];
        const beforeLastElement = fibList[fibList.length - 2];
        fibList.push(lastElement + beforeLastElement);
    }
    return fibList;
}

const isFibonnaci = (num) => {
    if (isSquareNumber(5*(num*num)-4) || isSquareNumber(5*(num*num)+4)) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    fibonacci,
    isFibonnaci
}
