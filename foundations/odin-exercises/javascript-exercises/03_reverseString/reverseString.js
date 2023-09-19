const reverseString = function(string) {
    let result = string.split('').reverse().join('');
    return result;
};

module.exports = reverseString;
