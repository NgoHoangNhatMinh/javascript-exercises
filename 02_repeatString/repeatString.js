const repeatString = function(str, n) {
    if (n === 0) {
        return "";
    } else if (n < 0) {
        return "ERROR";
    }

    let ans = str;
    for (let i = 0; i < n - 1; i++) {
        ans += str;
    }
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
