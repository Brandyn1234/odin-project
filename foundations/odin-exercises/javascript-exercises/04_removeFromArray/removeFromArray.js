const removeFromArray = function(array, ...args) {
    const result = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
            result.push(item);
        };
    });

    return result;
};

console.log(removeFromArray([1, 2, 3, 4, 3], 3));
module.exports = removeFromArray;
