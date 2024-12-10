const reverseString = function(str) {
    let ans = "";
    let n = str.length;
    for (let i = 0; i < n; i++) {
        ans += str[n - i - 1];
    }
    return ans;
};

// Do not edit below this line
module.exports = reverseString;
