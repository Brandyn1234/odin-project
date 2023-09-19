const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    let multiString = "";
    for(let i = 0; i < num; i++) {
        multiString += string;
    }
    return multiString;
};

module.exports = repeatString;
