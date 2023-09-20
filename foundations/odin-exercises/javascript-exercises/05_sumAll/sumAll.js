const sumAll = function(startNum, endNum) {
    let sum = 0;

    if (startNum < 0 || endNum < 0) return "ERROR";
    if (!Number.isInteger(startNum) || !Number.isInteger(endNum)) return "ERROR";

    for (i=startNum; i < endNum+1; i++) {
        sum += i;
    }
    for(i=startNum; i > endNum-1; i--) {
        sum += i;
    }
    
    return sum;
};
console.log(sumAll(1, 4));
module.exports = sumAll;